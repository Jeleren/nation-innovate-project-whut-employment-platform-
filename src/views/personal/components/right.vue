<template>
  <div class="right-wrap">
    <fanFollow/>
    <recPros/>
  </div>
</template>

<script>
import fanFollow from '../../../components/fan_follow'
import recPros from '../../../components/recommend_pros'
export default {
  components: {
    fanFollow,
    recPros
  },
  name: 'right'
}
</script>

<style lang="scss" scoped>
.right-wrap {
  display: inline-block;
  vertical-align: top;
  width: 28.5%;
}
</style>
