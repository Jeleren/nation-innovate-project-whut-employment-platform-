<template>
  <div class="content content-top-mar">
    <perHead/>
    <div class="content-header-mar ent-content">
      <el-row class="tac">
        <el-col>
          <el-menu
            :default-active="$route.path"
            :router = true
            class="el-menu-vertical-demo">
            <div v-for="(item, index) in routeList" :key="index">
              <el-submenu :index="index" v-if="item.children">
                <template slot="title">
                  <i :class="item.meta.icon"></i>
                  <span>{{item.meta.title}}</span>
                </template>
                <el-menu-item v-for="(child_item, child_index) in item.children" :key="child_index" :index="child_item.path">{{child_item.meta.title}}</el-menu-item>
              </el-submenu>
              <el-menu-item :index="item.path" v-if="!item.children">
                <i :class="item.meta.icon"></i>
                <span>{{item.meta.title}}</span>
              </el-menu-item>
            </div>
          </el-menu>
        </el-col>
      </el-row>
      <div class="router-view-wrap"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import perHead from '../personal/components/per_header'
import {entRouter} from '@/router'

export default {
  name: 'index',
  components: {
    perHead
  },
  data () {
    return {
      routeList: entRouter.children
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding-top: 1rem;
  .ent-content {
    display: flex;
    justify-content: space-between;
  }
  .el-row {
    display: inline-block;
    min-height: 15rem;
    width: 22%;
  }
  .el-menu-item {
    min-width: 100%;
  }
  .router-view-wrap {
    width: 75%;
    display: inline-block;
    vertical-align: top;
  }
}
</style>
