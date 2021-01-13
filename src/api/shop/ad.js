import request1 from '@/utils/request'

export const getAd = params => {
    return request1.get('/pcBanner/getAll',{ params })
}