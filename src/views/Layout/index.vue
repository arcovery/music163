<template>
	<div>
		<header>
			<van-nav-bar
				:title="$route.meta.title"
                fixed
				placeholder />
		</header>
		<router-view />
		<van-tabbar route placeholder>
			<van-tabbar-item to="/home"  icon="home-o" >首页</van-tabbar-item>
			<van-tabbar-item to="/search"  icon="search">搜索</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
export default {
    name: 'layout',
}
</script>

<style scoped></style>
