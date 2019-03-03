import Mock from 'mockjs'

function getSlideShow () {
  return Mock.mock({
    'slideshow|1-5': [{
      id: '@increment',
      url: '@image'
    }]
  })
}
function getEmp () {
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

function getComList () {
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
//  职业圈列表
function getProsList () {
  return Mock.mock({
    'prosList|4-9': [{
      id: '@integer',
      pro: '@Ctitle',
      'child|1-5': [{
        id: '@integer',
        pro: '@Ctitle'
      }]
    }]
  })
}

function getLab () {
  return Mock.mock({
    'labList|1-5': [{
      id: '@natural',
      username: '@cname',
      head: '@image',
      text: '@cparagraph'
    }]
  })
}
function searchResult () {
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
export default {
  getSlideShow,
  getEmp,
  getComList,
  getLab,
  getProsList,
  searchResult
}
