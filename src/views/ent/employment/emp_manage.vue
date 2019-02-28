<template>
  <div>
    <el-table v-if="empList.length"
      :data="empList.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="招聘职位"
        prop="title">
      </el-table-column>
      <el-table-column
        label="招聘截止时间"
        prop="endDate">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"></el-input>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <popEdit :data="editItem" v-if="editItem.title" @closePop="closeEdit"/>
  </div>
</template>

<script>
import {deleteActivity, getActivity} from '@/api/activities'
import popEdit from '../popEdit'

export default {
  name: 'emp_manage',
  components: {
    popEdit
  },
  data () {
    return {
      empList: [],
      search: '',
      editItem: {},
      editIndex: -1
    }
  },
  created () {
    if (!this.empList.length) {
      let id = this.$store.state.user.userInfo.id
      let type = 4
      getActivity({id: id, type: type}).then(res => {
        console.log(res)
        this.empList = res.data.empList
      })
    }
  },
  methods: {
    handleEdit (index, row) {
      this.editItem = row
      this.editIndex = index
      document.documentElement.style.overflow = 'hidden'
    },
    closeEdit (data) {
      this.editItem = {}
      if (data.title) {
        this.empList[this.editIndex] = data
      }
      document.documentElement.style.overflow = 'auto'
    },
    handleDelete (index, row) {
      // console.log(index, row)
      deleteActivity({id: this.$store.state.user.userInfo.id, active_id: row.id}).then(res => {
        if (res.data) {
          this.empList.splice(index, 1)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
