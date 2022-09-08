import Request from "../utils/request";
import { IPage } from './type'

export const getList = (data:IPage) => {
  return Request.request({
    url:'/api/games/noticeInfo/homePage',
    data,
    method:'post'
  })
}

