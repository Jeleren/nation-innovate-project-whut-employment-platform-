<template>
  <div class="rec-wrap boxShadow">
    <div class="title">职业圈推荐</div>
    <div class="rec-list" v-for="(item, index) in showProsList" :key="index">
      <!--:src="''+item.head-->
      <div class="img" :style="`background-image: url(${item.head})`"></div>
      <div class="word-wrap"><div class="name">{{item.pro}}</div><div class="fan">粉丝{{item.follow}}</div></div>
      <div class="button" @click="changeFollow(item)">
        <span v-if="item.isFollow">已关注</span>
        <span v-if="!item.isFollow">+关注</span>
      </div>
    </div>
    <div class="more pointer" @click="changeProsList" v-if="recList.length > 7">查看更多职业圈<i class="el-icon-arrow-right"></i></div>
  </div>
</template>

<script>
import {fetchRecPros, recProsCancelFollow, recProsFollow} from '@/api/personal'

export default {
  name: 'recommend_pros',
  data () {
    return {
      recList: [],
      showProsList: []
    }
  },
  created () {
    if (!this.recList.length) {
      fetchRecPros().then(res => {
        this.recList = res.data.recList
        this.showProsList = this.recList.slice(0, 7)
      })
    }
  },
  methods: {
    changeFollow (item) {
      let formData = new FormData()
      let id = this.$store.state.user.userInfo.id
      formData.append('id', id)
      formData.append('pros_id', item.id)
      if (item.isFollow) {
        recProsCancelFollow(formData).then(res => {
          item.isFollow = res.data.isFollow
          item.follow--
          this.$store.dispatch('getFollowProsList', id)
        })
      } else {
        recProsFollow(formData).then(res => {
          item.isFollow = res.data.isFollow
          item.follow++
          this.$store.dispatch('getFollowProsList', id)
        })
      }
    },
    changeProsList () {
      let start = Math.floor(Math.random() * (this.recList.length - 4) + 4)
      this.showProsList = this.recList.slice(start, start + 7)
    }
  }
}
</script>

<style lang="scss" scoped>
.rec-wrap {
  background-color: #fff;
  padding: .5rem .5rem 0 .5rem;
  font-size: .6rem;
  .title {
    margin-bottom: .5rem;
  }
  .rec-list {
    display: flex;
    align-items: center;
    /*justify-content: space-around;*/
    margin-bottom: 1rem;
    .img {
      width: 2.3rem;
      height: 2.3rem;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      margin-right: .6rem;
      background-size: cover;
    }
    .word-wrap {
      height: 100%;
      padding: .2rem 0;
      margin-right: .3rem;
      width: 3rem;
      overflow: hidden;
      .name {
        /*font-size: .7rem;*/
        font-weight: bold;
        margin-bottom: .2rem;
      }
      .fan {
        font-size: .5rem;
      }
    }
    .button {
      height: .75rem;
      padding: .2rem;
      box-sizing: content-box;
      width: 2.1rem;
      text-align: center;
    }
  }
  .more {
    border-top: 1px solid #D1E0E5;
    margin: 0 -.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
  }
}
</style>
