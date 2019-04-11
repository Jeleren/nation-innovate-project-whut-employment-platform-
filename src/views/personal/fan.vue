<template>
  <div class="left-wrap">
    <div class="title">全部粉丝({{fanList.num}})</div>
    <filterRelation type="fan" :pageNum="fanList.num">
      <div class="follow-wrap" >
        <div class="follow-item" v-for="(item, index) in fanList.fanList" :key="index">
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
    </filterRelation>
  </div>
</template>

<script>
import {relation} from '@/utils/handleRelation'
import filterRelation from '@/components/filter/filter_relation'

export default {
  name: 'fan',
  components: {
    filterRelation
  },
  computed: {
    fanList () {
      return this.$store.state.relation.fanList
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
      width: 12.5rem;
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
