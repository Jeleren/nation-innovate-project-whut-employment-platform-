<template>
  <div class="first-page-wrap">
    <slideShow/>
    <employment/>
    <competition/>
    <laboratory/>
    <pros/>
  </div>
</template>

<script>
import slideShow from '../components/slideshow'
import employment from '../components/employment'
import competition from '../components/competition'
import laboratory from '../components/laboratory'
import pros from '../components/pros'
export default {
  name: 'first_page',
  components: {
    slideShow,
    employment,
    competition,
    laboratory,
    pros
  }
}
</script>

<style scoped>
.first-page-wrap {
  /*width: ;*/
}
</style>
