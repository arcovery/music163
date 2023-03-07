<template>
	<div>
		<van-search
			v-model="value"
			placeholder="请输入搜索关键词"
			@input="search(value)" />
		<div
			class="new-box"
			v-if="!value">
			<div class="title">热门搜索</div>
			<div
				class="hot_name_wrap"
				v-if="Object.keys(hot).length">
				<van-button
					class="hot_item"
					round
					type="default"
					v-for="item in hot.result.hots"
					:key="item.first"
					@click=";(value = item.first), search()"
					>{{ item.first }}</van-button
				>
			</div>
		</div>

		<div
			class="new-box"
			v-else>
			<div class="title">最佳匹配</div>
			<!-- <van-cell
				v-for="item in data.songs"
				:key="item.id"
				:title="item.name"
				size="large"
				:label="item.artists[0].name">
				<template #right-icon>
					<van-icon
						name="play-circle-o"
						size="25" />
				</template>
			</van-cell> -->
			<div v-if="Object.keys(data).length">
				<musicCell
					v-for="item in data.result.songs"
					:key="item.id"
					:id="item.id"
					:title="item.name"
					size="large"
					:artists="item.artists[0].name"></musicCell>
			</div>
		</div>
	</div>
</template>

<script>
import { searchAPI, hotSearchAPI } from '@/api/server'
export default {
	name: 'home',
	data() {
		return {
			value: '',
			lastTime: null,
			data: {},
			hot: {},
		}
	},
	methods: {
		search() {
			if (!this.value.trim()) {
				return clearTimeout(this.lastTime)
			}
			this.lastTime && clearTimeout(this.lastTime)
			this.lastTime = setTimeout(async () => {
				this.data = await searchAPI(this.value)
			}, 200)
		},
	},
	async created() {
		this.hot = await hotSearchAPI()
	},
}
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
	padding: 10px;
}

/*热门搜索文字标题样式 */
.hot_title {
	font-size: 16px;
	color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
	margin: 10px 0;
}

/* 热搜词_样式 */
.hot_item {
	display: inline-block;
	height: 35px;
	margin-right: 20px;
	margin-bottom: 15px;
	padding: 10px 10px;
	font-size: 16px;
	line-height: 35px;
	color: #333;
	border-color: #d3d4da;
	border-radius: 20px;
	border: 1px solid #d3d4da;
}
</style>
