<template>
  <div class="active-list">
    <prosFilter>
    <div v-for="(item, index) in activeList" :key="index" v-if="activeList.length">
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
      return this.$store.state.pros.activeList
    }
  },
  created () {
    // console.log(this.$router)
    // if (!this.activeList.length && !this.$router.currentRoute.params.index1) {
    //   if (this.$router.currentRoute.name === 'pros') {
    //     this.$store.dispatch('getActiveList', {type: 2})
    //   } else {
    //     this.$store.dispatch('getSelfActiveList', {})
    //   }
    // }
  },
  methods: {
    pageChange () {}
  }
}
</script>

<style scoped>
.active-list {
  width: 100%;
  /*background: #fff;*/
}
</style>
