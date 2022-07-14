<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-01 11:23:34
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-13 15:11:11
-->
<template>
	<a-row>
		<a-col :span="24">
			<a-card title="文章列表">
				<div class="header clearfix">
					<div style="float: right;">
						<a-input-group compact>
							<a-select v-model:value="columnType">
								<a-select-option v-for="item in columnTypes" :key="item.value" :value="item.value">{{ item.label }}
								</a-select-option>
							</a-select>
							<a-input-search v-model:value="columnValue" @search="onSearch" style="width: 200px" placeholder="请输入搜索内容" />
						</a-input-group>
					</div>
				</div>
				<div class="pageContent">
					<a-table :columns="columns" :data-source="list">
						<template #bodyCell="{ column, text }">
							<template v-if="column.dataIndex === 'name'">
								<a>{{ text }}</a>
							</template>
						</template>
					</a-table>
				</div>
			</a-card>

		</a-col>
	</a-row>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import { getList } from '@/api/article'
import { message } from 'ant-design-vue';
const columns = [
	{
		title: '标题',
		dataIndex: 'title',
	},
	{
		title: '简介',
		dataIndex: 'description',
	},
	{
		title: '创建时间',
		dataIndex: 'createTime',
	},
]
export default defineComponent({
	setup() {
		onBeforeMount(() => {
			handleGetList()
		})
		let columnType = ref('title')
		let columnValue = ref('')
		let columnTypes = ref([
			{ label: '标题', value: 'title' },
			{ label: '描述', value: 'description' },
		])
		let list = ref([])
		const handleGetList = () => {
			const params = {}
			getList(params)
				.then(res => {
					if (res.data.code === 0) {
						list.value = res.data.data
					} else {
						message.error('查询列表失败')
					}
				})
				.catch(e => message.error('查询列表失败'))
		}
		const onSearch = () => {

		}
		return { columns, list, columnType, columnValue, columnTypes, onSearch }
	},
});
</script>

<style>
</style>
