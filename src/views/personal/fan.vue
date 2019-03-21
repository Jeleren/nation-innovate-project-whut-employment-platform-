<template>
  <div class="left-wrap">
    <div class="title">全部粉丝</div>
    <div class="follow-wrap" v-if="fanList.length">
      <div class="follow-item" v-for="(item, index) in fanList" :key="index">
        <img :src="item.head"/>
        <div class="item-right-wrap">
          <div class="name">{{item.username}}</div>
          <div class="desc">{{item.desc}}</div>
          <div class="button" @click="changeFollow(item)">
            <span v-if="item.isFollow" >已关注</span>
            <span v-if="!item.isFollow">+关注</span>
          </div>
        </div>
      </div>
    </div>
    <div class="no-fan">暂无粉丝</div>
  </div>
</template>

<script>
import {fetchFanList} from '@/api/personal'
import {relation} from '@/utils/handleRelation'

export default {
  name: 'fan',
  data () {
    return {
      fanList: []
    }
  },
  created () {
    if (!this.fanList.length) {
      fetchFanList(this.$store.state.user.userInfo.id).then(res => {
        if (res.data) {
          this.fanList = res.data.fanList
        }
      })
    }
  },
  methods: {
    changeFollow (item) {
      relation.changeFollow(item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    font: .7rem bold;
    background: #fff;
    padding: .2rem .5rem;
    border-bottom: 1px solid #f2f2f5;
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
      /*height: 4rem;*/
      background: #f2f2f5;
      margin-bottom: .5rem;
      overflow: hidden;
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
          font-size: .7rem;
          font-weight: bold;
          margin-bottom: .2rem;
        }
        .desc {
          font-size: .5rem;
          /*white-space: nowrap;*/
          overflow: hidden;
          margin-bottom: .2rem;
        }
        .button {
          /*width: 3rem;*/
          /*height: 1.5rem;*/
          /*line-height: 1.5rem;*/
        }
      }
    }
  }
  .no-fan {
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    background: #fff;
  }
</style>
