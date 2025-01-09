import http from './http'
export const LiveApi = {
    // 综合查询 列表数据
    getLiveList: (data)  => http.get(`/live/pageList`,data),
}
