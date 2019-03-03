import Mock from 'mockjs'

function getActiveList () {
  return Mock.mock({
    'activeList|1-5': [{
      id: '@increment',
      userInfo: Mock.mock({
        id: '@increment',
        head: '@image',
        username: '@cname'
      }),
      text: '@cparagraph(1, 20)',
      'image_group|0-9': [{url: '@image'}],
      time: '@time',
      isCollect: Mock.Random.boolean(),
      // collectNum: '@integer',
      commentsNum: '@integer(0, 10)',
      isLike: Mock.Random.boolean(),
      likeNum: '@integer(0, 10)',
      'commentList|1-9': [{
        userInfo: {
          id: '@increment',
          username: '@cname',
          head: '@image'
        },
        text: '@csentence(10, 30)'
      }]
    }]
  })
}

function getResume () {
  return Mock.mock({
    id: '@increment',
    resume: [
      { id: '@increment',
        title: '基本信息',
        name: '@cname',
        age: '@increment',
        birth: '@time',
        edu: '本科' || '硕士',
        school: '@ctitle(5, 8)',
        nation: '汉',
        political: '群众',
        gender: '男',
        image: '@image',
        contact_way: ''
      },
      {
        id: '@increment',
        title: '教育背景',
        text: '@cparagraph'
      },
      {
        id: '@increment',
        title: '自我评价',
        text: '@cparagraph'
      }
    ]
  })
}

function getRecPros () {
  return Mock.mock({
    'recList|1-10': [
      {
        id: '@increment',
        head: '@image',
        username: '@cname',
        follow: '@integer(0, 1500)',
        isFollow: Mock.Random.boolean()
      }
    ]
  })
}
function recProsFollow () {
  return Mock.mock({
    isFollow: '@increment'
  })
}
function recProsCancelFollow () {
  return {isFollow: 0}
}
function getFollowPros () {
  return Mock.mock({
    'followProsList|1-5': [{
      id: '@increment',
      pros: '@title'
    }]
  })
}

function getFollow () {
  return Mock.mock({
    'followList|1-20': [{
      id: '@increment',
      username: '@cname',
      head: '@image',
      desc: '@Csentence',
      isFollow: Mock.Random.boolean()
    }]
  })
}

function getFan () {
  return Mock.mock({
    'fanList|1-9': [{
      id: '@increment',
      username: '@cname',
      head: '@image',
      desc: '@Csentence',
      isFollow: Mock.Random.boolean()
    }]
  })
}

function getCollect () {
  return Mock.mock({
    'collectList|1-9': [{
      id: '@increment',
      userInfo: Mock.mock({
        id: '@increment',
        head: '@image',
        username: '@cname'
      }),
      text: '@cparagraph(1, 20)',
      'image_group|0-9': [{url: '@image'}],
      time: '@time',
      isCollect: Mock.Random.boolean,
      // collectNum: '@integer',
      commentsNum: '@integer(0, 10)',
      isLike: Mock.Random.boolean,
      likeNum: '@integer(0, 10)',
      'commentList|1-9': [{
        userInfo: {
          id: '@increment',
          username: '@cname',
          head: '@image'
        },
        text: '@csentence(10, 30)'
      }]
    }]
  })
}

function addResumeItem () {
  return Mock.mock({
    id: '@increment',
    title: '@ctitle',
    text: '@cparagraph'
  })
}

/**
 * 修改简历中的个人基本信息
 */
function changeResumeBase () {
  return Mock.mock({
    id: '@increment',
    title: '基本信息',
    name: '@cname',
    age: '@age',
    birth: '@time',
    edu: '本科' || '硕士',
    school: '@ctitle(5, 8)',
    nation: '汉',
    political: '群众',
    gender: '男',
    image: '@image',
    contact_way: '@natural'
  })
}
function changeResume () {
  return Mock.mock({
    id: '@increment',
    title: '@ctitle',
    text: '@cparagraph'
  })
}
function changeResumeImage () {
  return Mock.mock({
    message: '上传成功'
  })
}
function deleteResumeItem () {
  return {message: '删除成功'}
}
export default {
  getActiveList,
  getResume,
  getRecPros,
  recProsFollow,
  recProsCancelFollow,
  getFollowPros,
  getFollow,
  getFan,
  getCollect,
  changeResume,
  changeResumeBase,
  addResumeItem,
  changeResumeImage,
  deleteResumeItem
}
