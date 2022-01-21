import { RequestEnum } from '/@/utils/http/httpEnum';
import http from '/@/utils/http/axios'

const Api = {
    GetSignBox:`/yc/rmsBaFence/queryById`,
}

// 获取信息
export function getSignBoxData(id:string) {
    return http.request({
        url: Api.GetSignBox + `?id=${id}`,
        method:RequestEnum.POST,
    })
}