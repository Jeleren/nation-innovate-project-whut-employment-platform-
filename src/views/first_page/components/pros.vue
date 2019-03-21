<template>
  <div class="section-top">
    <sectionHead title="职业圈" router="pros"/>
    <div class="pros-wrap">
      <div class="pros-list-wrap">
        <span class="pros-item" v-for="(item, index) in prosList" :key="index" @click="goPros(item.id, index)" :class="{'pros-active': index === show_index}" @mouseover="setShowIndex(index)">{{item.pro}}</span>
      </div>
      <div class="pros-child-list" v-if="prosList.length">
        <span v-for="(item, index) in prosList[show_index].child" :key="index" @click="goPros(item.id, index)">{{item.pro}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import sectionHead from '../components/section_head'
// import {getActivityByPros} from '@/api/activities'

export default {
  name: 'pros',
  components: {
    sectionHead
  },
  data () {
    return {
      show_index: 0
    }
  },
  computed: {
    prosList () {
      return this.$store.state.pros.prosList
    }
  },
  created () {
    if (!this.prosList.length) {
      this.$store.dispatch('getProsList')
    }
  },
  methods: {
    setShowIndex (index) {
      this.show_index = index
    },
    goPros (id, index) {
      if (!id) {
        id = this.prosList[this.show_index].id
      }
      this.$store.dispatch('getActiveList', {type: 2, pros_id: id})
      if (this.show_index === index) {
        this.$router.push({name: 'pros', params: {index1: this.show_index}})
      } else {
        this.$router.push({name: 'pros', params: {index1: this.show_index, index2: index}})
      }
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.pros-wrap {
  /*height: 3.625rem;*/
  background-color: #fff;
  padding: .93rem 1rem .81rem;
  color: #4A4A4A;
  overflow: hidden;
  .pros-list-wrap {
    font-size: .5625rem;
    border-bottom: 2px solid #409eff;
    height: 1rem;
    overflow: hidden;
    span {
      display: inline-block;
      /*height: .875rem;*/
      /*margin: 0 .5625rem;*/
      margin-right: 1.125rem;
      padding: .1rem .4375rem;
      vertical-align: middle;
      cursor: pointer;
    }
    .pros-active {
      background-color: #409eff;
      color: #fff;
      font-weight: bold;
    }
  }
  .pros-child-list {
    font-size: .5rem;
    margin: .3rem 0 0 .4325rem;
    /*height: .6rem;*/
    overflow: hidden;
    span {
      margin: .2rem 1.3rem .2rem 0;
      display: inline-block;
      /*vertical-align: top;*/
      cursor: pointer;
      &:hover {
        color: #409eff;
      }
    }
  }
}
</style>
