<template>
  <div class="resume-wrap">
    <div class="resume-item">
      <div class="item-title"><span class="title">{{baseInfo.title}}</span><span class="edit pointer" @click="showEdit('showEditBase')">点击编辑</span></div>
      <div class="base-info">
        <div class="left">
          <span class="left-item-wrap"><span class="left-item-title">姓&emsp;&emsp;名 : </span>{{baseInfo.name}}</span>
          <span class="left-item-wrap"><span>出生年月 : </span><span>{{baseInfo.birth}}</span></span>
          <span class="left-item-wrap"><span>民&emsp;&emsp;族 : </span>{{baseInfo.nation}}</span>
          <span class="left-item-wrap"><span>性&emsp;&emsp;别 : </span><span>{{baseInfo.gender}}</span></span>
          <span class="left-item-wrap"><span>政治面貌 : </span><span>{{baseInfo.political}}</span></span>
          <span class="left-item-wrap"><span>学&emsp;&emsp;历 : </span><span>{{baseInfo.edu}}</span></span>
          <span class="left-item-wrap"><span>毕业院校 : </span>{{baseInfo.school}}</span>
        </div>
        <div class="right">
          <img :src="baseInfo.image"/>
        </div>
        <div class="pop-wrap" v-if="showEditBase">
          <div class="pop-content">
            <div class="pop-top mar-tb">
              <div class="pop-big-title">{{baseInfo.title}}</div><i class="el-icon-close" @click="closePop('showEditBase')"></i>
            </div>
            <div class="pop-item mar-tb"><span>姓&emsp;&emsp;名 : </span><input v-model="baseInfo.name"/></div>
            <div class="pop-item mar-tb"><span>出生年月 : </span><input v-model="baseInfo.birth"/></div>
            <div class="pop-item mar-tb"><span>民&emsp;&emsp;族 : </span><input v-model="baseInfo.nation"/></div>
            <div class="pop-item mar-tb"><span>性&emsp;&emsp;别 : </span><input v-model="baseInfo.gender"/></div>
            <div class="pop-item mar-tb"><span>政治面貌 : </span><input v-model="baseInfo.political"/></div>
            <div class="pop-item mar-tb"><span>学&emsp;&emsp;历 : </span><input v-model="baseInfo.edu"/></div>
            <div class="pop-item mar-tb"><span>毕业院校 : </span><input v-model="baseInfo.school"/></div>
            <div class="pop-bottom">
              <div class="button">保存信息</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="resume-item" v-for="(item, index) in resume.resume" :key="index">
      <div class="item-title"><span class="title">{{item.title}}</span><span class="edit pointer">点击编辑</span></div>
      <div class="item-content">{{item.content}}</div>
    </div>
    <div></div>
    <div class="button-wrap"><span class="button">添加简历信息</span></div>
  </div>
</template>

<script>
import { fetchResume } from '@/api/personal'
import editInput from './edit_input'
import editArea from './edit_area'
export default {
  name: 'resume',
  components: {
    editInput,
    editArea
  },
  data () {
    return {
      resume: {},
      baseInfo: {},
      showEditBase: false
    }
  },
  created () {
    fetchResume(this.$store.state.user.userInfo.id).then(res => {
      this.baseInfo = res.data.resume[0]
      res.data.resume.splice(0, 1)
      this.resume = res.data
      // console.log(this.resume)
    })
  },
  methods: {
    showEdit (param) {
      this[param] = !this[param]
      document.documentElement.style.overflow = 'hidden'
    },
    closePop (param) {
      this[param] = !this[param]
      document.documentElement.style.overflow = 'auto'
    }
  }
}
</script>

<style lang="scss" scoped>
  .resume-wrap {
    height: auto;
    background: #fff;
    padding: .75rem;
    .button {

    }
  }
.resume-item {
  font-size: .6rem;
  margin-bottom: 1rem;
  .item-title {
    color: #fff;
    border-bottom: 1px solid #45C8F3;
    line-height: 100%;
    .title {
      display: inline-block;
      height: 100%;
      background: #45C8F3;
      padding: .1875rem .3125rem;
    }
    .edit {
      float: right;
      display: inline-block;
      color: #4A4A4A;
      line-height: 100%;
      vertical-align: top;
      margin-top: .2rem;
    }
  }
  .base-info {
    color: #282828;
    padding: .5rem;
    display: flex;
    .left {
      width: 70%;
      display: inline-block;
      vertical-align: top;
      .left-item-wrap {
        display: inline-block;
        min-width: 48%;
        min-height: .8rem;
        margin-bottom: .3rem;
        /*overflow: hidden;*/
        .left-item-title {
          width: fit-content;
        }
      }
    }
    .right {
      display: inline-block;
      img {
        max-width: 6rem;
        max-height: 8rem;
      }
    }
  }
  .item-content {
    padding: .5rem;
  }
}
</style>
