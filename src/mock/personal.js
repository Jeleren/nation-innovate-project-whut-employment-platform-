import Mock from 'mockjs'

function getUserInfoById () {
  return Mock.mock({
    id: Mock.Random.integer(1, 10),
    user_image: '@image',
    user_type: 'user' || 'ent',
    username: '@cname',
    isFollow: '@boolean',
    gender: ''
  })
}
function getActiveList (count) {
  let list = []
  for (let i = 0; i < count; i++) {
    list.push(
      Mock.mock({
        id: '@increment',
        userInfo: Mock.mock({
          id: '@increment',
          user_image: '@image',
          username: '@cname'
        }),
        content: '@cparagraph(100, 200)',
        image_group: [{url: '@image'}, {url: '@image'}, {url: '@image'}, {url: '@image'}, {url: '@image'}, {url: '@image'}, {url: '@image'}, {url: '@image'}, {url: '@image'}],
        time: '@time'
      })
    )
  }
  console.log(list)
  return list
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
        user_image: '@image',
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
export default {
  getUserInfoById,
  getActiveList,
  getResume,
  getRecPros
}
