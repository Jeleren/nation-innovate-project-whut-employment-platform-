import Mock from 'mockjs'
function getResume () {
  return Mock.mock({
    'resumeList|1-9': [{
      id: '@increment',
      // 投递岗位
      position: '@ctitle',
      resume: [
        {
          id: '@increment',
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
          contact_way: '@ctitle'
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
      ],
      //  简历状态 0 未通过； 1 未处理； 2 已通过
      state: Mock.Random.integer(0, 2)
    }]
  })
}
function passResume () {
  return {state: 2}
}
function rejectResume () {
  return {state: 0}
}
export default {
  getResume,
  passResume,
  rejectResume
}
