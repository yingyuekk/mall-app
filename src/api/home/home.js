import request from '@/utils/request' // 引入axios文件

export function home () {
  return request({
    url: '/flask-api/home/content',
    method: 'get'
  })
}
