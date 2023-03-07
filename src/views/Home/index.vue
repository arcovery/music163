<template>
	<div class="recommand">
		<div class="title">推荐歌单</div>
		<van-grid
			:border="false"
			:column-num="3">
			<van-grid-item
				v-for="item in data.result"
				:key="item.id">
				<van-image :src="item.picUrl" />
				<div class="song_name">{{ item.name }}</div>
			</van-grid-item>
		</van-grid>
		<div class="new-box">
			<div class="title">最新音乐</div>
			<!-- <van-cell
				v-for="item in list"
				:key="item.id"
				:title="item.name"
				size="large"
				:label="item.song.album.company">
				<template #right-icon>
					<van-icon
						name="play-circle-o"
						size="25" />
				</template>
			</van-cell> -->
			<musicCell
				v-for="item in list.result"
				:key="item.id"
				:id="item.id"
				:title="item.name"
				size="large"
				:artists="item.song.artists[0].name"></musicCell>
		</div>
	</div>
</template>

<script lang="js">
import { personalizedAPI, newSongAPI } from '@/api/server.js'
export default {
	name: 'home',
	data() {
		return {
			data: [],
			list: [],
		}
	},
	async created() {
		this.data = await personalizedAPI(12)
		this.list = await newSongAPI(12)
	},
}
</script>

<style scoped>
/* 标题 */
.title {
	padding: 10px 15px;
	margin: 0 0 15px 0;
	background-color: #eee;
	color: #333;
	font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
	font-size: 16px;
	padding: 0 5px;
	margin-bottom: 10px;
	word-break: break-all;
	text-overflow: ellipsis;
	display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
	-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
	-webkit-line-clamp: 2; /** 显示的行数 **/
	overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
