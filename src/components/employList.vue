<template>
  <div class="content-wrap">
    <div v-for="(item, index) in empList" :key="index" class="emp-item" @click="showDetail(index)">
      <span class="part"><i></i><a class="a-link">{{item.title}}</a></span>
      <span class="part">{{item.date}}</span>
    </div>
    <div class="item-detail" v-if="isShowDetail">
      <div class="item-content boxShadow">
        <div class="title blue-width clear"><span>职位：{{empItem.title}}</span><i class="el-icon-close pointer" @click="hideDetail"></i></div>
        <div>
          <div class="title blue-width">公司：{{empItem.user.username}}</div>
          <div class="title blue-width">职位详情</div>
          <div class="emp-content">{{empItem.text}}</div>
        </div>
        <div class="button-wrap"><span class="button" @click="onSubmit()">投递简历</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import {postResume} from '@/api/activities'

export default {
  name: 'employList',
  props: {
    empList: {}
  },
  data () {
    return {
      empItem: {
        title: 'web'
      },
      isShowDetail: false
    }
  },
  methods: {
    showDetail (index) {
      this.empItem = this.empList[index]
      this.isShowDetail = true
      document.documentElement.style.overflow = 'hidden'
    },
    hideDetail () {
      this.isShowDetail = false
      document.documentElement.style.overflow = 'auto'
    },
    onSubmit () {
      let formdata = new FormData()
      formdata.append('id', this.$store.state.user.userInfo.id)
      postResume(this.empItem.id, formdata).then(res => {
        if (res.data) {
          this.$message({
            message: '投递成功',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-wrap {
    /*height: 7.625rem;*/
    background-color: #fff;
    padding:0 1rem 1rem;
    font-size: .5rem;
    box-shadow:0 1px 3px 0 rgba(236,236,236,1);
    color: #4A4A4A;
    .emp-item {
      display: flex;
      justify-content: space-between;
      height: 1.8rem;
      border-bottom: 2px solid #cecece;
      padding: .81rem 0 .3125rem 0;
      .part {
        display: flex;
        align-items: center;
        a {
          font-weight: bold;
          color: #4A4A4A;
        }
      }
      i {
        width: .5625rem;
        height: .5625rem;
        margin-right: .375rem;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background-color: #6BD9F2;
      }
    }
  }
</style>
