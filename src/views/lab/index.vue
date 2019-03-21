<template>
  <div class="content-header-mar">
    <labFilter>
      <labList :labList="labList"/>
    </labFilter>
  </div>
</template>

<script>
import labFilter from '../../components/filter/filter_active_list'
import labList from '../../components/labList'

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
  }
}
</script>

<style scoped>

</style>
