<template>
  <div class="per-header boxShadow">
    <div class="content-wrap">
      <img :src="$store.state.user.userInfo.head"/>
      <span>{{$store.state.user.userInfo.username}}</span>
      <div class="button" v-if="!isSelf">
        <span>
          <span v-if="isFollow"><i class="el-icon-check"></i>已关注</span>
          <span v-if="!isFollow">+ 关注</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'per_header',
  data () {
    console.log(this.$router)
    return {
      isFollow: this.$store.state.user.showUser.isFollow
    }
  },
  computed: {
    isSelf () {
      return this.$store.state.user.isSelf
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.per-header {
  position: relative;
  height: 3rem;
  background: #0074E1;
  color: #fff;
  margin-bottom: .93rem;
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
    span {
      //vertical-align: top;
      font-size: .75rem;
    }
    .button {
      height: .875rem;
      line-height: .875rem;
      margin-left: .625rem;
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
