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
    'empList|4': [{
      id: '@increment',
      title: '@ctitle',
      // 招聘截止日期
      date: Mock.Random.date('yyyy-MM-dd'),
      //  发布招聘信息的企业信息
      user: {}
    }]
  })
}

function getComList () {
  return Mock.mock({
    'comList|3': [{
      id: '@increment',
      image_url: '@image',
      title: '@ctitle',
      text: '@csentence',
      state: Mock.Random.boolean,
      start_time: Mock.Random.date('yyyy-MM-dd'),
      end_time: Mock.Random.date('yyyy-MM-dd'),
      user: {}
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
    id: '',
    name: '@cname',
    image_url: '@image',
    text: '@cparagraph'
  })
}
// function getFirstPage () {
//   return Mock.mock({
//     'slideshow|3': [{
//       id: '@increment',
//       image_url: '@image'
//     }],
//     'employment|5': [{
//       id: '@increment',
//       title: '@ctitle',
//       date: Mock.Random.date('yyyy-MM-dd'),
//       text: '@cparagraph',
//       user: {}
//     }],
//     'competition|3': [{
//       id: '@increment',
//       image_url: '@image',
//       // url: Mock.Random.url('http'),
//       title: '@ctitle',
//       text: '@csentence',
//       state: Mock.Random.boolean,
//       start_time: Mock.Random.date('yyyy-MM-dd'),
//       end_time: Mock.Random.date('yyyy-MM-dd'),
//       user: {}
//     }],
//     lab: {
//       id: '@integer',
//       name: '@cname',
//       image_url: '@image',
//       text: '@cparagraph'
//     }
//   })
// }
export default {
  getSlideShow,
  getEmp,
  getComList,
  getLab,
  getProsList
}
