<template>
  <div class="emp-edit">
    <el-form ref="form" :model="form" label-width="90px">
      <el-form-item label="比赛名称">
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
      <el-form-item
        label="开始时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.startDate" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="结束时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.endDate" style="width: 100%;"></el-date-picker>
        </el-col>
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
        text: ''
      },
      prosList: []
    }
  },
  computed: {
    followProsList () {
      return this.$store.state.relation.followProsList
    }
  },
  created () {
    if (!this.followProsList.length) {
      this.$store.dispatch('getFollowProsList', {num: 100})
    }
  },
  mounted () {
    autoTextarea(this.$refs.text.$el.children[0], 10)
  },
  methods: {
    onSubmit () {
      if (this.form.title && this.form.text) {
        let idList = this.prosList.map(item => { return item.id })
        let data = new FormData()
        data.append('id', this.$store.state.user.userInfo.id)
        data.append('type', 1)
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

<style scoped>
  .emp-edit {
    width: 100%;
    background: #fff;
    font-size: .7rem;
    font-weight: bold;
    padding: .5rem;
  }
</style>
