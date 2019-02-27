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
  computed: {
    empList () {
      return this.$store.state.pros.empList
    }
  },
  created () {
    fetchEmployment().then(res => {
      if (res.data) {
        this.$store.commit('SET_EMP_LIST', res.data.empList)
      }
    })
  }
}
</script>

<style scoped>

</style>
