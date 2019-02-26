<template>
  <div class="content-header-mar">
    <empFilter/>
    <empList :empList="empList" v-if="empList"/>
  </div>
</template>

<script>
import empFilter from '../../components/filter'
import empList from '../../components/employList'
import {fetchEmployment} from '@/api/first_page'

export default {
  name: 'index',
  components: {
    empFilter,
    empList
  },
  data () {
    return {
      empList: []
    }
  },
  created () {
    fetchEmployment().then(res => {
      // console.log('emp_list', res.data)
      this.empList = res.data.empList
    })
  }
}
</script>

<style scoped>

</style>
