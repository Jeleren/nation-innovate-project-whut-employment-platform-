<template>
  <div class="emp-edit">
    <el-form ref="form" :model="form" label-width="90px">
      <el-form-item label="招聘职位">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="目标职业圈">
        <el-dropdown>
          <el-button  size="mini">
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
import {changeActivity, postActivity} from '@/api/activities'

export default {
  name: 'emp_edit',
  props: ['data'],
  data () {
    return {
      form: {
        title: '',
        startDate: '',
        endDate: '',
        text: ''
      },
      prosList: []
    }
  },
  computed: {
    followProsList () {
      return this.$store.state.relation.followProsList.followProsList
    }
  },
  mounted () {
    autoTextarea(this.$refs.text.$el.children[0], 10)
    if (this.data) {
      if (this.data.title) {
        this.form = this.data
      }
    }
  },
  created () {
    if (!this.followProsList.length) {
      this.$store.dispatch('getFollowProsList', {num: 100})
    }
  },
  updated () {
    autoTextarea(this.$refs.text.$el.children[0], 10)
  },
  methods: {
    onSubmit () {
      if (this.data) {
        let data = new FormData()
        let params = {title: this.form.title, text: this.form.text, startDate: this.form.startDate, endDate: this.form.endDate}
        if (this.prosList.length) {
          params.pros_id = this.prosList.map(item => { return item.id })
        }
        data.append('id', this.$store.state.user.userInfo.id)
        data.append('active_id', this.data.id)
        data.append('change', JSON.stringify(params))
        changeActivity(data).then(res => {
          if (res.data) {
            this.$emit('closePop', res.data)
          }
        })
      } else {
        if (this.form.title && this.form.text) {
          let idList = this.prosList.map(item => { return item.id })
          let data = new FormData()
          data.append('id', this.$store.state.user.userInfo.id)
          data.append('type', 4)
          data.append('activity', JSON.stringify({pros_id: idList, title: this.form.title, text: this.form.text, startDate: this.form.startDate, endDate: this.form.endDate}))
          postActivity(data).then(res => {
            if (res.data) {
              this.$message({
                message: '发布成功',
                type: 'success'
              })
              this.cleanObject(this.form)
            }
          })
        }
      }
    },
    cleanObject (object) {
      for (let item in object) {
        object[item] = ''
      }
    },
    selectPro (pro) {
      this.prosList = pro
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
    padding: .5rem 1rem .5rem .5rem;
  }
</style>
