<template>
  <div class="left-wrap">
    <div v-for="(item, index) in activeList" :key="index" v-if="activeList.length">
      <activeItem :item="item" :index="index"/>
    </div>
  </div>
</template>

<script>
import activeItem from '../../components/active_item'
import {fetchCollectList} from '@/api/personal'

export default {
  name: 'collect',
  components: {
    activeItem
  },
  data () {
    return {
      activeList: []
    }
  },
  created () {
    if (!this.activeList.length) {
      fetchCollectList(this.$store.state.user.userInfo.id).then(res => {
        if (res.data) {
          this.activeList = res.data.collectList
        }
      })
    }
  }
}
</script>

<style scoped>
.left-wrap {
  background: #fff;
}
</style>
