<template>
  <div class="employment section-top">
    <sectionHead title="招聘信息" router="employment"/>
    <empList :empList="empList"/>
  </div>
</template>

<script>
import sectionHead from '../components/section_head'
import empList from '../../../components/employList'

export default {
  name: 'employment',
  components: {
    sectionHead,
    empList
  },
  computed: {
    empList () {
      return this.$store.state.pros.empList
    }
  },
  created () {
    if (!this.empList.length) {
      this.$store.dispatch('getActiveList', {type: 4, num: 4})
    }
  }
}
</script>

<style lang="scss" scoped>
  .employment {
    overflow: hidden;
    .content-wrap {
      height: 7.625rem;
      background-color: #fff;
      padding:0 1rem;
      font-size: .5rem;
      box-shadow:0 1px 3px 0 rgba(236,236,236,1);
      color: #4A4A4A;
      .emp-item {
        display: flex;
        justify-content: space-between;
        height: 1.8rem;
        border-bottom: 2px solid #cecece;
        padding: .81rem 0 .3125rem 0;
        .part {
          display: flex;
          align-items: center;
          a {
            font-weight: bold;
            color: #4A4A4A;
          }
        }
        i {
          width: .5625rem;
          height: .5625rem;
          margin-right: .375rem;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          background-color: #6BD9F2;
        }
      }
    }
  }
</style>
