<template>
  <collectFilter>
    <div v-for="(item, index) in activeList" :key="index" v-if="activeList.length">
      <activeItem :item="item" :index="index"/>
    </div>
  </collectFilter>
</template>

<script>
import activeItem from '../../components/active_item'
import collectFilter from '../../components/filter/filter_active_list'

export default {
  name: 'collect',
  components: {
    activeItem,
    collectFilter
  },
  computed: {
    activeList () {
      return this.$store.state.pros.collectList
    }
  },
  created () {
    // if (!this.activeList.length) {
    //   fetchCollectList(this.$store.state.user.userInfo.id).then(res => {
    //     if (res.data) {
    //       this.activeList = res.data.collectList
    //     }
    //   })
    // }
  }
}
</script>

<style scoped>
.left-wrap {
  background: #fff;
}
</style>
