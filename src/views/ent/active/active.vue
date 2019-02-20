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
}
</script>

<style scoped>
  .ent-right {
  }

</style>
