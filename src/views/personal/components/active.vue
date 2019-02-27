<template>
  <div class="active-list">
    <prosFilter/>
    <div v-for="(item, index) in activeList" :key="index" v-if="activeList.length">
      <activeItem :item="item" :index="index"/>
    </div>
  </div>
</template>

<script>
// import { fetchActiveList } from '@/api/personal'
import activeItem from '../../../components/active_item'
import prosFilter from '../../../components/filter'
export default {
  name: 'active',
  components: {
    activeItem,
    prosFilter
  },
  computed: {
    activeList () {
      return this.$store.state.pros.activeList
    }
  },
  created () {
    console.log(this.$router, this.activeList)
    if (!this.activeList.length && !this.$router.currentRoute.params.index1 >= 0) {
      this.$store.dispatch('getActiveList')
    }
  }
}
</script>

<style scoped>
.active-list {
  width: 100%;
  background: #fff;
}
</style>
