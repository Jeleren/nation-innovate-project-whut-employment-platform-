<template>
  <div class="emp-edit">
    <el-collapse v-model="activeName" accordion @change="collapseChange">
      <el-collapse-item title="个人信息" name="1" >
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="简介">
            <el-input type="textarea" ref="text" v-model="form.text"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <img :src="form.head" title="点击修改头像" @click="changeImage"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item :title="`关注职业圈(${followProsList.num})`" name="2">
        <relationFilter type="followPros" :pageNum="followProsList.num">
          <div class="follow-wrap">
            <div class="follow-item" v-for="(item, index) in followProsList.followProsList" :key="index">
              <img :src="item.head"/>
              <div class="item-right-wrap">
                <div class="name">{{item.pro}}</div>
                <el-button size="small" @click="changeFollowPros(item)">
                  <span v-if="item.isFollow" >已关注</span>
                  <span v-if="!item.isFollow">+关注</span>
                </el-button>
              </div>
            </div>
          </div>
        </relationFilter>
      </el-collapse-item>
      <el-collapse-item :title="`推荐职业圈(${recProsList.num})`" name="3">
        <relationFilter type="recPros" :pageNum="recProsList.num">
          <div class="follow-wrap">
            <div class="follow-item" v-for="(item, index) in recProsList.recList" :key="index">
              <img :src="item.head"/>
              <div class="item-right-wrap">
                <div class="name">{{item.pro}}</div>
                <el-button size="small" @click="changeFollowPros(item)">
                  <span v-if="item.isFollow" >已关注</span>
                  <span v-if="!item.isFollow">+关注</span>
                </el-button>
              </div>
            </div>
          </div>
        </relationFilter>
      </el-collapse-item>
      <el-collapse-item title="关注用户" name="4">
        <relationFilter type="follow">
          <div class="follow-wrap" v-if="followList.length">
            <div class="follow-item" v-for="(item, index) in followList" :key="index">
              <img :src="item.head"/>
              <div class="item-right-wrap">
                <div class="name">{{item.username}}</div>
                <div class="desc">{{item.text}}</div>
                <div class="button" @click="changeFollow(item)">
                  <span v-if="item.isFollow" >已关注</span>
                  <span v-if="!item.isFollow">+关注</span>
                </div>
              </div>
            </div>
          </div>
        </relationFilter>
      </el-collapse-item>
    </el-collapse>
    <imagePicker @setImage="setImage" @closeImagePicker="closeImagePicker" v-if="imagePickerState"/>
  </div>
</template>

<script>
import {autoTextarea} from '@/utils/textAutoHeight'
import imagePicker from '../../../components/imagePicker'
import {relation} from '@/utils/handleRelation'
import relationFilter from '../../../components/filter/filter_relation'

export default {
  name: 'info',
  components: {
    imagePicker,
    relationFilter
  },
  data () {
    return {
      file: '',
      imagePickerState: false,
      activeName: '1'
    }
  },
  computed: {
    form () {
      return this.$store.state.user.userInfo
    },
    followProsList () {
      return this.$store.state.relation.followProsList
    },
    recProsList () {
      return this.$store.state.relation.recProsList
    },
    followList () {
      return this.$store.state.relation.followList
    }
  },
  mounted () {
    autoTextarea(this.$refs.text.$el.children[0], 10)
  },
  methods: {
    onSubmit () {
      let formData = new FormData()
      formData.append('id', this.$store.state.user.userInfo.id)
      if (this.file) {
        formData.append('image', this.file)
      }
      formData.append('userInfo', JSON.stringify({ username: this.form.username, desc: this.form.text }))
      this.$store.dispatch('changeUserInfo', formData).then(res => {
        this.$message({
          message: '保存成功',
          type: 'success'
        })
      })
    },
    changeImage () {
      this.imagePickerState = !this.imagePickerState
      document.documentElement.style.overflow = 'hidden'
    },
    setImage ([img, file]) {
      this.form.head = img.src
      this.file = file
    },
    closeImagePicker () {
      this.imagePickerState = false
      document.documentElement.style.overflow = 'auto'
    },
    changeFollowPros (item) {
      relation.changeFollowPros(item)
    },
    changeFollow (item) {
      relation.changeFollow(item)
    },
    collapseChange (val) {
      switch (val) {
        case '1': {
          break
        }
        case '2': {
          this.$store.dispatch('getFollowProsList', {num: 10})
          break
        }
        case '3': {
          this.$store.dispatch('getRecProsList', {num: 10})
          break
        }
        case '4': {
          this.$store.dispatch('getFollowList', {num: 10})
          break
        }
      }
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
  .emp-edit {
    width: 100%;
    background: #fff;
    font-size: .7rem;
    font-weight: bold;
    padding: .5rem;
  }
  img {
    max-width: 6rem;
    max-height: 8rem;
    cursor: pointer;
  }
  .follow-wrap {
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: .5rem;
    overflow: hidden;
    .follow-item {
      display: flex;
      align-items: center;
      width: 10.9rem;
      background: #f2f2f5;
      margin-bottom: .5rem;
      overflow: hidden;
      border-radius: 5px;
      img {
        width: 2.5rem;
        height: 2.5rem;
        min-width: 2.5rem;
        border-radius: 50%;
        margin: 0 .5rem;
      }
      .item-right-wrap {
        /*display: flex;*/
        /*flex-direction: column;*/
        overflow: hidden;
        padding: .3rem .2rem;
        .name {
          font: .7rem bold;
          margin-bottom: .2rem;
        }
        .desc {
          font-size: .5rem;
          /*white-space: nowrap;*/
          overflow: hidden;
          margin-bottom: .2rem;
        }
        /*.button {*/
        /*height: 1rem;*/
        /*width: 2rem;*/
        /*border*/
        /*}*/
      }
    }
  }
</style>
