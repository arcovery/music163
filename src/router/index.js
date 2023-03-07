import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
// 	return originalPush.call(this, location).catch(err => err)
// }
const router = new VueRouter({
	base: import.meta.env.BASE_URL,
	routes: [
		{
			path: '/',
			redirect: '/home',
			name: 'layout',
			component: () => import('@/views/Layout/index.vue'),
			children: [
				{
					path: '/search',
					name: 'search',
					component: () => import('@/views/Search/index.vue'),
					meta: {
						title: '搜索',
					},
				},
				{
					path: '/home',
					name: 'home',
					component: () => import('@/views/Home/index.vue'),
					meta: {
						title: '首页',
					},
				},
			],
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('@/views/register/index.vue'),
			meta: {
				title: '面经注册',
			},
		},
		{
			path: '/play',
			name: 'play',
			component: () => import('@/components/play/index.vue'),
			meta: {
				title: '播放器',
			},
		},
	],
})

export default router
