<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-01 11:23:34
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-05 16:45:29
-->
<template>
	<a-row>
		<a-col :span="24">
			<a-card title="文章列表">
				<div class="header">

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
		const list = ref([])
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
		return { columns, list }
	},
});
</script>

<style>
</style>
