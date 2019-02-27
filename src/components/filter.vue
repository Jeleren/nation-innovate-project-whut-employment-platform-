<template>
  <div class="pros-list-wrap" v-if="prosList.length">
    <span>分类：</span>
    <div class="title pointer" @click="showList('first')" @mouseleave="hideList('first')">{{prosList[firstIndex].pro}}<i class="el-icon-arrow-down"></i>
      <ul class="list" ref="first">
        <li v-for="(item, index) in prosList" :key="index" @click="handleFirst(index)">{{item.pro}}</li>
      </ul>
    </div>
    <div class="title pointer" v-if="prosList[firstIndex].child" @click="showList('second')" @mouseleave="hideList('second')">{{prosList[firstIndex].child[secondIndex].pro}}<i class="el-icon-arrow-down"></i>
      <ul class="list" ref="second">
        <li v-for="(item, index) in prosList[firstIndex].child" :key="index" @click="handleSecond(index)">{{item.pro}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pros_filter',
  data () {
    return {
      firstIndex: 0,
      secondIndex: 0
    }
  },
  computed: {
    prosList () {
      // console.log(this.$store.state.pros.prosList)
      return this.$store.state.pros.prosList
    }
  },
  created () {
    if (!this.prosList.length) {
      this.$store.dispatch('getProsList')
    }
    let route = this.$router.currentRoute
    if (route.params.index1) {
      this.firstIndex = route.params.index1
      this.secondIndex = route.params.index2
    }
  },
  methods: {
    handleFirst (index) {
      this.firstIndex = index
    },
    handleSecond (index) {
      this.secondIndex = index
    },
    showList (param) {
      this.$refs[param].style.display = 'block'
    },
    hideList (param) {
      this.$refs[param].style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
  .pros-list-wrap {
    height: 1.5rem;
    width: 100%;
    display: flex;
    font-size: .6rem;
    line-height: 100%;
    border-bottom: 1px solid #ececec;
    padding-left: 1.5rem;
    background: #fff;
    span {
      line-height: 1.5rem;
    }
    .title {
      position: relative;
      padding: 0 .2rem;
      /*vertical-align: top;*/
      line-height: 1.5rem;
      font-weight: bold;
      .list {
        position: absolute;
        top: 1.4rem;
        display: none;
        list-style: none;
        padding: 0;
        margin: 0;
        background: #fff;
        z-index: 10;
        /*min-width: 100%;*/
        text-align: center;
        box-shadow: 1px 1px 5px 1px #696969;
        font-weight: lighter;
        li {
          white-space: nowrap;
          cursor: pointer;
          padding: 0 .2rem;
          &:hover {
            background: #f2f2f5;
          }
        }
      }
    }
  }
</style>
