<template>
  <div class="head-top">
    <div class="head-top-wrap">
      <label></label>
      <input type="text" placeholder="请输入关键字" v-model="text" v-on:keyup.enter="search"/>
      <span class="pointer" @click="search">搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'head_search',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    search () {
      if (this.text) {
        let location = this.$router.currentRoute.name
        // console.log(location)
        let type = -1
        switch (location) {
          case 'employment': {
            type = 4
            break
          }
          case 'competition': {
            type = 1
            break
          }
          case 'lab': {
            type = 3
            break
          }
          case 'pros': {
            type = 2
            break
          }
          default: {
            type = 2
            this.$router.push('/gc/pros')
            break
          }
        }
        this.$store.commit('SET_SEARCH_TEXT', this.text)
        let data = new FormData()
        data.append('text', this.text)
        data.append('type', type)
        data.append('num', 5)
        this.$store.dispatch('search', data)
        this.text = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../style/variables";
.head-top {
  position: relative;
  display: flex;
  width: 100%;
  padding: .875rem 0 .625rem 0;
  background-color: #1C9CE7;
  font-size: .5rem;
  box-shadow:0 1px 1px 0 rgba(28,156,231,0.2);
  .head-top-wrap {
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  label {
    position: absolute;
    margin-left: .31rem;
    background-image: url(../assets/first_page/white_search.png);
    background-size: cover;
    height: .56rem;
    width: .56rem;
  }
  input {
    width: 9.125rem;
    height: 1.125rem;
    background-color: #008DDF;
    margin-right: 2%;
    border-radius: 2px;
    padding-left: 1.31rem;
    font-size: .5rem;
    color: #fff;
    box-shadow:0 1px 1px 0 #007cd8 inset;
    &::-webkit-input-placeholder{
      color: #CDEDFF;
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.875rem;
    height: 1.125rem;
    background-color: #22b9eb;
    color: #fff;
    border-radius: 2px;
  }
}
</style>
