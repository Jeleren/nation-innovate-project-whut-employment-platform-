<template>
  <div class="ff-wrap">
    <div class="ff-item right-line"><div class="ff-data">{{ff.follow}}</div><router-link to="/follow">关注</router-link></div>
    <div class="ff-item right-line"><div class="ff-data">{{ff.fan}}</div><router-link to="/fan">粉丝</router-link></div>
    <div class="ff-item"><div class="ff-data">{{ff.active}}</div><router-link to="/collect">收藏</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'fan_follow',
  data () {
    return {
      ff: {
        follow: 593777,
        fan: 90,
        active: 13
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ff-wrap {
  background-color: #fff;
  width: 100%;
  height: 2.5rem;
  padding: .5rem;
  display: flex;
  margin-bottom: .5rem;
  .ff-item {
    /*display: inline-block;*/
    width: 33%;
    font-size: .6rem;
    text-align: center;
    word-break: break-all;
    /*vertical-align: top;*/
    padding: 0 .1rem;
    .ff-data {
      margin-bottom: .1rem;
    }
  }
}
  .right-line {
    border-right: 1px solid #D1E0E5;
  }
</style>
