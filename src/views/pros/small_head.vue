<template>
  <div class="small-head">
    <div class="head-img">
      <img :src="'http://118/24/92.19/'+$store.state.user.userInfo.head"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'small_head'
}
</script>

<style lang="scss" scoped>
  .small-head {
    background: lightblue;
    /*width: 100%;*/
    .head-img {
      text-align: center;
      img {
        width: 2rem;
        height: 2rem;
        margin: .2rem 0;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }
    }
  }
</style>
