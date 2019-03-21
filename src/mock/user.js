import Mock from 'mockjs'

function getUserInfo () {
  return Mock.mock({
    id: '@natural(0, 10)',
    username: '@cname',
    head: '@image',
    desc: '@cparagraph',
    isFollow: '@natural(0,10)'
  })
}
function doFollow () {
  return {isFollow: Mock.Random.integer(1, 100)}
}
function cancelFollow () {
  return {isFollow: 0}
}
function changeUserInfo () {
  return Mock.mock({
    id: '@natural(0, 10)',
    username: '@cname',
    head: '@image',
    desc: '@cparagraph'
    // password: ''
  })
}
function login () {
  return Mock.mock({
    id: '@increment',
    username: '@cname',
    head: '@image'
  })
}
export default {
  getUserInfo,
  doFollow,
  cancelFollow,
  changeUserInfo,
  login
}
