import Mock from 'mockjs'
import firstPage from './first_page'
import personal from './personal'

Mock.mock(/\/first_page\/fetchSlideShow/, 'get', firstPage.getSlideShow())
Mock.mock(/\/first_page\/fetchEmployment/, 'get', firstPage.getEmp())
Mock.mock(/\/first_page\/fetchCompetition/, 'get', firstPage.getComList())
Mock.mock(/\/first_page\/fetchLaboratory/, 'get', firstPage.getLab())
Mock.mock(/\/first_page\/fetchProsList/, 'get', firstPage.getProsList())

Mock.mock(/\/active_list/, 'get', personal.getActiveList(5))
Mock.mock(/\/resume/, 'get', personal.getResume())
Mock.mock(/\/recPros/, 'get', personal.getRecPros())
Mock.mock(/\/follow/, 'get', personal.getFollow())

export default Mock
