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
      isCollect: Mock.Random.boolean,
      commentsNum: '@integer(0-1000)',
      isLike: Mock.Random.boolean
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
        age: '@age',
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
        content: '@cparagraph'
      },
      {
        id: '@increment',
        title: '自我评价',
        content: '@cparagraph'
      }
    ]

  })
}

function getRecPros () {
  return Mock.mock({
    id: '@increment',
    'recList|1-10': [
      {
        id: '@increment',
        head: '@image',
        username: '@cname',
        follow: '@integer(0, 1500)',
        isFollow: '@integer(0, 10)'
      }
    ]
  })
}

function getFollow () {
  return Mock.mock({
    'followList|1-20': [{
      userInfo: {
        id: '@increment',
        username: '@cname',
        head: '@image',
        desc: '@Csentence',
        isFollow: Mock.Random.boolean
      }
    }]
  })
}

function getFan () {
  return Mock.mock({
    'fanList|1-9': [{
      id: '',
      username: '@cname',
      desc: '@cparagrah',
      head: '@image'
    }]
  })
}

function getCollect () {
  return Mock.mock({
    'collectList|1-9': [{
      // 和用户动态一样
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
    contact_way: ''
  })
}
function changeResume () {
  return Mock.mock({
    id: '@increment',
    title: '@ctitle',
    text: '@cparagraph'
  })
}
export default {
  getActiveList,
  getResume,
  getRecPros,
  getFollow,
  getFan,
  getCollect,
  changeResume,
  changeResumeBase,
  addResumeItem
}
