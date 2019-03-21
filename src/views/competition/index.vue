<template>
  <div class="content-header-mar">
    <compFilter>
      <compList :comList="comList"/>
    </compFilter>
  </div>
</template>

<script>
import compFilter from '../../components/filter/filter_active_list'
import compList from '../../components/compList'

export default {
  name: 'index',
  components: {
    compFilter,
    compList
  },
  computed: {
    comList () {
      return this.$store.state.pros.comList
    }
  }
}
</script>

<style scoped>

</style>
