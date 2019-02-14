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
</style>
