<template>
  <div class="pros-wrap content-header-mar">
    <div class="left-wrap">
      <activeEdit/>
      <active/>
    </div>
    <div class="right-wrap">
      <!--<smallHead/>-->
      <recPros/>
    </div>
  </div>
</template>

<script>
import activeEdit from './active_edit'
import ff from '../../components/fan_follow'
import recPros from '../../components/recommend_pros'
import smallHead from './small_head'
import active from '../personal/components/active'

export default {
  name: 'index',
  components: {
    activeEdit,
    ff,
    recPros,
    smallHead,
    active
  }
}
</script>

<style lang="scss" scoped>
.pros-wrap {

}
</style>
