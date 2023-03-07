import request from '@/api'

//搜索接口
export function searchAPI(data) {
	return request({
		method: 'get',
		url: '/search',
		params: {
			keywords: data,
		},
	})
}
//获取推荐歌单
export function personalizedAPI(data) {
	return request({
		method: 'get',
		url: '/personalized',
		params: {
			limit: data,
		},
	})
}
//获取最新音乐
export function newSongAPI(data) {
	return request({
		method: 'get',
		url: '/personalized/newsong',
		params: {
			limit: data,
		},
	})
}
//获取热门搜索
export function hotSearchAPI() {
	return request({
		method: 'get',
		url: '/search/hot',
	})
}

// 播放页 - 获取歌曲详情
export const getSongById = id =>
	request({
		url: `/song/detail?ids=${id}`,
		method: 'GET',
	})

// 播放页 - 获取歌词
export const getLyricById = id =>
	request({
		url: `/lyric?id=${id}`,
		method: 'GET',
	})
