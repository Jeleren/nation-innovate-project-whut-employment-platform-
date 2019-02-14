<template>
  <div class="personal">
    <perHeader/>
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
  /*position: relative;*/
}
</style>
