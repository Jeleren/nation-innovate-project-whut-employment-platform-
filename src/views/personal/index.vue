<template>
  <div class="personal">
    <perHeader/>
    <left/>
    <right/>
  </div>
</template>

<script>
import headerSearch from '../../components/head_search'
import logState from '../../components/log_state'
import perHeader from './components/per_header'
import left from './components/left'
import right from './components/right'
import headNav from '../first_page/components/head_nav'
export default {
  name: 'index',
  components: {
    headerSearch,
    logState,
    perHeader,
    left,
    right,
    headNav
  }
}
</script>

<style scoped>
.personal {
  /*position: relative;*/
}
  .head-wrap {
    position: relative;
  }
</style>
