<template>
  <div class="section-top">
    <sectionHead title="实验室展示" router="lab"/>
    <labList :labList="lab"/>
  </div>
</template>

<script>
import sectionHead from '../components/section_head'
import { fetchLaboratory } from '@/api/first_page'
import labList from '../../../components/labList'

export default {
  name: 'laboratory',
  components: {
    sectionHead,
    labList
  },
  data () {
    return {
      lab: []
    }
  },
  created () {
    if (!this.lab.length) {
      fetchLaboratory().then(res => {
        this.lab = res.data.labList.slice(0, 1)
      })
    }
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
    background-color: #409eff;
    color: #fff;
    text-align: center;
    /*vertical-align: center;*/
    line-height: .75rem;
    cursor: pointer;
  }
}
</style>
