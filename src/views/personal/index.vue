<template>
  <div class="personal">
    <perHeader v-if="!$store.state.user.isSelf"/>
    <router-view></router-view>
    <!--<left/>-->
    <right/>
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
  }
}
</script>

<style scoped>
.personal {
  padding-top: 1rem;
  /*position: relative;*/
}
</style>
