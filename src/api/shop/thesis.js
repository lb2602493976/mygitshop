import request1 from '@/utils/request'


//通过大类获取列表
export const getListByCategory = data => {
    return request1.post('/template/getAllTemplate',data)
}

//通过小类id获取列表
export const getListBySpecId = data => {
    return request1.post('/template/getTemplateByMajorId',data)
}

//获取热门模板
export const getHotTemp = () => {
    return request1.get('/label-management/getTemplateLabelAll',{ params:{ name:'热门',type:'1'}})
}

//获取已购买列表
export const getPurchasedList = params => {
    return request1.get('/consumption-record/getPurchasedOrder',{ params })
}
