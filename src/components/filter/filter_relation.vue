<template>
  <div class="pros-list-wrap">
    <div class="bottom" v-if="!$store.state.relation.totalPageNum && type === 'fan'" >暂无粉丝</div>
    <div class="bottom" v-else-if="!$store.state.relation.totalPageNum && type === 'follow'">暂无关注用户</div>
    <div class="bottom" v-else-if="!$store.state.relation.totalPageNum && type === 'prosFollow'">暂无关注职业圈</div>
    <div class="bottom" v-else-if="!$store.state.relation.totalPageNum && type === 'recPros'">你已关注全部职业圈</div>
    <slot></slot>
    <div class="page" v-if="Math.floor(pageNum / pageSize)">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="pageChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="sizes, prev, pager, next, jumper"
        :total="pageNum">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filter_relation',
  props: ['type'],
  data () {
    return {
      pageSize: 10,
      currentPage: 1
    }
  },
  computed: {
    pageNum () {
      return this.$store.state.relation.totalPageNum
    }
  },
  // created () {
  //   this.$store.commit('SET_PAGE_NUM', 0)
  // },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
      this.request()
    },
    pageChange (val) {
      this.currentPage = val
      this.request()
    },
    request () {
      switch (this.type) {
        case 'fan': {
          this.$store.dispatch('getFanList', {num: this.pageSize, page: this.currentPage})
          break
        }
        case 'follow': {
          this.$store.dispatch('getFollowList', {num: this.pageSize, page: this.currentPage})
          break
        }
        case 'prosFollow': {
          this.$store.dispatch('getFollowProsList', {num: this.pageSize, page: this.currentPage})
          break
        }
        case 'recPros': {
          this.$store.dispatch('getRecProsList', {num: this.pageSize, page: this.currentPage})
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .pros-list-wrap {
    width: 100%;
    display: flex;
    font-size: .6rem;
    line-height: 100%;
    background: #fff;
    flex-direction: column;
    .bottom {
      height: 1rem;
      text-align: center;
      line-height: 1rem;
    }
    .follow-wrap {
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: .5rem;
      overflow: hidden;
      .follow-item {
        display: flex;
        align-items: center;
        width: 10.9rem;
        background: #f2f2f5;
        margin-bottom: .5rem;
        overflow: hidden;
        border-radius: 5px;
        img {
          width: 2.5rem;
          height: 2.5rem;
          min-width: 2.5rem;
          border-radius: 50%;
          margin: 0 .5rem;
        }
        .item-right-wrap {
          /*display: flex;*/
          /*flex-direction: column;*/
          overflow: hidden;
          padding: .3rem .2rem;
          .name {
            font: .7rem bold;
            margin-bottom: .2rem;
          }
          .desc {
            font-size: .5rem;
            /*white-space: nowrap;*/
            overflow: hidden;
            margin-bottom: .2rem;
          }
          /*.button {*/
          /*height: 1rem;*/
          /*width: 2rem;*/
          /*border*/
          /*}*/
        }
      }
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
