import Mock from 'mockjs'

function postResume () {
  return Mock.mock({
    id: '@integer(1-100)'
  })
}

export default {
  postResume
}
