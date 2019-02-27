<template>
  <div class="section-top">
    <sectionHead title="职业圈" router="pros"/>
    <div class="pros-wrap">
      <div class="pros-list-wrap">
        <span class="pros-item" v-for="(item, index) in pros_list" :key="index" :class="{'pros-active': index === show_index}" @mouseover="setShowIndex(index)">{{item.pro}}</span>
      </div>
      <div class="pros-child-list" v-if="pros_list.length">
        <span v-for="(item, index) in pros_list[show_index].child" :key="index" @click="goPros(index)">{{item.pro}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import sectionHead from '../components/section_head'
import { fetchProsList } from '@/api/first_page'
import {getActivityByPros} from '@/api/activities'

export default {
  name: 'pros',
  components: {
    sectionHead
  },
  data () {
    return {
      pros_list: [],
      show_index: 0
    }
  },
  created () {
    fetchProsList().then(res => {
      this.pros_list = res.data.prosList
      this.$store.commit('SET_PROS_LIST', res.data.prosList)
    })
  },
  methods: {
    setShowIndex (index) {
      this.show_index = index
    },
    goPros (index) {
      this.$router.push({name: 'pros', params: {index1: this.show_index, index2: index}})
      window.scrollTo(0, 0)
      getActivityByPros({id: this.pros_list[this.show_index].child[index].id}).then(res => {
        console.log(res)
        if (res.data) {
          this.$store.commit('SET_ACTIVE_LIST', res.data.activeList)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pros-wrap {
  height: 3.625rem;
  background-color: #fff;
  padding: .93rem 1rem .81rem;
  color: #4A4A4A;
  overflow: hidden;
  .pros-list-wrap {
    font-size: .5625rem;
    border-bottom: 2px solid #A6ECF9;
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
      background-color: #A6ECF9;
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
      margin-right: 1.3rem;
      /*vertical-align: top;*/
      cursor: pointer;
      &:hover {
        color: #A6ECF9;
      }
    }
  }
}
</style>
