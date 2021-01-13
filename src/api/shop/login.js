import request1 from '@/utils/request'

export const login = params => {
    return request1.get('/stu-student/logIn',{ params })
}