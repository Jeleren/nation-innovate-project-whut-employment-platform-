<template>
  <div class="active-edit-wrap boxShadow">
    <div class="text-wrap" ref="text_wrap">
      <textarea v-model="text" placeholder="编辑个人动态" @focus="edit" @blur="save" ref="text"></textarea>
    </div>
    <div class="button-wrap">
      <div>
        <el-button type="primary" size="mini" class="add-img" @click="triggerInput">添加图片</el-button>
        <div class="pro">
          <el-dropdown>
            <el-button  size="mini"  type="primary">
              职业圈<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
            <el-table
              ref="multipleTable"
              :data="followProsList"
              tooltip-effect="dark"
              style="width: 100%"
              max-height="350"
              @selection-change="selectPro">
              <el-table-column
                type="selection"
                width="30">
              </el-table-column>
              <el-table-column
                label="职业圈"
                width="100">
                <template slot-scope="scope">{{ scope.row.pro }}</template>
              </el-table-column>
            </el-table>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <el-button type="primary" class="submit" @click="submitActive">发布</el-button>
    </div>
    <div class="img-list clear" ref="imgList">
      <div class="top clear"><span class="hint">最多可添加9张图片</span><i class="el-icon-close pointer clear" @click="closeList"></i></div>
      <div class="input-wrap"><input type="file" accept="image/*" multiple class="input" ref="input" @input="setImg"/></div>
      <div class="img-wrap" v-if="imgList.length">
        <div v-for="(item, index) in imgList" :key="index" :style="{'background-image': `url(${item})`}" class="img-item">
          <span class="img-close-wrap"><i class="el-icon-close pointer" @click="deleteImg(index)"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {createImage, postActivity} from '@/api/activities'

export default {
  name: 'active_edit',
  data () {
    return {
      text: '',
      imgList: [],
      selectedPros: []
    }
  },
  computed: {
    followProsList () {
      return this.$store.state.relation.followProsList.followProsList
    }
  },
  mounted () {
    if (!this.followProsList) {
      this.$store.dispatch('getFollowProsList')
    }
    this.autoTextarea(this.$refs.text)
  },
  methods: {
    edit () {
      this.$refs.text_wrap.style.border = '1px solid #3EAAE9'
    },
    save () {
      this.$refs.text_wrap.style.border = '1px solid rgba(187,187,187,1)'
    },
    autoTextarea (elem, extra, maxHeight) {
      extra = extra || 0
      let isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window
      let isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera')
      let addEvent = function (type, callback) {
        elem.addEventListener ? elem.addEventListener(type, callback, false) : elem.attachEvent('on' + type, callback)
      }
      let getStyle = elem.currentStyle ? function (name) {
        let val = elem.currentStyle[name]
        if (name === 'height' && val.search(/px/i) !== 1) {
          var rect = elem.getBoundingClientRect()
          return rect.bottom - rect.top -
            parseFloat(getStyle('paddingTop')) -
            parseFloat(getStyle('paddingBottom')) + 'px'
        }
        return val
      } : function (name) {
        return getComputedStyle(elem, null)[name]
      }
      let minHeight = parseFloat(getStyle('height'))
      elem.style.resize = 'none'
      var change = function (e) {
        // console.log(e)
        let scrollTop
        let height
        let padding = 0
        let style = elem.style
        if (elem._length === elem.value.length) return
        // console.log(elem.scrollHeight)
        elem._length = elem.value.length
        if (!isFirefox && !isOpera) {
          padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'))
        }
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        elem.style.height = minHeight + 'px'
        if (elem.scrollHeight > minHeight) {
          if (maxHeight && elem.scrollHeight > maxHeight) {
            height = maxHeight - padding
            style.overflowY = 'auto'
          } else {
            height = elem.scrollHeight - padding
            style.overflowY = 'hidden'
          }
          style.height = height + extra + 'px'
          scrollTop += parseInt(style.height) - elem.currHeight
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          elem.currHeight = parseInt(style.height)
        }
      }
      addEvent('propertychange', change)
      addEvent('input', change)
      addEvent('focus', change)
      change()
    },
    triggerInput () {
      this.$refs.input.click()
    },
    closeList () {
      this.$refs.imgList.style.display = 'none'
      this.imgList = []
    },
    setImg (e) {
      this.$refs.imgList.style.display = 'block'
      let fileList = e.target.files
      if (this.imgList.length + fileList.length < 10) {
        for (let item of fileList) {
          let reader = new FileReader()
          reader.readAsDataURL(item)
          let _this = this
          reader.onload = function () {
            try {
              _this.imgList.push(reader.result)
            } catch (e) {
              // console.log(e)
            }
          }
        }
      } else {
        this.$message({
          message: '图片总数量不超过9张',
          type: 'error'
        })
      }
    },
    deleteImg (index) {
      this.imgList.splice(index, 1)
    },
    submitActive () {
      if (!this.text) {
        return
      }
      if (!this.selectedPros.length) {
        this.$message({
          message: '请选择职业圈'
        })
        return
      }
      let idList = this.selectedPros.map(item => { return item.id })
      let formData = new FormData()
      formData.append('id', this.$store.state.user.userInfo.id)
      formData.append('type', 2)
      formData.append('activity', JSON.stringify({pros_id: idList, text: this.text}))
      postActivity(formData).then(res => {
        let activity = res.data.id
        if (res.data) {
          this.$store.commit('ADD_ACTIVE_ITEM', res.data)
        }
        let imgLength = this.imgList.length
        if (imgLength) {
          let files = this.$refs.input.files
          for (let i = 0; i < imgLength; i++) {
            let data = new FormData()
            data.append('image', files[0])
            data.append('activity', activity)
            createImage(data).then(res => {
              if (res.data.image) {
                this.closeList()
                this.text = ''
                this.$message({
                  message: '发布成功',
                  type: 'success'
                })
              }
            })
          }
        } else {
          this.text = ''
        }
      })
    },
    handleClose (index) {
      this.selectedPros.splice(index, 1)
    },
    selectPro (pro) {
      this.selectedPros = pro
    }
  }
}
</script>

<style lang="scss" scoped>
  .active-edit-wrap {
    background: #fff;
    padding: .625rem .7rem;
    margin-bottom: .5rem;
    .text-wrap {
      border: 1px solid rgba(187,187,187,1);
      padding: .2rem .2rem;
      min-height: 3.5rem;
      textarea {
        font-size: .6rem;
        width: 100%;
        resize: none;
        height: 100%;
        overflow: hidden;
        /*overflow-wrap: break-spaces;*/
        -ms-word-break: break-all;
        word-break: break-all;
        margin: 0;
        padding: 0;
        letter-spacing: 0;
        vertical-align: top;
      }
    }
    .button-wrap {
      font-size: .6rem;
      display: flex;
      justify-content: space-between;
      /*height: 1.2rem;*/
      margin-top: .4rem;
      line-height: 1.2rem;
      margin-bottom: .2rem;
      .add-img {
        /*padding: 0 .2rem;*/
        /*border: 1px solid #ececec;*/
        display: inline-block;
        /*line-height: 1.2rem;*/
      }
      .pro {
        display: inline-block;
      }
      .submit {
        padding: 0 .5rem;
        border-radius: 3px;
      }
    }
    .img-list {
      display: none;
      background: aliceblue;
      padding: .2rem;
      .input-wrap {
        .input {
          display: none;
        }
      }
      .top {
        position: relative;
        height: auto;
        line-height: 100%;
        .hint {
          font-size: .6rem;
          color: lightblue;
          /*line-height: 100%;*/
          vertical-align: top;
        }
        i {
          float: right;
        }
      }
      .img-wrap {
        display: flex;
        flex-wrap: wrap;
        /*padding: .2rem;*/
        .img-item {
          position: relative;
          width: 3rem;
          height: 3rem;
          background-position: center;
          -webkit-background-size: cover;
          background-size: cover;
          border: 1px solid #ececec;
          margin: .1rem;
          .img-close-wrap {
            position: absolute;
            right: 0;
            top: 0;
            display: inline-block;
            background: #696969;
            color: #fff;
          }
        }
      }

    }

  }
</style>
