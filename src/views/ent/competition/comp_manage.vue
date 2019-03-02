<template>
  <div>
    <el-table v-if="comList"
      :data="comList.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="名称"
        width="200"
        prop="title">
      </el-table-column>
      <el-table-column
        label="比赛时间"
        prop="date">
      </el-table-column>
      <el-table-column
        width="100"
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
  </div>
</template>

<script>
import {deleteActivity} from '@/api/activities'
import popEdit from '../popEdit'

export default {
  name: 'comp_manage',
  components: {
    popEdit
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
    if (!this.comList.length) {
      console.log('dispatch')
      this.$store.dispatch('getComList', {id: this.$store.state.user.userInfo.id, type: 1})
    }
  },
  methods: {
    handleEdit (index, row) {
      this.editItem = row
      this.editIndex = index
      document.documentElement.style.overflow = 'hidden'
    },
    handleDelete (index, row) {
      deleteActivity({id: this.$store.state.user.userInfo.id, active_id: row.id}).then(res => {
        if (res.data) {
          this.comList.splice(index, 1)
          // this.$store.commit('SET_COM_LIST', this.comList.splice(index, 1))
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
