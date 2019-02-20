<template>
  <div class="active-edit-wrap boxShadow">
    <div class="text-wrap" ref="text_wrap">
      <textarea v-model="content" placeholder="编辑个人动态" @focus="edit" @blur="save" ref="text"></textarea>
    </div>
    <div class="button-wrap">
      <div class="add-img pointer" @click="triggerInput">添加图片</div>
      <div class="submit button" @click="submitActive">发布</div>
    </div>
    <div class="img-list clear" ref="img_list">
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
export default {
  name: 'active_edit',
  data () {
    return {
      content: '',
      // compRows: {
      //   fontSize: 0,
      //   preLen: 0,
      //   selectionStart: 0,
      //   selectionEnd: 0,
      //   curRows: 0,
      //   preRows: 0,
      //   curRowLen: 0,
      //   clientWidth: 0,
      //   initRows: 0,
      //   basicState: false,
      //   over: false,
      //   contentList: []
      // },
      imgList: []
    }
  },
  mounted () {
    this.autoTextarea(this.$refs.text)
  },
  methods: {
    edit () {
      this.$refs.text_wrap.style.border = '1px solid #3EAAE9'
    },
    save () {
      this.$refs.text_wrap.style.border = '1px solid rgba(187,187,187,1)'
    },
    // editing (e) {
    //   console.log(e.target.value)
    // if (e.isTrusted) {
    //   console.log(e, e.target.selectionStart, e.target.selectionEnd)
    //
    //   //  获取元素基本数据
    //   if (!this.compRows.basicState) {
    //     if (!this.compRows.fontSize) {
    //       this.compRows.fontSize = parseFloat(window.getComputedStyle(this.$refs.text).fontSize)
    //     }
    //     this.compRows.clientWidth = e.target.clientWidth
    //     this.compRows.initRows = e.target.rows
    //     this.compRows.basicState = true
    //   }
    //   //  检测行数是否有变化
    //   this.compRows.preRows = this.compRows.curRows
    //   //  设置内容索引
    //   if (e.target.selectionStart !== this.compRows.selectionStart) this.compRows.selectionEnd = e.target.selectionStart
    //   //  输入
    //   if (e.isComposing) {
    //     // if (e.target.textLength ===)
    //     //  对输入进行过滤，确定输入内容
    //     // let curStr = this.content.substring(this.compRows.preLen, this.content.length)
    //     let curStr = e.data || ''
    //     console.log(curStr)
    //     this.compRows.preLen = this.content.length
    //     if (curStr.length) {
    //       // console.log('handle')
    //       this.handleContent(curStr)
    //     } else {
    //       return
    //     }
    //     if (this.compRows.preRows !== this.compRows.curRows) {
    //       e.srcElement.rows++
    //       //  一次输入的文字存在于两行
    //       let wordLen = curStr.length - Math.ceil(this.compRows.curRowLen / this.compRows.fontSize)
    //       console.log('word length', wordLen)
    //       let str1 = curStr.substring(0, wordLen)
    //       let str2 = curStr.substring(wordLen)
    //       this.compRows.contentList[this.compRows.preRows] = `${this.compRows.contentList[this.compRows.preRows] || ''}${str1}`
    //       this.compRows.contentList[this.compRows.curRows] = str2
    //     } else {
    //       this.compRows.contentList[this.compRows.preRows] = `${this.compRows.contentList[this.compRows.preRows] || ''}${curStr}`
    //       console.log(this.compRows.contentList)
    //     }
    //   } else { //  删除
    //     if (this.compRows.curRowLen === 0) {
    //       console.log('decrement')
    //       e.target.rows--
    //     }
    //   }
    // }
    // },
    // handleContent (str) {
    //   //  中文，中文符号正则字面量
    //   // let chineseReg = /[^\x00-\xff]/g
    //   let chineseReg = ''
    //   //  中间的 | 两侧不能有空格
    //   let enterReg = /(\r\n)|(\n)/g
    //   // console.log(enterReg.test(str))
    //   if (enterReg.test(str)) {
    //     // console.log(enterReg.test(str))
    //     this.compRows.curRows++
    //     console.log('rows change')
    //     this.compRows.curRowLen = 0
    //   } else {
    //     let CHN = str.match(chineseReg)
    //     if (CHN) {
    //       this.compRows.curRowLen += CHN.length * this.compRows.fontSize
    //       console.log(str.match(chineseReg).length)
    //       var unCHNLen = str.length - CHN.length
    //     } else {
    //       this.compRows.curRowLen += str.length * this.compRows.fontSize / 2
    //     }
    //     if (unCHNLen) {
    //       this.compRows.curRowLen += unCHNLen * this.compRows.fontSize / 2
    //     }
    //     let separation = this.compRows.curRowLen - this.compRows.clientWidth
    //     if (separation >= 0) {
    //       this.compRows.curRows++
    //       this.compRows.curRowLen = separation
    //     }
    //   }
    // },
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
        console.log(e)
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
      this.$refs.img_list.style.display = 'none'
      this.imgList = []
    },
    setImg (e) {
      this.$refs.img_list.style.display = 'block'
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
              console.log(e)
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
      let item = {id: 2, userInfo: {username: 'aa', user_image: ''}, time: 'ad', content: `${this.content}`}
      this.$store.commit('ADD_ACTIVE_ITEM', item)
      console.log(item)
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
      height: 1.2rem;
      margin-top: .4rem;
      line-height: 1.2rem;
      margin-bottom: .2rem;
      .add-img {
        padding: 0 .2rem;
        border: 1px solid #ececec;
        /*line-height: 1.2rem;*/
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
            width: 1rem;
            height: 1rem;
            background: #696969;
            color: #fff;
            /*i {*/
            /*display: inline-block;*/
            /*height: 50%;*/
            /*width: 50%;*/
            /*}*/
          }
        }
      }

    }

  }
</style>
