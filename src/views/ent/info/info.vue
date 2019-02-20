<template>
  <div class="emp-edit">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="组织名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="textarea" ref="text" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <img :src="$store.state.user.userInfo.user_image" title="点击修改头像" @click="changeImage"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
    <!--<imagePicker/>-->
  </div>
</template>

<script>
import {autoTextarea} from '@/utils/textAutoHeight'
import imagePicker from '../../../components/imagePicker'

export default {
  name: 'info',
  components: {
    imagePicker
  },
  data () {
    return {
      form: {
        name: this.$store.state.user.userInfo.username,
        desc: ''
      }
    }
  },
  mounted () {
    autoTextarea(this.$refs.text.$el.children[0], 10)
  },
  methods: {
    onSubmit () {},
    changeImage () {}
  }
}
</script>

<style scoped>
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
</style>
