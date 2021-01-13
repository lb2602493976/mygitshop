import request from '@/utils/request'

export const indexSearch = data => {
    return request.post('/solr/search',data)
}