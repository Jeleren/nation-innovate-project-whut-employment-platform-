<template>
  <div class="per-header boxShadow">
    <div class="content-wrap">
      <img :src="$store.state.user.showUser.head"/>
      <span class="username">{{$store.state.user.showUser.username}}</span>
      <div class="button">
        <span>
          <span v-if="isFollow"><i class="el-icon-check"></i>已关注</span>
          <span v-if="!isFollow" @click="doFollow">+ 关注</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'per_header',
  data () {
    return {
      isFollow: this.$store.state.user.showUser.isFollow
      // showUser: {}
    }
  },
  computed: {
    isSelf () {
      return this.$store.state.user.isSelf
    }
  },
  created () {
  },
  methods: {
    doFollow () {}
  }
}
</script>

<style lang="scss" scoped>
.per-header {
  position: relative;
  height: 3rem;
  background: #0074E1;
  color: #fff;
  .content-wrap {
    position: absolute;
    display: flex;
    align-items: center;
    height: 3.125rem;
    //line-height: 3.125rem;
    img {
      width: 3.125rem;
      height: 3.125rem;
      margin-right: .625rem;
    }
    .username {
      //vertical-align: top;
      font-size: .75rem;
    }
    .button {
      /*height: .875rem;*/
      padding: .1rem .2rem;
      line-height: .875rem;
      margin-left: .625rem;
      font-size: .5rem;
      span {
        vertical-align: top;
      }
      /*vertical-align: middle;*/
      .edit {
        display: inline-block;
        width: 2.3rem;
        text-align: center;
        vertical-align: top;
        font-size: .5rem;
      }
    }
  }
}
</style>
