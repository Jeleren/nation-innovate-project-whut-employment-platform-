<template>
  <div class="rec-wrap boxShadow">
    <div class="title">职业圈推荐</div>
    <div class="rec-list" v-for="(item, index) in recList" :key="index">
      <img :src="item.head"/>
      <div class="word-wrap"><div class="name">{{item.username}}</div><div class="fan">粉丝{{item.follow}}</div></div>
      <div class="button" @click="changeFollow(item)">
        <span v-if="item.isFollow">已关注</span>
        <span v-if="!item.isFollow">+关注</span>
      </div>
    </div>
    <div class="more pointer">查看更多职业圈<i class="el-icon-arrow-right"></i></div>
  </div>
</template>

<script>
import { fetchRecPros } from '../api/personal'
import {relation} from '@/utils/handleRelation'

export default {
  name: 'recommend_pros',
  data () {
    return {
      recList: []
    }
  },
  created () {
    fetchRecPros(this.$store.state.user.userInfo.id).then(res => {
      this.recList = res.data.recList
    })
  },
  methods: {
    changeFollow (item) {
      relation.changeFollow(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.rec-wrap {
  background-color: #fff;
  padding: .5rem .5rem 0 .5rem;
  font-size: .6rem;
  .title {
    margin-bottom: .5rem;
  }
  .rec-list {
    display: flex;
    align-items: center;
    /*justify-content: space-around;*/
    margin-bottom: 1rem;
    img {
      width: 2.3rem;
      height: 2.3rem;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      margin-right: .6rem;
    }
    .word-wrap {
      height: 100%;
      padding: .2rem 0;
      margin-right: .3rem;
      width: 3rem;
      overflow: hidden;
      .name {
        /*font-size: .7rem;*/
        font-weight: bold;
        margin-bottom: .2rem;
      }
      .fan {
        font-size: .5rem;
      }
    }
    .button {
      height: .75rem;
      padding: .2rem;
      box-sizing: content-box;
      width: 2.1rem;
      text-align: center;
    }
  }
  .more {
    border-top: 1px solid #D1E0E5;
    margin: 0 -.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
  }
}
</style>
