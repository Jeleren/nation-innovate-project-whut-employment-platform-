<template>
  <div class="personal">
    <slideBar style="margin-right: 1rem"/>
    <router-view style="display: inline-block; width: 100%;"></router-view>
  </div>
</template>

<script>
import slideBar from './components/slideBar'
export default {
  name: 'index',
  components: {
    slideBar
  }
  // created () {
  //   //  check identify
  //   let user = this.$store.state.user
  //   if (!user.showUser || user.userInfo.id === user.showUser.id) {
  //     this.$store.commit('SET_IS_SELF', true)
  //   }
  // }
}
</script>

<style scoped>
.personal {
  padding-top: 1rem;
  position: relative;
  display: flex;
}
</style>
