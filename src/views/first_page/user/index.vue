<template>
  <div class="content-wrap content-top-mar">
    <div class="content">
      <headSearch/>
      <headNav/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import headSearch from '../../../components/head_search'
import headNav from '../components/head_nav'

export default {
  name: 'index',
  components: {
    headSearch,
    headNav
  },
  created () {
    if (!this.$store.state.user.userInfo.id) {
      this.$store.dispatch('getUserInfoById')
    }
  }
}
</script>

<style scoped>
.content-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 20rem;
}
</style>
