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
            <el-menu-item index="/gc/ent/active">
              <i class="el-icon-edit-outline"></i>
              <span>动态管理</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-news"></i>
                <span>招聘管理</span>
              </template>
              <el-menu-item index="/gc/ent/employment/edit" >编辑招聘信息</el-menu-item>
              <el-menu-item index="/gc/ent/employment/manage">管理招聘信息</el-menu-item>
              <el-menu-item index="/gc/ent/employment/resume">管理简历</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-news"></i>
                <span>比赛活动</span>
              </template>
              <el-menu-item index="/gc/ent/competition/edit" >编辑比赛信息</el-menu-item>
              <el-menu-item index="/gc/ent/competition/manage">管理比赛信息</el-menu-item>
            </el-submenu>
            <el-menu-item index="/gc/ent/info">
              <i class="el-icon-setting"></i>
              <span slot="title">信息管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
      <div class="router-view-wrap"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import perHead from '../personal/components/per_header'
export default {
  name: 'index',
  components: {
    perHead
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
