import Mock from 'mockjs'
import firstPage from './first_page'
import personal from './personal'
import activity from './activity'
import user from './user'
import ent from './ent'

Mock.mock(/\/first_page\/fetchSlideShow/, 'get', firstPage.getSlideShow())
Mock.mock(/\/first_page\/fetchEmployment/, 'get', firstPage.getEmp())
Mock.mock(/\/first_page\/fetchCompetition/, 'get', firstPage.getComList())
Mock.mock(/\/first_page\/fetchLaboratory/, 'get', firstPage.getLab())
Mock.mock(/\/first_page\/fetchProsList/, 'get', firstPage.getProsList())
//  搜所结果  动态类型type：int；搜索内容text：''；
Mock.mock(/\/search/, 'post', firstPage.searchResult())

Mock.mock(/\/active_list/, 'get', personal.getActiveList())
Mock.mock(/\/resume/, 'get', personal.getResume())
//  根据id获取推荐职业圈
Mock.mock(/\/recPros\/{id}/, 'get', personal.getRecPros())
//  关注职业圈
Mock.mock(/\/recProsFollow/, 'post', personal.recProsFollow())
//  取消关注职业圈
Mock.mock(/\/recProsCancelFollow/, 'post', personal.recProsCancelFollow())
//  获取用户关注的所有职业圈
Mock.mock(/\/followPros\/{id}/, 'get', personal.getFollowPros())
Mock.mock(/\/follow/, 'get', personal.getFollow())
Mock.mock(/\/fan/, 'get', personal.getFan())
Mock.mock(/\/collect/, 'get', personal.getCollect())

//  修改简历个人基本信息
Mock.mock(/\/resumeBase/, 'post', personal.changeResumeBase()) // id baseInfo

//  添加自定义简历信息 简历id：id；添加的信息：resumeItem : {id: , title: , text}
Mock.mock(/\/resumeAdd/, 'post', personal.addResumeItem())

//  修改自定义简历信息 简历id：id；修改的信息：resumeItem : {id: , title: , text}
Mock.mock(/\/resumeChange/, 'post', personal.changeResume())

//  修改简历图片  简历id：id；修改的图片：file
Mock.mock(/\/resumeImage/, 'post', personal.changeResumeImage())

//  删除自定义简历信息 简历id：id 删除的信息的id：delete_id: int
Mock.mock(/\/resumeDelete/, 'post', personal.deleteResumeItem())

// 用户id：id；动态id：active_id；
Mock.mock(/\/activities\/postResume/, 'post', activity.postResume())

// 获取活动 活动类型type：int；职业圈id：pros_id
Mock.mock(/\/activities/, 'get', activity.getActivity(1))

// 创建活动 用户id：id；活动类型type：int，title: ''; 唯一必需:text: '' ; image_group: [file], startDate: Date; endDate: Date; pros_id:
Mock.mock(/\/activities/, 'post', activity.createActivity())
// 用户id：id；动态id：active_id；
Mock.mock(/\/collects/, 'post', activity.collectActivity())
// 用户id：id；动态id：active_id；
Mock.mock(/\/cancelCollects/, 'post', activity.cancelCollectActivity())
// 用户id：id；动态id：active_id；评论：comment:{text: ''}
Mock.mock(/\/comments/, 'post', activity.commentActivity())
// 用户id：id；动态id：active_id；
Mock.mock(/\/like/, 'post', activity.LikeActivity())
// 用户id：id；动态id：active_id；
Mock.mock(/\/cancelLike/, 'post', activity.cancelLikeActivity())
//  修改动态信息  用户id：id；动态id：active_id；修改内容change：{title: , text: , startDate: Date, endDate: }
Mock.mock(/\/changeActivities/, 'post', activity.changeActivity())
//  删除动态 用户id: id；动态id: active_id
Mock.mock(/\/deleteActivities/, 'post', activity.deleteActivity())

Mock.mock(/\/users/, 'get', user.getUserInfo())
// 用户id：id；userInfo: {username: ,image: file, desc: ''}
Mock.mock(/\/users/, 'post', user.changeUserInfo())
// 用户id：id；对象用户id：target_id；
Mock.mock(/\/doFollow/, 'post', user.doFollow())
// 用户id：id；对象用户id：target_id；
Mock.mock(/\/cancelFollow/, 'post', user.cancelFollow())

//  获取简历列表 用户id：id；
Mock.mock(/\/entResume/, 'post', ent.getResume())
//  通过简历 用户id：id；简历id：resume_id; emp_id
Mock.mock(/\/passResume/, 'post', ent.passResume())
//  删除简历 用户id：id；简历id：resume_id; emp_id
Mock.mock(/\/rejectResume/, 'post', ent.rejectResume())

export default Mock
