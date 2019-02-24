<template>
  <div class="left-wrap">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="头像">
        <img :src="form.head" @click="showImagePicker"/>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="textarea" ref="text" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
    <imagePicker @setImage="setImage" @closeImagePicker="closeImagePicker" v-if="imagePickerState"/>
  </div>
</template>

<script>
import {autoTextarea} from '@/utils/textAutoHeight'
import imagePicker from '../../components/imagePicker'
import {apiChangeUserInfo} from '@/api/user'

export default {
  name: 'info',
  components: {
    imagePicker
  },
  data () {
    return {
      form: {},
      imagePickerState: false
    }
  },
  mounted () {
    autoTextarea(this.$refs.text.$el.children[0], 10)
    this.form = this.$store.state.user.userInfo
  },
  methods: {
    onSubmit () {
      apiChangeUserInfo(this.$store.state.user.userInfo.user_id, this.form)
    },
    setImage (img) {
      this.form.head = img.src
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

<style scoped>
  .left-wrap {
    background: #fff;
    font-size: .7rem;
    font-weight: bold;
    padding: 1rem .7rem .5rem 0;
  }
  img {
    cursor: pointer;
    width: 10rem;
    height: 10rem;
  }
</style>
