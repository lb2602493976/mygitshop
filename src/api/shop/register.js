import request1 from '@/utils/request'

export const register = data => {
    return request1.post('/stu-student/stuRegistered',data)
}