<template>
  <div class="resume-wrap">
    <div class="resume-item">
      <div class="item-title"><span class="title">基本信息</span><span class="edit pointer" @click="showEdit('showEditBase')" v-if="!watchModel">点击编辑</span></div>
      <div class="base-info">
        <div class="left">
          <span class="left-item-wrap"><span class="left-item-title">姓&emsp;&emsp;名 : </span>{{baseInfo.name}}</span>
          <span class="left-item-wrap"><span>出生年月 : </span><span v-if="baseInfo.birth">{{changeBirth(baseInfo.birth)}}</span></span>
          <span class="left-item-wrap"><span>民&emsp;&emsp;族 : </span>{{baseInfo.nation}}</span>
          <span class="left-item-wrap"><span>性&emsp;&emsp;别 : </span><span v-if="baseInfo.gender === 1">男</span><span v-if="baseInfo.gender === 0">女</span></span>
          <span class="left-item-wrap"><span>政治面貌 : </span><span>{{baseInfo.political}}</span></span>
          <span class="left-item-wrap"><span>学&emsp;&emsp;历 : </span><span>{{baseInfo.edu}}</span></span>
          <span class="left-item-wrap"><span>毕业院校 : </span>{{baseInfo.school}}</span>
          <span class="left-item-wrap"><span>联系方式 : </span>{{baseInfo.contact_way}}</span>
        </div>
        <div class="right">
          <img :src="baseInfo.image" v-if="watchModel && baseInfo.image"/>
          <img :src="baseInfo.image" v-if="!watchModel && baseInfo.image" @click="showImagePicker" title="更改图片"/>
          <div v-if="!baseInfo.image" class="default-img" @click="showImagePicker"></div>
        </div>
        <div class="pop-wrap" v-if="showEditBase">
          <div class="pop-content">
            <el-form>
              <div class="pop-top mar-tb">
                <div class="pop-big-title">{{baseInfo.title}}</div><i class="el-icon-close" @click="closePop('showEditBase')"></i>
              </div>
              <el-form-item label="姓名" label-width="80px">
                <el-input v-model="baseInfo.name"></el-input>
              </el-form-item>
              <el-form-item label="出生日期" label-width="80px">
                <el-date-picker v-model="baseInfo.birth"></el-date-picker>
              </el-form-item>
              <el-form-item label="民族" label-width="80px">
                <el-input v-model="baseInfo.nation"></el-input>
              </el-form-item>
              <el-form-item label="性别" label-width="80px">
                <el-radio-group v-model="baseInfo.gender" @change="changeGender">
                  <el-radio :label=1 >男</el-radio>
                  <el-radio :label=2 >女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="政治面貌" label-width="80px">
                <el-input v-model="baseInfo.political"></el-input>
              </el-form-item>
              <el-form-item label="学历" label-width="80px">
                <el-input v-model="baseInfo.edu"></el-input>
              </el-form-item>
              <el-form-item label="毕业院校" label-width="80px">
                <el-input v-model="baseInfo.school"></el-input>
              </el-form-item>
              <el-form-item label="联系方式" label-width="80px">
                <el-input v-model="baseInfo.contact_way"></el-input>
              </el-form-item>
            </el-form>
            <div class="pop-bottom">
              <el-button type="primary" @click="submitBase">保存信息</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="resume-item" v-for="(item, index) in resume" :key="index" >
      <div class="item-title"><span class="title">{{item.title}}</span><span class="edit pointer" @click="showEdit('showEditItem', index)" v-if="!watchModel">点击编辑</span></div>
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
    <div class="button-wrap" v-if="!watchModel"><span class="button" @click="showEdit('showEditItem')">添加简历信息</span></div>
    <div class="button-wrap" v-if="watchModel"><span class="button" style="margin-right: .5rem" @click="rejectResume">拒绝简历</span><span class="button" @click="passResume">通过简历</span></div>
    <imagePicker @setImage="setImage" @closeImagePicker="closeImagePicker" v-if="imagePickerState"/>
  </div>
</template>

<script>
import { fetchResume, changeBaseInfo, changeResumeImage, deleteResumeItem, changeResume, addResumeItem } from '@/api/personal'
import editInput from './edit_input'
import editArea from './edit_area'
import {autoTextarea} from '@/utils/textAutoHeight'
import {handleText} from '@/utils/handleText'
import imagePicker from '../../../components/imagePicker'
import {passResume, rejectResume} from '@/api/ent'

export default {
  name: 'resume',
  props: ['data'],
  components: {
    editInput,
    editArea,
    imagePicker
  },
  data () {
    return {
      resumeId: 0,
      resume: [],
      baseInfo: {},
      showEditBase: false,
      editItem: {},
      showEditItem: false,
      editIndex: -1,
      imagePickerState: false,
      watchModel: false
    }
  },
  created () {
    if (this.$router.currentRoute.meta.model === 'watch') {
      this.init(this.data)
      this.watchModel = true
    }
    if (!this.resume.length) {
      fetchResume().then(res => {
        if (res.data) {
          this.resumeId = res.data.id
          this.init(res.data)
        }
      })
    } else {
      this.init()
    }
  },
  methods: {
    init (data) {
      let {...dataCopy} = data
      if (!this.baseInfo.id) {
        this.baseInfo = dataCopy.resume[0]
      }
      // dataCopy.resume.splice(0, 1)
      if (!this.resume.length) {
        this.resume = dataCopy.resume.slice(1)
      }
      let a = setInterval(() => {
        if (this.$refs.content) {
          clearInterval(a)
          this.handleContent()
        }
      }, 100)
    },
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
            if (this.$refs.content) {
              resolve()
              clearInterval(a)
            }
          }, 100)
        })
        addEvent.then(() => {
          autoTextarea(this.$refs.text, 5)
        })
      } else {
        this.editIndex = -1
      }
    },
    closePop (param) {
      this[param] = !this[param]
      // this.editIndex = -1
      document.documentElement.style.overflow = 'auto'
    },
    saveContent (param) {
      if (!this.editItem.title || !this.editItem.content) {
        return
      }
      let formData = new FormData()
      formData.append('resumeItem', JSON.stringify({title: this.editItem.title, content: this.editItem.content}))
      //  普通保存
      if (this.editIndex !== -1) {
        formData.append('id', this.editItem.id)
        changeResume(formData).then(res => {
          if (res.data) {
            this.resume[this.editIndex] = res.data
            this.handleContent(this.editIndex)
          }
        })
      } else {
        formData.append('id', this.resumeId)
        addResumeItem(formData).then(res => {
          if (res.data) {
            this.resume.push(res.data)
            let len = this.resume.length - 1
            let a = setInterval(() => {
              if (this.$refs.content[len]) {
                this.handleContent(len)
                clearInterval(a)
              }
            }, 100)
          }
        })
      }
      this.closePop(param)
      this.cleanData()
    },
    deleteItem (param) {
      deleteResumeItem({id: this.editItem.id}).then(res => {
        if (res.data) {
          this.resume.splice(this.editIndex, 1)
          this.closePop(param)
          this.cleanData()
        }
      })
    },
    cleanData () {
      this.editItem = -1
    },
    setImage ([img, file]) {
      let data = new FormData()
      data.append('id', this.baseInfo.id)
      data.append('file', file)
      changeResumeImage(data).then(res => {
        if (res.data) {
          this.baseInfo.image = img.src
        }
      })
      this.baseInfo.image = img.src
    },
    showImagePicker () {
      this.imagePickerState = true
      document.documentElement.style.overflow = 'hidden'
    },
    closeImagePicker () {
      this.imagePickerState = false
      document.documentElement.style.overflow = 'auto'
    },
    submitBase () {
      let formData = new FormData()
      formData.append('id', this.resumeId)
      formData.append('baseinfo', JSON.stringify(this.baseInfo))
      changeBaseInfo(formData).then(res => {
        if (res.data) {
          this.baseInfo = res.data
          this.closePop('showEditBase')
        }
      })
    },
    ObjectToFormData (object) {
      delete object.image
      let formData = new FormData()
      for (let item in object) {
        formData.append(`${item}`, object[item])
      }
      return formData
    },
    rejectResume () {
      let formData = new FormData()
      formData.append('id', this.$store.state.user.userInfo.id)
      formData.append('resume_id', this.data.id)
      formData.append('emp_id', this.data.emp_id)
      rejectResume(formData).then(res => {
        if (!res.data.state) {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.$emit('closePop', {state: 0})
        }
      })
    },
    passResume () {
      let formData = new FormData()
      formData.append('id', this.$store.state.user.userInfo.id)
      formData.append('resume_id', this.data.id)
      formData.append('emp_id', this.data.emp_id)
      passResume(formData).then(res => {
        if (res.data.state) {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.$emit('closePop', {state: 2})
        }
      })
    },
    changeGender (val) {
      this.baseInfo.gender = val
    },
    changeBirth (val) {
      return val.split(' ')[0]
    }
  }
}
</script>

<style lang="scss" scoped>
  .resume-wrap {
    height: auto;
    background: #fff;
    padding: .75rem;
    /*<!--margin-right: -1rem;-->*/
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
        span:nth-child(1) {
          font-weight: bold;
        }
        /*overflow: hidden;*/
        .left-item-title {
          width: fit-content;
        }
      }
    }
    .right {
      display: inline-block;
      width: 30%;
      img {
        cursor: pointer;
        max-width: 6rem;
        max-height: 8rem;
      }
      .default-img {
        cursor: pointer;
        width: 100%;
        height: 100%;
        max-width: 6rem;
        max-height: 8rem;
        background-image: url(../../../assets/default_cover.png);
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
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
