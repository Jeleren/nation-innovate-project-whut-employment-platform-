<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="比赛时间"
        prop="date">
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
  </div>
</template>

<script>
export default {
  name: 'comp_manage',
  data () {
    return {
      tableData: [
        {
          name: 'adfa',
          date: 'dafafa'
        }
      ],
      search: ''
    }
  },
  methods: {
    handleEdit () {},
    handleDelete () {}
  }
}
</script>

<style scoped>

</style>
