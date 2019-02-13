import Mock from 'mockjs'

const employment = []
// const emp_count = 5

function getSlideShow (count) {
  let slideshow = []
  for (let i = 0; i < count; i++) {
    slideshow.push(Mock.mock({
      id: '@increment',
      image_url: '@image'
    }))
  }
  return slideshow
}
function getEmp (count) {
  for (let i = 0; i < count; i++) {
    employment.push(
      Mock.mock({
        id: '@increment',
        title: '@ctitle',
        date: Mock.Random.date('yyyy-MM-dd'),
        url: Mock.Random.url('http')
      })
    )
  }
}

function getComList (count) {
  const comList = []
  for (let i = 0; i < count; i++) {
    comList.push(
      Mock.mock({
        id: '@increment',
        image_url: '@image',
        url: Mock.Random.url('http'),
        title: '@ctitle',
        content: '@csentence',
        state: Mock.Random.boolean,
        start_time: Mock.Random.date('yyyy-MM-dd'),
        end_time: Mock.Random.date('yyyy-MM-dd')
      })
    )
  }
  return comList
}

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
  // [
  //   {id: Mock.mock(),pro: '互联网IT', child: ['前端开发']},
  //   {pro: '金融', child: ['后端开发', '移动开发', '软件开发', '测试', '技术支持']},
  //   {pro: '互联网IT', child: ['前端开发', '后端开发', '移动开发', '软件开发', '测试', '技术支持']},
  //   {pro: '互联网IT', child: ['前端开发', '移动开发', '软件开发', '测试', '技术支持']},
  //   {pro: '互联网IT', child: ['前端开发', '后端开发', '移动开发', '软件开发', '测试', '技术支持']},
  //   {pro: '互联网IT', child: ['前端开发', '后端开发', '移动开发', '软件开发', '测试', '技术支持']},
  //   {pro: '互联网IT', child: ['前端开发', '后端开发', '移动开发', '软件开发', '测试', '技术支持']},
  //   {pro: '互联网IT', child: ['前端开发', '后端开发', '移动开发', '软件开发', '测试', '技术支持']},
  //   {pro: '互联网IT', child: ['前端开发', '后端开发', '移动开发', '软件开发', '测试', '技术支持']}
  // ]
}

function getLab () {
  return Mock.mock({
    id: '',
    name: '@cname',
    image_url: '@image',
    content: '@cparagraph'
  })
}

export default {
  getSlideShow,
  getEmpApi () {
    let empCount = 4
    getEmp(empCount)
    return employment
  },
  getComList,
  getLab,
  getProsList
}
