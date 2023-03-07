<template>
	<div>
		<header>
			<van-nav-bar
				:title="$route.meta.title"
				fixed
				placeholder />
		</header>
		<van-cell-group>
			<van-field
				v-model="username"
				label="账号"
				placeholder="请输入用户名" />
			<van-field
				v-model="password"
				label="密码"
				placeholder="请输入密码" />
		</van-cell-group>
        <van-button type="primary" block>注册</van-button>
        
	</div>
</template>

<script>
export default {
	data() {
		return {
            username: '',
            password:''
		}
	},
}
</script>

<style scoped></style>
