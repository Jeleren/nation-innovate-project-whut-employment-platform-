import Mock from 'mockjs'

function postResume () {
  return Mock.mock({
    id: '@integer(1-100)'
  })
}
function createActivity () {
  return Mock.mock({
    id: '@increment',
    userInfo: Mock.mock({
      id: '@increment',
      head: '@image',
      username: '@cname'
    }),
    text: '@cparagraph(50, 200)',
    'image_group|0-9': [{url: '@image'}],
    time: '@time',
    isCollect: Mock.Random.boolean,
    commentsNum: '@integer(0-1000)',
    isLike: Mock.Random.boolean
  })
}
function getActivityByType (type) {
  switch (type) {
    case 1: {
      return {}
    }
    case 2: {
      return {}
    }
    case 3: {
      return {}
    }
  }
  return Mock.mock({
    'activeList|1-5': [{
      id: '@increment',
      userInfo: Mock.mock({
        id: '@increment',
        head: '@image',
        username: '@cname'
      }),
      text: '@cparagraph(50, 200)',
      'image_group|0-9': [{url: '@image'}],
      time: '@time',
      isCollect: Mock.Random.boolean,
      commentsNum: '@integer(0-1000)',
      isLike: Mock.Random.boolean
    }]
  })
}
function collectActivity () {
  return {isCollect: Mock.Random.integer}
}
function cancelCollectActivity () {
  return {isCollect: 0}
}
function commentActivity () {
  return Mock.mock({
    comment: {
      id: '@integer',
      userInfo: {
        id: '@integer',
        username: '@cname',
        head: '@image'
      },
      text: '@csentence'
    }
  })
}
function LikeActivity () {
  return {isLike: Mock.Random.integer}
}
function cancelLikeActivity () {
  return {isLike: 0}
}
function changeActivity () {
  return Mock.mock({
    id: '@increment',
    userInfo: Mock.mock({
      id: '@increment',
      head: '@image',
      username: '@cname'
    }),
    text: '@cparagraph(50, 200)',
    'image_group|0-9': [{url: '@image'}],
    time: '@time',
    isCollect: Mock.Random.boolean,
    commentsNum: '@integer(0-1000)',
    isLike: Mock.Random.boolean
  })
}
function getActivityByPros () {
  return Mock.mock({
    'activeList|1-5': [{
      id: '@increment',
      userInfo: Mock.mock({
        id: '@increment',
        head: '@image',
        username: '@cname'
      }),
      text: '@cparagraph(50, 200)',
      'image_group|0-9': [{url: '@image'}],
      time: '@time',
      isCollect: Mock.Random.boolean,
      commentsNum: '@integer(0-1000)',
      isLike: Mock.Random.boolean
    }]
  })
}
export default {
  postResume,
  createActivity,
  getActivityByType,
  collectActivity,
  cancelCollectActivity,
  commentActivity,
  LikeActivity,
  cancelLikeActivity,
  changeActivity,
  getActivityByPros
}
