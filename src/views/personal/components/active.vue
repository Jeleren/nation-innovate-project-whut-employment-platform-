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
  // data () {
  //   return {
  //     activeList: []
  //   }
  // },
  computed: {
    activeList () {
      // console.log(this.$store.state.pros.activeList)
      return this.$store.state.pros.activeList
    }
  },
  created () {
    this.$store.dispatch('getActiveList').then(() => {
      // this.activeList = this.$store.state.pros.activeList
    })
  }
}
</script>

<style scoped>
.active-list {
  width: 100%;
  background: #fff;
}
</style>
