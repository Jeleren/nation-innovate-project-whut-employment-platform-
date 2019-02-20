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
          <img :src="baseInfo.image" @click="showImagePicker" title="更改图片"/>
        </div>
        <div class="pop-wrap" v-if="showEditBase">
          <div class="pop-content">
            <div class="pop-top mar-tb">
              <div class="pop-big-title">{{baseInfo.title}}</div><i class="el-icon-close" @click="closePop('showEditBase')"></i>
            </div>
            <div class="pop-item mar-tb"><span>姓&emsp;&emsp;名 : </span><label>
              <input v-model="baseInfo.name"/>
            </label></div>
            <div class="pop-item mar-tb"><span>出生年月 : </span><label>
              <input v-model="baseInfo.birth"/>
            </label></div>
            <div class="pop-item mar-tb"><span>民&emsp;&emsp;族 : </span><label>
              <input v-model="baseInfo.nation"/>
            </label></div>
            <div class="pop-item mar-tb"><span>性&emsp;&emsp;别 : </span><label>
              <input v-model="baseInfo.gender"/>
            </label></div>
            <div class="pop-item mar-tb"><span>政治面貌 : </span><label>
              <input v-model="baseInfo.political"/>
            </label></div>
            <div class="pop-item mar-tb"><span>学&emsp;&emsp;历 : </span><label>
              <input v-model="baseInfo.edu"/>
            </label></div>
            <div class="pop-item mar-tb"><span>毕业院校 : </span><label>
              <input v-model="baseInfo.school"/>
            </label></div>
            <div class="pop-bottom">
              <div class="button">保存信息</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="resume-item" v-for="(item, index) in resume" :key="index" >
      <div class="item-title"><span class="title">{{item.title}}</span><span class="edit pointer" @click="showEdit('showEditItem', index)">点击编辑</span></div>
      <div class="item-content" ref="content"></div>
    </div>
    <div class="pop-wrap" v-if="showEditItem">
      <div class="pop-content">
        <div class="pop-top clear mar-tb"><i class="el-icon-close" @click="closePop('showEditItem')"></i></div>
        <div class="pop-item"><span>标题 : </span><label>
          <input v-model="editItem.title"/>
        </label></div>
        <div class="pop-item"><span>内容 : </span><label>
          <textarea v-model="editItem.content" ref="text"></textarea>
        </label></div>
        <div class="pop-bottom"><div class="button" @click="deleteItem('showEditItem')">删除信息</div><div class="button" @click="saveContent('showEditItem')">保存信息</div></div>
      </div>
    </div>
    <div class="button-wrap"><span class="button" @click="showEdit('showEditItem')">添加简历信息</span></div>
    <imagePicker @setImage="setImage" @closeImagePicker="closeImagePicker" v-if="imagePickerState"/>
  </div>
</template>

<script>
import { fetchResume } from '@/api/personal'
import editInput from './edit_input'
import editArea from './edit_area'
import {autoTextarea} from '@/utils/textAutoHeight'
import {handleText} from '@/utils/handleText'
import imagePicker from '../../../components/imagePicker'

export default {
  name: 'resume',
  components: {
    editInput,
    editArea,
    imagePicker
  },
  data () {
    return {
      resume: [],
      baseInfo: {},
      showEditBase: false,
      editItem: {},
      showEditItem: false,
      editIndex: -1,
      imagePickerState: false
    }
  },
  created () {
    fetchResume(this.$store.state.user.userInfo.id).then(res => {
      this.baseInfo = res.data.resume[0]
      res.data.resume.splice(0, 1)
      this.resume = res.data.resume
      let a = setInterval(() => {
        if (this.$refs.content) {
          clearInterval(a)
          this.handleContent()
        }
      }, 500)
    })
  },
  methods: {
    handleContent (index) {
      if (index === undefined) {
        for (let [index, item] of this.resume.entries()) {
          this.$refs.content[index].innerHTML = handleText(item.content)
        }
      } else {
        this.$refs.content[index].innerHTML = handleText(this.resume[index].content)
      }
    },
    showEdit (param, index) {
      this[param] = !this[param]
      document.documentElement.style.overflow = 'hidden'
      if (index !== undefined) {
        this.editIndex = index
        this.editItem = this.resume[index]
        let addEvent = new Promise((resolve, reject) => {
          let a = setInterval(() => {
            if (this.$refs.text) {
              resolve()
              clearInterval(a)
            }
          }, 500)
        })
        addEvent.then(() => {
          autoTextarea(this.$refs.text, 5)
        })
      }
    },
    closePop (param) {
      this[param] = !this[param]
      document.documentElement.style.overflow = 'auto'
    },
    saveContent (param) {
      //  api
      if (this.editIndex === -1) {
        // api
        this.resume.push(this.editItem)
        let len = this.resume.length - 1
        let a = setInterval(() => {
          if (this.$refs.content[len]) {
            this.handleContent(len)
            clearInterval(a)
          }
        }, 500)
      } else {
        this.handleContent(this.editIndex)
      }
      this.closePop(param)
      this.cleanData()
    },
    deleteItem (param) {
      //  api
      this.resume.splice(this.editIndex, 1)
      this.closePop(param)
      this.cleanData()
    },
    cleanData () {
      this.editItem = -1
    },
    setImage (img) {
      this.baseInfo.image = img.src
    },
    showImagePicker () {
      // this.$refs.imagePicker.methods.setShow()
      this.imagePickerState = true
      document.documentElement.style.overflow = 'hidden'
    },
    closeImagePicker () {
      this.imagePickerState = false
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
    .button-wrap {
      font-size: .6rem;
      text-align: center;
      .button {
        padding: .2rem .5rem;
      }
    }
  }
.resume-item {
  font-size: .6rem;
  margin-bottom: .5rem;
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
        cursor: pointer;
        max-width: 6rem;
        max-height: 8rem;
      }
    }
  }
  .item-content {
    padding: .5rem;
    width: 100%;
    textarea {
      width: 100%;
      resize: none;
      overflow: hidden;
    }
  }
}
</style>
