import request from '@/utils/request'

// 获取用户个人信息
export const getUserInfo =()=> {
    return request.get('/student/getStuInfo')
}

// 修改用户信息
export const updateUserInfo=(data)=>{
    return request.post('/student/updateStu',data)
}

// 修改密码
export const updatePass=(data)=>{
    return request.post('/student/updateStuPassword',data)
}

// 修改图像
export const updateImage=(data)=>{
    return request.post('/student/updateStuHeadPortrait',data)
}

// export function getUserInfo() {
//   return request({
//     url: '/info',
//     method: 'get'
//   })
// }