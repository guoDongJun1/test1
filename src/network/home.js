import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomeBigdata() {
  return request({
    url:'/home/bigdata'
  })
}

export function getCategoryMenu() {
  return request({
    url:'/home/category'
  })
}

export function getPagingData(name,num) {
  return request({
    url:'/home/homedata?type='+name+'&page='+num
  })
}

export function getGoodsClass(num) {
  return request({
    url:'/home/subcategory?type=subcategory&page='+num
  })
}
