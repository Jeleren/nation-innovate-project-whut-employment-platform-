<template>
  <div class="section-top">
    <sectionHead title="实验室展示" router="lab"/>
    <div class="lab-content-wrap">
      <img :src="lab.image_url"/>
      <div class="lab-left-wrap">
        <h1>{{lab.name}}</h1>
        <div class="lab-content">{{lab.content}}</div>
        <div class="more">了解更多</div>
      </div>
    </div>
  </div>
</template>

<script>
import sectionHead from '../components/section_head'
import { fetchLaboratory } from '@/api/first_page'

export default {
  name: 'laboratory',
  components: {
    sectionHead
  },
  data () {
    return {
      lab: {}
    }
  },
  created () {
    fetchLaboratory().then(res => {
      this.lab = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
.lab-content-wrap {
  height: 12rem;
  padding: 1.1rem 1rem;
  background-color: #fff;
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
    height: .75rem;
    width: 3rem;
    background-color: #6BD9F2;
    color: #fff;
    text-align: center;
    /*vertical-align: center;*/
    line-height: .75rem;
    cursor: pointer;
  }
}
</style>
