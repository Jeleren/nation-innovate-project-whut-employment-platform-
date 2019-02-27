import Mock from 'mockjs'

function getSlideShow () {
  return Mock.mock({
    'slideshow|1-5': [{
      id: '@increment',
      image_url: '@image'
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
      // image_url: '@image',
      title: '@ctitle',
      text: '@cparagraph(100, 200)',
      state: Mock.Random.boolean,
      start_time: Mock.Random.date('yyyy-MM-dd'),
      end_time: Mock.Random.date('yyyy-MM-dd'),
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
export default {
  getSlideShow,
  getEmp,
  getComList,
  getLab,
  getProsList
}
