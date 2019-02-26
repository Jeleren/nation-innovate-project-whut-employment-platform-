import Mock from 'mockjs'

function getUserInfo () {
  return Mock.mock({
    id: '@natural',
    username: '@cname',
    head: '@image',
    desc: '@cparagraph'
  })
}
export default {
  getUserInfo
}
