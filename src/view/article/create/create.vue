<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-01 11:19:46
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-05 16:45:46
-->
<template>
  <div style="background-color: #F3F3F4;">
    <a-input v-model:value="title" class="title" :bordered="false" placeholder="输入文章标题..." />
    <md-editor v-model="content" @onUploadImg="onUploadImg" @onHtmlChanged="saveHtml" />
    <div class="footer">
      <a-button shape="round">存入草稿箱</a-button>
      <a-button type="primary" shape="round" @click="releaseConfirm">发布</a-button>
    </div>

    <!-- 发布弹窗 -->
    <a-modal v-model:visible="showRelease" title="发布文章" @ok="handleOk">
      <template #footer>
        <a-button key="back" @click="handleCancel">取消发布</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">发布文章</a-button>
      </template>
      <a-form-item label="文章简介">
        <a-input v-model:value="description" />
      </a-form-item>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import request from '@/utils/request'
import moment from '_moment@2.29.3@moment';
import { create } from '@/api/article'
import { message } from 'ant-design-vue';

MdEditor.config({
  markedRenderer(renderer) {
    // 调整标题内容
    renderer.heading = (text, level) => {
      return `<h${level} id="heading-${level}"><span class="h-text">${text}</span></h${level}>`;
    };
    return renderer;
  }
});
const content = ref('');
const title = ref('')
const showRelease = ref(false)
const loading = ref<boolean>(false)
const description = ref<string>('')
const contengHtml = ref<string>('')

const saveHtml = (h: string) => { contengHtml.value = h }
// 图片上传功能
const onUploadImg = async (files: File[], callback: Function) => {
  // console.log(files)
  const res = await Promise.all(
    files.map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append('file', file);

        request
          .post('/upload/picture', form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => rev(res))
          .catch((error) => rej(error));
      });
    })
  );
  callback(res.map((item: any) => {
    return item.data.url
  }));
}

// 文章发布校验
const check = () => {
  if (title.value === '') return { error: true, message: '标题不能为空' }
  if (content.value === '') return { error: true, message: '内容不能为空' }
  return { error: false, message: '' }
}

// 打开发布弹窗
const releaseConfirm = () => {
  showRelease.value = true
}

// 确认发布
const handleOk = () => {
  if (check().error) {
    message.error(check().message)
    return false
  }
  loading.value = false
  let params = {
    title: title.value,
    content: contengHtml.value,
    description: description.value,
    createTime: moment(new Date()).format('YYYYMMDDHHmmss')
  }
  create(params)
    .then(res => {
      if (res.data.code === 0) {
        message.success('文章创建成功')
      } else {
        message.error('文章创建失败')
      }
    })
    .catch(e => message.error(`文章创建失败${e.message}`))
  showRelease.value = false
}

// 关闭发布弹窗
const handleCancel = () => {
  showRelease.value = false;
};
</script>

<style lang="scss">
.title {
  height: 40px;
  margin-bottom: 20px;
}

.footer {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    margin-left: 30px;
  }
}
</style>
