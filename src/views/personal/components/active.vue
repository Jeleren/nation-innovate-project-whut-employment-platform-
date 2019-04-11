<template>
  <div class="active-list">
    <prosFilter>
    <div v-for="(item, index) in activeList" :key="item.id" v-if="activeList.length">
      <activeItem :item="item" :index="index"/>
    </div>
    </prosFilter>
  </div>
</template>

<script>
// import { fetchActiveList } from '@/api/personal'
import activeItem from '../../../components/active_item'
import prosFilter from '../../../components/filter/filter_active_list'
export default {
  name: 'active',
  components: {
    activeItem,
    prosFilter
  },
  computed: {
    activeList () {
      // console.log('change')
      return this.$store.state.pros.activeList
    }
  }
}
</script>

<style scoped>
.active-list {
  width: 100%;
  /*background: #fff;*/
}
</style>
