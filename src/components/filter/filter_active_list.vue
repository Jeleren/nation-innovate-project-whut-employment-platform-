<template>
  <div class="pros-list-wrap" v-if="prosList.length">
    <div class="head-text" v-if="searchText"><div>以下为"<span class="text">{{searchText}}</span>"的搜素结果</div><el-button size="mini" @click="cancelSearch">取消搜索</el-button></div>
    <div class="top">
      <span class="title">分类：</span>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{prosList[firstIndex].pro}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item, index) in prosList" :key="index" @click.native="handleFirst(index, item.id)">{{item.pro}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown  v-if="prosList[firstIndex].child">
        <span class="el-dropdown-link">
          {{prosList[firstIndex].child[secondIndex].pro}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item, index) in prosList[firstIndex].child" :key="index" @click.native="handleSecond(index, item.id)">{{item.pro}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="bottom" v-if="!$store.state.pros.comList.length && type === 1">暂无比赛信息</div>
    <div class="bottom" v-if="!$store.state.pros.activeList.length && type === 2">暂无动态</div>
    <div class="bottom" v-if="!$store.state.pros.labList.length && type === 3">暂无实验室</div>
    <div class="bottom" v-if="!$store.state.pros.empList.length && type === 4">暂无招聘信息</div>
    <slot></slot>
    <div class="page" v-if="Math.floor(pageNum / pageSize)">
      <el-pagination
        background
        :pager-count="3"
        @size-change="handleSizeChange"
        @current-change="pageChange"
        :current-page="currentPage"
        :page-sizes="[3, 5, 9, 15, 20]"
        :page-size="pageSize"
        layout="sizes, prev, pager, next, jumper"
        :total="pageNum">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
export default {
  name: 'pros_filter',
  data () {
    return {
      firstIndex: 0,
      secondIndex: 0,
      type: -1,
      id: 0,
      num: 5,
      pageSize: 5,
      self: false,
      collect: false,
      ent: false,
      currentPage: 1,
      userId: cookie.get('id')
    }
  },
  computed: {
    prosList () {
      return this.$store.state.pros.prosList
    },
    pageNum () {
      return this.$store.state.pros.totalPageNum
    },
    searchText () {
      return this.$store.state.pros.searchText
    }
  },
  created () {
    if (!this.prosList.length) {
      this.$store.dispatch('getProsList')
    }
    let route = this.$router.currentRoute
    let name = route.name
    if (route.params.index1) {
      this.firstIndex = route.params.index1
      this.id = this.prosList[this.firstIndex].id
    }
    if (route.params.index2) {
      this.secondIndex = route.params.index2
      this.id = this.prosList[this.firstIndex].child[this.secondIndex].id
    }
    switch (name) {
      case 'employment': {
        this.type = 4
        this.pageSize = 10
        break
      }
      case 'lab': {
        this.type = 3
        this.pageSize = 3
        break
      }
      case 'competition': {
        this.type = 1
        this.pageSize = 9
        break
      }
      case '我的动态': {
        this.self = true
        break
      }
      case '我的收藏': {
        this.collect = true
        break
      }
      case 'active': {
        this.type = 2
        this.pageSize = 5
        this.self = true
        break
      }
      case 'ent-employment': {
        this.type = 4
        this.pageSize = 10
        this.ent = true
        break
      }
      case 'ent-competition': {
        this.type = 1
        this.pageSize = 10
        this.ent = true
        break
      }
      case 'TA的动态': {
        this.type = 2
        this.userId = this.$route.params.id
        // 判断是否获取的的用户个人动态
        this.self = true
        break
      }
      default: {
        this.type = 2
      }
    }
    this.request()
    if (name !== 'pros') {
      this.cancelSearch()
    }
    // console.log(name)
  },
  methods: {
    handleFirst (index, id) {
      this.firstIndex = index
      this.id = id
      this.request()
    },
    handleSecond (index, id) {
      this.secondIndex = index
      if (!id && this.firstIndex) {
        this.id = this.prosList[this.firstIndex].id
      } else {
        this.id = id
      }
      this.request()
    },
    pageChange (val) {
      this.currentPage = val
      this.request()
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.request()
    },
    request () {
      if (!this.searchText) {
        let params = {type: this.type, page: this.currentPage, num: this.pageSize}
        if (this.id) {
          params.pros_id = this.id
        }
        if (this.ent || this.self) {
          params.id = this.userId
        }
        if (this.self) {
          this.$store.dispatch('getSelfActiveList', params)
          return
        }
        if (this.collect) {
          this.$store.dispatch('getCollectList', params)
          return
        }
        this.$store.dispatch('getActiveList', params)
      } else {
        let data = new FormData()
        data.append('text', this.searchText)
        data.append('type', 2)
        data.append('num', this.pageSize)
        data.append('page', this.currentPage)
        if (this.id) {
          data.append('pros_id', this.id)
        }
        this.$store.dispatch('search', data)
      }
    },
    cancelSearch () {
      this.$store.commit('SET_SEARCH_TEXT', '')
    }
  }
}
</script>

<style lang="scss" scoped>
  .pros-list-wrap {
    /*height: 1.5rem;*/
    width: 100%;
    display: flex;
    font-size: .6rem;
    line-height: 100%;
    border-bottom: 1px solid #ececec;
    background: #fff;
    flex-direction: column;
    .head-text {
      padding: 0 1.5rem;
      margin-top: .5rem;
      display: flex;
      justify-content: space-between;
      color: #3EAAE9;
      .text {
        font-weight: bold;
      }
    }
    .top {
      width: 100%;
    }
    .bottom {
      height: 1rem;
      text-align: center;
    }
    span {
      line-height: 1.5rem;
      font-size: .6rem;
      font-weight: bold;
    }
    .title {
      margin-left: 1.5rem;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .page {
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
