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

Mock.mock(/\/activities\/postResume/, 'post', activity.postResume())

Mock.mock(/\/users/, 'get', user.getUserInfo())

export default Mock
