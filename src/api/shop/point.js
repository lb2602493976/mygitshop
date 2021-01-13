import request from '@/utils/request'

export const getPointInfo = () => {
    return request.get('/integral-management/getAll')
}