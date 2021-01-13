import request from '@/utils/request'

// 添加收藏
export const addCollect = (data) => {
    return request.post('/user-collection/add',data)
}


// 取消收藏
export const cancelCollect = (data) => {
    return request.post('/user-collection/cancel',data)
}