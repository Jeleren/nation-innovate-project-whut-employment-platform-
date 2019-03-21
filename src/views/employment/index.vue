<template>
  <div class="content-header-mar">
    <empFilter>
      <empList :empList="empList" v-if="empList"/>
    </empFilter>
  </div>
</template>

<script>
import empFilter from '../../components/filter/filter_active_list'
import empList from '../../components/employList'
// import {fetchEmployment} from '@/api/first_page'

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
  }
}
</script>

<style scoped>

</style>
