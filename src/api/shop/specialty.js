import request1 from '@/utils/request'

//获取专业列表
export const getSpec = () => {
    return request1.get('/major/getMajorList')
}
//通过一级专业获取二级专业
export const getLevel2Spec = category => {
    return request1.get('/major/getMajorListByCategory',{ params:{ category } })
}

//获取热门专业
export const getHotSpec = () => {
    return request1.get('/label-management/getMajorLabelAll',{ params:{ name:'热门' } })
}