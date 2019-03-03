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
    text: '@cparagraph(1, 20)',
    'image_group|0-9': [{url: '@image'}],
    time: '@time',
    isCollect: Mock.Random.boolean,
    collectNum: '@integer',
    commentsNum: '@integer(0-1000)',
    isLike: Mock.Random.boolean,
    likeNum: '@integer',
    'commentList|1-9': [{
      userInfo: {
        id: '@increment',
        username: '@cname',
        head: '@image'
      },
      text: '@csentence(10, 30)'
    }]
  })
}
function getActivity (type) {
  switch (type) {
    case 1: {
      return Mock.mock({
        //  一页的数量 不少于三
        'comList|3-20': [{
          id: '@increment',
          // url: '@image',
          title: '@ctitle',
          text: '@cparagraph(100, 200)',
          state: Mock.Random.boolean,
          startDate: Mock.Random.date('yyyy-MM-dd'),
          endDate: Mock.Random.date('yyyy-MM-dd'),
          user: {
            username: '@cname',
            head: '@image',
            id: '@integer'
          }
        }]
      })
    }
    case 2: {
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
          collectNum: '@integer',
          commentsNum: '@integer(0-1000)',
          isLike: Mock.Random.boolean,
          likeNum: '@integer',
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
    case 3: {
      return Mock.mock({
        'labList|1-5': [{
          id: '@natural',
          username: '@cname',
          head: '@image',
          text: '@cparagraph'
        }]
      })
    }
    case 4: {
      return Mock.mock({
        //  一页的数量 不少于四
        'empList|4-20': [{
          id: '@increment',
          title: '@ctitle',
          startDate: Mock.Random.date('yyyy-MM-dd'),
          // 招聘截止日期
          endDate: Mock.Random.date('yyyy-MM-dd'),
          //  发布招聘信息的企业信息
          text: '@cparagraph',
          status: Mock.Random.boolean,
          user: {
            username: '@cname',
            head: '@image',
            id: '@integer'
          }
        }]
      })
    }
  }
}
function collectActivity () {
  return {isCollect: Mock.Random.natural()}
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
  return {isLike: Mock.Random.integer()}
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
    text: '@cparagraph(1, 20)',
    'image_group|0-9': [{url: '@image'}],
    time: '@time',
    isCollect: Mock.Random.boolean,
    collectNum: '@integer',
    commentsNum: '@integer(0-1000)',
    isLike: Mock.Random.boolean,
    likeNum: '@integer',
    'commentList|1-9': [{
      userInfo: {
        id: '@increment',
        username: '@cname',
        head: '@image'
      },
      text: '@csentence(10, 30)'
    }]
  })
}
function getActivityByPros () {
  console.log('pros')
  return Mock.mock({
    'activeList|2-5': [{
      fuck: 'fuck',
      'id|+1': 1,
      userInfo: Mock.mock({
        id: '@increment',
        head: '@image',
        username: '@cname'
      }),
      text: '@cparagraph(1, 20)',
      'image_group|0-9': [{url: '@image'}],
      time: '@time',
      isCollect: Mock.Random.boolean(),
      collectNum: '@integer',
      commentsNum: '@integer(0,500)',
      isLike: Mock.Random.boolean(),
      likeNum: '@integer',
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
function getActivityByTypePros (type) {
  switch (type) {
    case 1: {
      return Mock.mock({
        //  一页的数量 不少于三
        'comList|3-20': [{
          id: '@increment',
          // url: '@image',
          title: '@ctitle',
          text: '@cparagraph(100, 200)',
          state: Mock.Random.boolean,
          startDate: Mock.Random.date('yyyy-MM-dd'),
          endDate: Mock.Random.date('yyyy-MM-dd'),
          user: {
            username: '@cname',
            head: '@image',
            id: '@integer'
          }
        }]
      })
    }
    case 2: {
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
          collectNum: '@integer',
          commentsNum: '@integer(0-1000)',
          isLike: Mock.Random.boolean,
          likeNum: '@integer',
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
    case 3: {
      return Mock.mock({
        'labList|1-5': [{
          id: '@natural',
          username: '@cname',
          head: '@image',
          text: '@cparagraph'
        }]
      })
    }
    case 4: {
      return Mock.mock({
        //  一页的数量 不少于四
        'empList|4-20': [{
          id: '@increment',
          title: '@ctitle',
          // 招聘截止日期
          date: Mock.Random.date('yyyy-MM-dd'),
          //  发布招聘信息的企业信息
          text: '@cparagraph',
          user: {
            username: '@cname',
            head: '@image',
            id: '@integer'
          }
        }]
      })
    }
  }
}
function deleteActivity () {
  return Mock.mock({
    isDelete: true
  })
}
export default {
  postResume,
  createActivity,
  getActivity,
  collectActivity,
  cancelCollectActivity,
  commentActivity,
  LikeActivity,
  cancelLikeActivity,
  changeActivity,
  getActivityByPros,
  deleteActivity,
  getActivityByTypePros
}
