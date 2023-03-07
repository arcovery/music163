import { fileURLToPath, URL } from 'node:url'
// import viteCompression from 'vite-plugin-compression'//兼容e11
import { defineConfig } from 'vite'
// import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		vue2(),
		//打包gzip
		// viteCompression({
		// 	verbose: false,
		// 	threshold: 1024 * 100, // 单位b
		// }),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		port: 8080,
		host: '0.0.0.0',
		// proxy: {
		// 	'/hot': {
		// 		target: 'http://music.zll.cool/search',
		// 		changeOrigin: true,
		// 		rewrite: path => path.replace(/^\/hot/, ''),
		// 	},
		// },
	},
	build: {
		cssCodeSplit: false,
		// minify: 'terser', // 这一行开启后，下面的 terserOptions 才能生效
		terserOptions: {
			compress: {
				// warnings: false,
				drop_console: true, //打包时删除console
				drop_debugger: true, //打包时删除 debugger
				pure_funcs: ['console.log'],
			},
		},
		output: {
			// 去掉注释内容
			comments: true,
		},
		// rollupOptions: {
		// 	output: {
		// 		manualChunks: {
		// 			// 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。
		// 			vue: ['vue', 'vue-router'],
		// 			vant: ['vant'],
		// 		},
		// 	},
		// },
	},
})
