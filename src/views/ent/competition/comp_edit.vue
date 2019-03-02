<template>
  <div class="emp-edit">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="比赛名称">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="开始时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.startDate" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="结束时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.endDate" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="比赛状态">
        <el-switch v-model="form.state"></el-switch>
      </el-form-item>
      <el-form-item label="比赛内容">
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
import {postActivity} from '@/api/activities'

export default {
  name: 'comp_edit',
  data () {
    return {
      form: {
        title: '',
        startDate: '',
        endDate: '',
        state: '',
        text: ''
      }
    }
  },
  mounted () {
    autoTextarea(this.$refs.text.$el.children[0], 10)
  },
  methods: {
    onSubmit () {
      if (this.form.title && this.form.text) {
        postActivity(this.form).then(res => {
          if (res.data) {
            this.$message({
              message: '发布成功',
              type: 'success'
            })
            this.cleanObject(this.form)
          }
        })
      }
    },
    cleanObject (object) {
      for (let item in object) {
        object[item] = ''
      }
    }
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
</style>
