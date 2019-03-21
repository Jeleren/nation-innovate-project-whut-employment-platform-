<template>
  <div class="wrap" v-if="userInfo.username">
    <div class="top">
      <div class="left">
        <el-button size="mini" v-if="userInfo.isFollow" @click="changeFollow">已关注</el-button>
        <el-button size="mini" v-if="!userInfo.isFollow" @click="changeFollow">关注</el-button>
        <el-button size="mini">粉丝 {{userInfo.fans}}</el-button>
        <el-button size="mini">关注 {{userInfo.follows}}</el-button>
      </div>
      <div>
        <div class="user-image" :style="{'background-image': `url(${$store.state.user.showUser.head})`}"></div>
        <div class="user-name">{{userInfo.username}}</div>
      </div>
      <div>{{userInfo.text}}</div>
    </div>
  </div>
</template>

<script>
import {relation} from '../../utils/handleRelation'
export default {
  name: 'other_desc',
  computed: {
    userInfo () {
      return this.$store.state.user.showUser
    }
  },
  methods: {
    changeFollow () {
      relation.changeFollow(this.userInfo)
    }
  }
}
</script>

<style lang="scss" scoped>
  .top {
    padding: 1rem;
    min-height: 3rem;
    background: #fff;
    position: relative;
    .left {
      position: absolute;
      left: 1rem;
      max-width: 5rem;
      button{
        margin-left: 0;
        margin-bottom: .5rem;
      }
    }
    .user-image {
      margin: 0 auto 1rem;
      width: 5rem;
      height: 5rem;
      -webkit-background-size: cover;
      background-size: cover;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
    }
    .user-name {
      text-align: center;
      font: 1rem bold;
      margin-bottom: 1rem;
    }
  }
</style>
