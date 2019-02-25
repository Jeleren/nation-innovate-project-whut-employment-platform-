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
      text: '@cparagraph(100, 200)',
      'image_group|0-9': [{url: '@image'}],
      time: '@time'
    }]
  })
}

function getResume () {
  return Mock.mock({
    id: '@increment',
    resume: [
      {index: '@increment',
        title: '基本信息',
        name: '@cname',
        age: '@age',
        birth: '@time',
        edu: '本科' || '硕士',
        school: '@ctitle(5, 8)',
        marry: '未婚' || '已婚',
        nation: '汉',
        contact_way: '@phone',
        head: '@image',
        political: '群众',
        gender: '男',
        image: '@image'
      },
      {
        index: '@increment',
        title: '教育背景',
        content: '@cparagraph'
      },
      {
        index: '@increment',
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
        image_url: '@image',
        name: '@cname',
        follow: '@integer(0, 1500)',
        isFollow: Mock.Random.boolean
      }
    ]
  })
}

function getFollow () {
  return Mock.mock({
    'followList|1-20': [{
      id: '@increment',
      userInfo: {
        username: '@cname',
        head: '@image',
        desc: '@Csentence'
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
export default {
  // getUserInfo,
  getActiveList,
  getResume,
  getRecPros,
  getFollow,
  getFan,
  getCollect
}
