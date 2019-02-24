<template>
  <div class="left-wrap">
    <div class="title">全部粉丝</div>
    <div class="follow-wrap">
      <div class="follow-item" v-for="(item, index) in fanList" :key="index">
        <img :src="item.userInfo.head"/>
        <div class="item-right-wrap">
          <div class="name">{{item.userInfo.username}}</div>
          <div class="intro">{{item.userInfo.intro}}</div>
          <div class="button">+关注</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fan',
  data () {
    return {
      fanList: []
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
        .intro {
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
</style>
