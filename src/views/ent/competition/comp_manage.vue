<template>
  <comFilter>
    <el-table v-if="comList"
      :data="comList.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="名称"
        width="210"
        prop="title">
      </el-table-column>
      <el-table-column
        label="比赛时间"
        width="300"
        prop="date">
      </el-table-column>
      <el-table-column
        fixed="right"
        width="155"
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
    <popEdit :data="editItem" v-if="editItem.id" @closePop="closePop"/>
  </comFilter>
</template>

<script>
import {deleteActivity} from '@/api/activities'
import popEdit from '../popEdit'
import comFilter from '../../../components/filter/filter_active_list'

export default {
  name: 'comp_manage',
  components: {
    popEdit,
    comFilter
  },
  data () {
    return {
      search: '',
      editItem: {},
      editIndex: -1
    }
  },
  computed: {
    comList () {
      return this.$store.state.pros.comList
    }
  },
  created () {
    // if (!this.comList.length) {
    //   this.$store.dispatch('getActiveList', {})
    // }
  },
  methods: {
    handleEdit (index, row) {
      this.editItem = row
      this.editIndex = index
      document.documentElement.style.overflow = 'hidden'
    },
    handleDelete (index, row) {
      let formData = new FormData()
      formData.append('id', this.$store.state.user.userInfo.id)
      formData.append('active_id', row.id)
      deleteActivity(formData).then(res => {
        if (res.data.isDelete) {
          this.comList.splice(index, 1)
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        }
      })
    },
    closePop (data) {
      this.editItem = {}
      if (data.title) {
        this.empList[this.editIndex] = data
      }
      document.documentElement.style.overflow = 'auto'
    }
  }
}
</script>

<style scoped>

</style>
