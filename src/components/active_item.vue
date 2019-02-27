<template>
  <div class="item-wrap" ref="item">
    <div class="top">
      <div class="item-left-wrap">
        <span class="user-image pointer" :style="{'background-image':`url(${item.userInfo.head}`}" @click="goUserPersonal"></span>
        <div class="name-wrap">
          <div class="user-name">{{item.userInfo.username}}</div>
          <div class="act-time">{{item.time}}</div>
        </div>
      </div>
      <!--v-if="$store.state.user.userInfo.id === item.userInfo.id"-->
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.stop="editActivity">编辑</el-dropdown-item>
          <el-dropdown-item @click.native="deleteActivity">删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="active-content">
      <span ref="content"></span><span v-if="content.fold&&content.over">...</span>
      <span class="hint-word" @click="showAllContent" v-if="content.over&&content.fold">展开全文<i class="el-icon-arrow-down"></i></span>
      <span class="hint-word" @click="hideAllContent" v-if="!content.fold">收起全文<i class="el-icon-arrow-up"></i></span>
    </div>
    <div class="image-wrap">
      <div class="image-group" v-if="imageGroup">
        <div class="image-item" v-for="(img, index) in item.image_group" :key="index" :style="{'background-image': `url(${img.url})`}" @click="showDisplay(index)"></div>
      </div>
      <div class="img-display" v-if="!imageGroup">
        <div class="display-wrap" @mousemove="onImg" ref="cursor" @click="changeShow()">
          <img class="show-item" :src="show_item.url" />
        </div>
        <div class="list-wrap">
          <div class="img-list-item" :class="{'active-img': index === show_item.index}" v-for="(img, index) in item.image_group" :key="index" :style="{'background-image': `url(${img.url})`}"
               @click="changeItem(index)"></div>
        </div>
      </div>
    </div>
    <div class="bottom-handle">
      <div class="handle-item"><span v-if="!item.isCollect"  @click="doCollect"><i class="icon-unCollect"></i>收藏</span><span v-if="item.isCollect" @click="cancelCollect"><i class="icon-collect"></i>已收藏</span></div>
      <div class="handle-item border-left" @click="showComment"><i class="icon-comment"></i>{{item.commentList.length}}</div>
      <div class="handle-item border-left" @click="changeLike"><span v-if="!item.isLike"><i class="icon-unLike"></i></span><span v-if="item.isLike"><i class="icon-like"></i></span>{{item.likeNum}}</div>
    </div>
    <div class="comment" v-if="isShowComment">
      <div class="top-comment clear">
        <div class="user-image" :style="{'background-image': `url(${$store.state.user.userInfo.head})`}"></div>
        <textarea ref="text" class="textarea" rows="1" v-model="comment"></textarea>
        <div class="button" @click="submitComment">评论</div>
      </div>
      <div class="comment-list-wrap">
        <div class="comment-item" v-for="(item, index) in item.commentList" :key="index">
          <div class="user-image" :style="{'background-image': `url(${item.userInfo.head})`}"></div>
          <div class="comment-content">
            <div class="user-name">{{item.userInfo.username}}</div>
            <span>{{item.text}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { autoTextarea } from '../utils/textAutoHeight'
import { handleText } from '@/utils/handleText'
import {cancelCollectActivity, collectActivity, deleteActivity, commentActivity, likeActivity, cancelLikeActivity} from '@/api/activities'

export default {
  name: 'active_item',
  props: ['item', 'index'],
  data () {
    return {
      imageGroup: true,
      show_item: {},
      action: '',
      offsetTop: 0,
      scrollTop: 0,
      content: {
        over: false,
        fold: true
      },
      comment: '',
      isShowComment: false
    }
  },
  computed: {
    // foldContent () {
    //   if (this.item.content.length > 100) {
    //     this.isFold = true
    //     return this.item.content.substring(0, 100)
    //   } else return this.item.content
    // }
  },
  mounted () {
    if (this.item.text.length > 150) {
      this.content.over = true
      this.$refs.content.innerHTML = handleText(`${this.item.text.substr(0, 150)}`)
    } else {
      this.$refs.content.innerHTML = handleText(`${this.item.text}`)
    }
  },
  methods: {
    showDisplay (index) {
      this.changeItem(index)
      this.imageGroup = !this.imageGroup
    },
    changeShow () {
      let index = this.show_item.index
      let len = this.item.image_group.length - 1
      switch (this.action) {
        case 'left': {
          if (this.show_item.index === 0) {
            this.changeItem(len)
          } else {
            this.changeItem(index - 1)
          }
          break
        }
        case 'right': {
          if (this.show_item.index === len) {
            this.changeItem(0)
          } else {
            this.changeItem(index + 1)
          }
          break
        }
        case 'small': {
          this.showDisplay(index)
          break
        }
      }
      this.setTop()
    },
    // change the display item
    changeItem (index) {
      this.show_item = this.item.image_group[index]
      this.show_item.index = index
      this.setTop()
    },
    setTop () {
      if (this.scrollTop > this.offsetTop) {
        window.scrollTo(0, this.offsetTop)
      }
    },
    onImg (e) {
      // console.log(e)
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      this.offsetTop = e.target.offsetTop
      let width = e.srcElement.offsetWidth
      if (e.srcElement.childNodes.length) {
        let limit1 = width / 3
        let limit2 = limit1 * 2
        if (e.offsetX < limit1) {
          this.setLeftCursor()
        }
        if (e.offsetX > limit2) {
          this.setRightCursor()
        }
      } else {
        let parentWidth = e.srcElement.parentNode.offsetWidth
        if (width > parentWidth / 3) {
          let limit1 = parentWidth / 3
          let limit2 = limit1 * 2
          let overWidth = (parentWidth - width) / 2
          if (e.offsetX < limit1 - overWidth) {
            this.setLeftCursor()
          } else if (e.offsetX > limit2 - overWidth) {
            this.setRightCursor()
          } else {
            this.setSmallCursor()
          }
        }
      }
    },
    setLeftCursor () {
      this.action = 'left'
      this.$refs.cursor.style.cursor = 'url(https://img.t.sinajs.cn/t6/style/images/common/pic_prev.cur), auto'
    },
    setRightCursor () {
      this.action = 'right'
      this.$refs.cursor.style.cursor = 'url(https://img.t.sinajs.cn/t6/style/images/common/pic_next.cur), auto'
    },
    setSmallCursor: function () {
      this.action = 'small'
      this.$refs.cursor.style.cursor = 'url(https://img.t.sinajs.cn/t6/style/images/common/small.cur), auto'
    },
    showAllContent () {
      this.content.fold = !this.content.fold
      this.$refs.content.innerHTML = this.item.text
    },
    hideAllContent () {
      this.content.fold = !this.content.fold
      this.$refs.content.innerHTML = this.item.text.substring(0, 150)
    },
    handleContent (content) {
      if (content.length > 150) {
        this.contentOver.state = true
        return content.substr(0, 150)
      }
    },
    showComment () {
      this.isShowComment = !this.isShowComment
      if (this.isShowComment) {
        let addEvent = new Promise((resolve, reject) => {
          let a = setInterval(() => {
            if (this.$refs.text) {
              resolve()
              clearInterval(a)
            }
          }, 100)
        })
        addEvent.then(() => {
          autoTextarea(this.$refs.text, 10)
        })
      }
    },
    doCollect () {
      let data = {}
      data.user_id = this.$store.state.user.userInfo.id
      data.activity_id = this.item.id
      collectActivity(data).then(res => {
        console.log(res)
        if (res.data) {
          this.item.isCollect = res.data.isCollect
        }
      })
    },
    cancelCollect () {
      let data = {}
      data.user_id = this.$store.state.user.userInfo.id
      data.activity_id = this.item.id
      cancelCollectActivity(data).then(res => {
        if (res.data) {
          this.item.isCollect = res.data.isCollect
        }
      })
    },
    goUserPersonal () {
      let href = this.$router.resolve({
        path: `/personal/${this.item.userInfo.id}`,
        meta: 'new'
      })
      window.open(href.href, '_blank')
    },
    editActivity () {},
    deleteActivity () {
      let data = {}
      data.user_id = this.$store.state.user.userInfo.id
      data.activity_id = this.item.id
      deleteActivity(data).then(res => {
        if (res.data) {
          this.$store.commit('DELETE_ACTIVE_ITEM', {index: this.index})
        }
      })
    },
    submitComment () {
      let data = {}
      data.user_id = this.$store.state.user.userInfo.id
      data.activity_id = this.item.id
      data.text = this.comment
      commentActivity(data).then(res => {
        if (res.data) {
          this.item.commentList.splice(0, 0, res.data.comment)
          this.comment = ''
        }
      })
    },
    changeLike () {
      let data = {}
      data.user_id = this.$store.state.user.userInfo.id
      data.activity_id = this.item.id
      if (this.item.isLike) {
        cancelLikeActivity(data).then(res => {
          if (res.data) {
            this.item.isLike = res.data.isLike
            this.item.likeNum--
          }
        })
      } else {
        likeActivity(data).then(res => {
          if (res.data) {
            this.item.isLike = res.data.isLike
            this.item.likeNum++
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item-wrap {
  height: auto;
  padding: .7rem .7rem 0 .7rem;
  border-bottom: 5px solid #ececec;
  .top {
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    .el-dropdown {
      height: .3rem;
    }
    .item-left-wrap {
      display: flex;
      .user-image {
        display: inline-block;
        width: 2.5rem;
        height: 2.5rem;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }
      .name-wrap {
        padding: .3rem 0;
        margin-left: .5rem;
        font-size: .6rem;
        .user-name {
          margin-bottom: .4rem;
        }
      }
    }
    .user-name {
      font-size: .6rem;
      font-weight: bold;
    }
  }
  .active-content {
    font-size: .6rem;
    margin-left: 3rem;
    line-height: 1rem;
    margin-bottom: .2rem;
  }
  .image-wrap {
    .image-group {
      margin-left: 3rem;
      position: relative;
      padding-bottom: .7rem;
      .image-item {
        display: inline-block;
        cursor: url(https://img.t.sinajs.cn/t6/style/images/common/big.cur), auto;
        width: 5rem;
        height: 5rem;
        margin-right: .25rem;
        overflow: hidden;
        background-size: cover;
        background-position: center;
      }
    }
    .img-display {
      padding: .2rem .5rem .2rem 3rem;
      background-color: #f2f2f5;
      margin: 0 -.7rem;
      box-sizing: content-box;
      .display-wrap {
        text-align: center;
        .show-item {
          max-width: 100%;
        }
      }
      .list-wrap {
        height: 2rem;
        background-color: #f2f2f5;
        .img-list-item {
          display: inline-block;
          height: 100%;
          width: 2rem;
          background-size: cover;
          background-position: top;
          margin-right: .1rem;
          cursor: pointer;
        }
        .active-img {
          border: 1px solid #6BD9F2;
        }
      }
    }
  }
  .bottom-handle {
    height: 1.5rem;
    display: flex;
    border-top: 1px solid #ececec;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    margin: 0 -.7rem;
    line-height: 100%;
    font-size: .6rem;
    .handle-item {
      display: inline-block;
      width: 33%;
      text-align: center;
      line-height: 1.5rem;
      /*height: 1rem;*/
      /*margin: .2rem 0;*/
      cursor: pointer;
      &:hover {
        color: #3EAAE9;
      }
    }
    .border-left {
      border-left: 1px solid #ececec;
    }
  }
  .comment {
    background-color: #f2f2f5;
    margin: 0 -.7rem;
    padding: .7rem;
    font-size: .6rem;
    /*display: none;*/
    .user-image {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      background-position: center;
      -webkit-background-size: cover;
      background-size: cover;
      margin-right: .1rem;
      vertical-align: top;
    }
    .top-comment {
      margin-bottom: .4rem;
      textarea {
        width: 20rem;
        resize: none;
        min-height: 1.5rem;
        overflow: hidden;
        border: 1px solid #cecece;
        padding: .3rem .2rem .2rem .3rem;
      }
      .button {
        margin-top: .2rem;
        padding: .2rem .5rem;
        float: right;
      }
    }
    .comment-list-wrap {
      .comment-item {
        display: flex;
        border-top: 1px solid #ececec;
        padding: .3rem 0;
        .comment-content {
          display: flex;
          flex-direction: column;
          width: 20rem;
          vertical-align: top;
          margin-left: .3rem;
          word-break: break-all;
          .user-name {
            color: #3EAAE9;
          }
        }
      }
    }
  }
}
// icon style
[class^='icon']{
  //line-height: 1.5rem;
  margin: 0 .2rem .1rem;
  vertical-align: middle;
  background-size: cover;
  height: .8rem;
  width: .8rem;
}
.icon-unCollect {
  background-image: url(../assets/unCollect.svg);
  &:hover{
    background-image: url(../assets/isCollect.svg);
  }
}
.icon-collect {
  background-image: url(../assets/isCollect.svg);
}
.icon-comment{
  background-image: url(../assets/unComment.svg);
  &:hover{
    background-image: url(../assets/isComment.svg);
  }
}
.icon-unLike {
  background-image: url(../assets/unLike.svg);
  &:hover{
    background-image: url(../assets/isLike.svg);
  }
}
.icon-like{
  background-image: url(../assets/isLike.svg);
}

</style>
