

import axios from 'axios'

const aaa = axios.create({
    baseURL:process.env.BASE_API,
    withCredentials:true,
})

aaa.interceptors.request.use(config=>config,err=>Promise.reject(err))
aaa.interceptors.response.use(response=>response,err=>Promise.reject(err))

export default aaa
