<template>
  <div>
    <div class="lab-content-wrap" v-for="(item, index) in labList" :key="index">
      <img :src="item.head"/>
      <div class="lab-left-wrap">
        <h1>{{item.username}}</h1>
        <div class="lab-content">{{item.text}}</div>
        <div class="more" @click="goLabPersonal(item)">了解更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'labList',
  props: ['labList'],
  methods: {
    goLabPersonal (item) {
      const href = this.$router.resolve({
        path: '/ent',
        query: {id: item.id}
      })
      window.open(href.href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
  .lab-content-wrap {
    height: 12rem;
    padding: 1.1rem 1rem;
    background-color: #fff;
    margin-bottom: .2rem;
    img {
      width: 14.81rem;
      height: 100%;
      margin-right: 1.5rem;
    }
    .lab-left-wrap {
      display: inline-block;
      /*padding-top: .625rem;*/
      vertical-align: top;
      h1 {
        font-size: 1rem;
        margin: .5rem 0;
      }
    }
    .lab-content {
      width: 15.1rem;
      height: 5.7rem;
      font-size: .5625rem;
      line-height: .875rem;
      margin-bottom: 1.2rem;
      overflow: hidden;
    }
    .more {
      float: right;
      display: inline-block;
      font-size: .5rem;
      /*height: .75rem;*/
      width: 3rem;
      background-color: #6BD9F2;
      color: #fff;
      text-align: center;
      /*vertical-align: center;*/
      line-height: .75rem;
      cursor: pointer;
      padding: .1rem 0;
    }
  }
</style>
