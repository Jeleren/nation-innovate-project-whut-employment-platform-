<template>
  <div class="emp-edit">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="招聘职位">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="开始时间">
        <el-col :span="13">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.startDate" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="结束时间">
        <el-col :span="13">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.endDate" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="招聘状态">
        <el-switch v-model="form.status"></el-switch>
      </el-form-item>
      <el-form-item label="招聘内容">
        <el-input type="textarea" ref="text" v-model="form.text"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {autoTextarea} from '@/utils/textAutoHeight'
import {changeActivity} from '@/api/activities'

export default {
  name: 'emp_edit',
  props: ['data'],
  data () {
    return {
      form: {
        title: '',
        startDate: '',
        endDate: '',
        status: '',
        text: ''
      }
    }
  },
  mounted () {
    // this.$refs.text.$el.children[0].click()
    if (this.data.title) {
      this.form = this.data
    }
  },
  updated () {
    autoTextarea(this.$refs.text.$el.children[0], 10)
  },
  methods: {
    onSubmit () {
      changeActivity(this.form).then(res => {
        if (res.data) {
          this.$emit('closePop', res.data)
        }
      })
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
</style>
