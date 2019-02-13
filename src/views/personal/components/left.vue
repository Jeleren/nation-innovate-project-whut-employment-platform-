<template>
  <div class="left-wrap">
    <div class="nav">
      <router-link to="active"><span>{{user}}的动态</span></router-link>
      <router-link to="resume"><span>{{user}}的简历</span></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'left',
  computed: {
    isSelf () {
      return this.$store.state.user.isSelf
    },
    user () {
      if (this.isSelf) {
        return '我'
      } else {
        if (this.$store.state.user.showUser.gender) {
          return '他'
        } else {
          return '她'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.left-wrap {
  margin-bottom: .93rem;
  .nav {
    height: 1.5rem;
    margin-bottom: .5rem;
    background: #fff;
    line-height: 100%;
    a {
      display: inline-block;
      width: 48%;
      text-align: center;
      font-size: .6rem;
      line-height: 1.5rem;
      text-decoration: none;
      color: #282828;
    }
    .router-link-active span {
      display: inline-block;
      height: 100%;
      border-bottom: 1px solid #008DDF;
    }
  }
}
</style>
