<template>
  <div class="ent-right">
    <activeEdit/>
    <activeContent></activeContent>
  </div>
</template>

<script>
import activeContent from '../../personal/components/active'
import activeEdit from '../../pros/active_edit'
export default {
  name: 'active',
  components: {
    activeContent,
    activeEdit
  }
  // computed: {
  //   activeList () {
  //     // console.log(this.$store.state.pros.activeList)
  //     return this.$store.state.pros.activeList
  //   }
  // },
  // created () {
  //   this.$store.dispatch('getActiveList')
  // }
}
</script>

<style scoped>
  .ent-right {
  }

</style>
