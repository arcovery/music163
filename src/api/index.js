import axios from 'axios'
//基址
const request = axios.create({
	baseURL: 'http://music.zll.cool/backend',
})
//响应拦截器
request.interceptors.response.use(
    config => {
        console.log(config)
		return config.data
	},
	error => {
		return Promise.reject(error)
	}
)

export default request
