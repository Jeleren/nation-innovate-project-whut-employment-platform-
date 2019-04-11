<template>
  <div class="content-wrap">
    <div v-for="(item, index) in comList" :key="index" class="com-wrap" @click="showDetail(index)">
      <!--<img :src="''+item.user.head"/>-->
      <div  class="img" :style="`background-image: url(${item.user.head})`"></div>
      <div class="title">{{item.title}}</div>
      <div class="com-content">{{item.text.slice(0, 30)}}<span v-if="item.text.length > 30">...</span></div>
      <div class="status" :class="{'on-status': item.state, 'off-status': !item.state}">
        <div v-if="item.status"><i></i><span>进行中</span></div>
        <div v-if="!item.status"><i></i><span>已结束</span></div>
        <span>{{item.start_time}}——{{item.end_time}}</span>
      </div>
    </div>
    <div class="item-detail" v-if="isShowDetail">
      <div class="item-content boxShadow">
        <div class="title blue-width clear"><span>{{compItem.title}}</span><i class="el-icon-close pointer" @click="hideDetail"></i></div>
        <div>
          <div class="title blue-width">主办方：{{compItem.user.username}}</div>
          <!--<div class="title blue-width">比赛/活动简介</div>-->
          <!--<div class="emp-content">{{compItem.intro}}</div>-->
          <div class="title blue-width">比赛/活动详情</div>
          <div class="emp-content">{{compItem.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'compList',
  props: ['comList'],
  data () {
    return {
      // comList: [],
      isShowDetail: false,
      compItem: {}
    }
  },
  methods: {
    showDetail (index) {
      this.compItem = this.comList[index]
      this.isShowDetail = true
      document.documentElement.style.overflow = 'hidden'
    },
    hideDetail () {
      this.isShowDetail = false
      document.documentElement.style.overflow = 'auto'
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-wrap {
    /*height: 11.5625rem;*/
    background-color: #fff;
    padding-top: 1.125rem;
    .com-wrap {
      display: inline-block;
      width: 9.3rem;
      margin: 0 .96rem .96rem;
      cursor: pointer;
      color: #282828 !important;
      vertical-align: top;
      .img {
        width: 100%;
        height: 6.25rem;
        vertical-align: top;
        background-size: 100% 100%;
        background-position: center;
      }
      .title {
        font-size: .5rem;
        font-weight: bold;
        margin: .2rem 0 .375rem .2rem;
      }
      .com-content {
        height: 1.3rem;
        overflow: hidden;
        margin-left: .25rem;
        margin-bottom: .25rem;
        font-size: .5rem;
      }
      .status {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: .875rem;
        font-size: .375rem;
        overflow: hidden;
        div {
          display: flex;
          align-items: center;
          white-space: nowrap;
        }
        span{
          white-space: nowrap;
        }
        i {
          width: .5rem;
          height: .5rem;
          border-radius: 50%;
          margin: 0 .2rem;
          background-color: #fff;
        }
      }
      .on-status {
        color: #fff;
        background-color: #409eff;
      }
      .off-status {
        background-color: #CDCBCB;
      }
    }
  }
</style>
