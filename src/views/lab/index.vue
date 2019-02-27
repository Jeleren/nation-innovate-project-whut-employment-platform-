<template>
  <div class="content-header-mar">
    <labFilter/>
    <labList :labList="labList"/>
  </div>
</template>

<script>
import labFilter from '../../components/filter'
import labList from '../../components/labList'
import {fetchLaboratory} from '@/api/first_page'

export default {
  name: 'index',
  components: {
    labFilter,
    labList
  },
  computed: {
    labList () {
      return this.$store.state.pros.labList
    }
  },
  created () {
    if (!this.labList.length) {
      fetchLaboratory().then(res => {
        this.$store.commit('SET_LAB_LIST', res.data.labList)
      })
    }
  }
}
</script>

<style scoped>

</style>
