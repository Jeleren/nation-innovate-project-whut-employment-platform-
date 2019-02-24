import Mock from 'mockjs'
import firstPage from './first_page'
import personal from './personal'

Mock.mock(/\/first_page\/fetchSlideShow/, 'get', firstPage.getSlideShow(5))
Mock.mock(/\/first_page\/fetchEmployment/, 'get', firstPage.getEmpApi())
Mock.mock(/\/first_page\/fetchCompetition/, 'get', firstPage.getComList(3))
Mock.mock(/\/first_page\/fetchLaboratory/, 'get', firstPage.getLab())
Mock.mock(/\/first_page\/fetchProsList/, 'get', firstPage.getProsList())

// Mock.mock(/\/login/, 'post', personal.getUserInfoById())
Mock.mock(/\/userInfo/, 'get', personal.getUserInfoById())

Mock.mock(/\/active_list/, 'get', personal.getActiveList(5))
Mock.mock(/\/resume/, 'get', personal.getResume())
Mock.mock(/\/recPros/, 'get', personal.getRecPros())
Mock.mock(/\/follow/, 'get', personal.getFollow())

export default Mock
