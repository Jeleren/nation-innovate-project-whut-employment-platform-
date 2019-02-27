import Mock from 'mockjs'
import firstPage from './first_page'
import personal from './personal'
import activity from './activity'
import user from './user'

Mock.mock(/\/first_page\/fetchSlideShow/, 'get', firstPage.getSlideShow())
Mock.mock(/\/first_page\/fetchEmployment/, 'get', firstPage.getEmp())
Mock.mock(/\/first_page\/fetchCompetition/, 'get', firstPage.getComList())
Mock.mock(/\/first_page\/fetchLaboratory/, 'get', firstPage.getLab())
Mock.mock(/\/first_page\/fetchProsList/, 'get', firstPage.getProsList())

Mock.mock(/\/active_list/, 'get', personal.getActiveList())
Mock.mock(/\/resume/, 'get', personal.getResume())
Mock.mock(/\/recPros/, 'get', personal.getRecPros())
Mock.mock(/\/follow/, 'get', personal.getFollow())
Mock.mock(/\/fan/, 'get', personal.getFan())
Mock.mock(/\/collect/, 'get', personal.getCollect())
//  修改简历个人基本信息
Mock.mock(/\/resumeBase/, 'post', personal.changeResumeBase())
//  添加自定义简历信息
Mock.mock(/\/resumeAdd/, 'post', personal.addResumeItem())
//  修改自定义简历信息
Mock.mock(/\/resumeChange/, 'post', personal.changeResume())
//  修改简历图片
Mock.mock(/\/resumeImage/, 'post', personal.changeResumeImage())
//  删除自定义简历信息
Mock.mock(/\/resumeDelete/, 'post', personal.deleteResumeItem())

Mock.mock(/\/activities\/postResume/, 'post', activity.postResume())
Mock.mock(/\/activities/, 'get', activity.getActivityByType(Math.ceil(Math.random() * 3)))
Mock.mock(/\/activities/, 'post', activity.createActivity())
Mock.mock(/\/collects/, 'post', activity.collectActivity())
Mock.mock(/\/cancelCollects/, 'post', activity.cancelCollectActivity())
Mock.mock(/\/comments/, 'post', activity.commentActivity())
Mock.mock(/\/like/, 'post', activity.LikeActivity())
Mock.mock(/\/cancelLike/, 'post', activity.cancelLikeActivity())
//  修改动态信息
Mock.mock(/\/changeActivities/, 'post', activity.changeActivity())
//  删除动态
Mock.mock(/\/deleteActivities/, 'post', activity.deleteActivity())
//  根据职业圈id来获取动态，动态类固定为用户动态
Mock.mock(/\/activitiesByPros/, 'post', activity.getActivityByPros())

Mock.mock(/\/users/, 'get', user.getUserInfo())
Mock.mock(/\/users/, 'post', user.changeUserInfo())
Mock.mock(/\/doFollow/, 'post', user.doFollow())
Mock.mock(/\/cancelFollow/, 'post', user.cancelFollow())

export default Mock
