<template>
  <el-row class="tac">
    <el-col>
      <span class="title">个人中心</span>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        :router = true>
        <el-menu-item :index="item.path" :key="index" v-for="(item, index) in routerList">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import fanFollow from '../../../components/fan_follow'
import recPros from '../../../components/recommend_pros'
import { personalRouter } from '../../../router'
export default {
  components: {
    fanFollow,
    recPros
  },
  name: 'slideBar',
  data () {
    return {
      routerList: personalRouter.children
    }
  }
}
</script>

<style lang="scss" scoped>
  .tac {
    display: inline-block;
    .title{
      display: inline-block;
      background: #fff;
      height: 2rem;
      width: 100%;
      line-height: 2rem;
      font-weight: bold;
      border-bottom: 1px solid #e6e6e6;
      border-right: solid 1px #e6e6e6;
      text-indent: 1rem;
    }
  }
</style>
