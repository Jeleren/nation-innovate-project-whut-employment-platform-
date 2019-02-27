<template>
  <div class="personal">
    <perHeader v-if="!$store.state.user.isSelf"/>
    <router-view style="margin-top: 1rem"></router-view>
    <right style="margin-top: 1rem"/>
  </div>
</template>

<script>
import perHeader from './components/per_header'
import left from './components/left'
import right from './components/right'
export default {
  name: 'index',
  components: {
    perHeader,
    left,
    right
  },
  created () {
    //  check identify
    let user = this.$store.state.user
    if (!user.showUser || user.userInfo.id === user.showUser.id) {
      this.$store.commit('SET_IS_SELF', true)
    }
  }
}
</script>

<style scoped>
.personal {
  /*padding-top: 1rem;*/
  /*position: relative;*/
}
</style>
