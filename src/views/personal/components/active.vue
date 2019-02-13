<template>
  <div class="active-list">
    <prosFilter/>
    <div v-for="(item, index) in activeList" :key="index">
      <activeItem :item="item"/>
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
  //     active_list: []
  //   }
  // },
  computed: {
    activeList () {
      console.log(this.$store.state.pros.activeList)
      return this.$store.state.pros.activeList
    }
  },
  created () {
    this.$store.dispatch('getActiveList')
    // fetchActiveList(this.$store.state.user.showUser.id).then(res => {
    //   this.active_list = res.data
    // })
  }
}
</script>

<style scoped>
.active-list {
  width: 100%;
  background: #fff;
}
</style>
