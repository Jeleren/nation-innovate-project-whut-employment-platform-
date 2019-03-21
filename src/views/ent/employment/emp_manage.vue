<template>
  <empFilter>
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
  </empFilter>
</template>

<script>
import popEdit from '../popEdit'
import empFilter from '../../../components/filter/filter_active_list'
import {deleteActivity} from '@/api/activities'

export default {
  name: 'emp_manage',
  components: {
    popEdit,
    empFilter
  },
  data () {
    return {
      search: '',
      editItem: {},
      editIndex: -1
    }
  },
  computed: {
    empList () {
      return this.$store.state.pros.empList
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
      let formData = new FormData()
      formData.append('id', this.$store.state.user.userInfo.id)
      formData.append('active_id', row.id)
      deleteActivity(formData).then(res => {
        if (res.data.isDelete) {
          this.empList.splice(index, 1)
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
