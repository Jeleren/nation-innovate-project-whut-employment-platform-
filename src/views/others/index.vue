<template>
  <div class="personal">
    <slideBar style="margin-right: 1rem; display: inline-block;"/>
    <router-view style="display: inline-block; width: 100%;"></router-view>
  </div>
</template>

<script>
import slideBar from './other_slide'
export default {
  name: 'index',
  components: {
    slideBar
  }
}
</script>

<style scoped>
.personal {
  display: flex;
  position: relative;
  margin-top: 1rem;
}
</style>
