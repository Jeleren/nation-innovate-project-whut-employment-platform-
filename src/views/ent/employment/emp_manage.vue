<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="招聘职位"
        prop="name">
      </el-table-column>
      <el-table-column
        label="招聘时间"
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
  name: 'emp_manage',
  data () {
    return {
      tableData: [
        {
          name: 'dahfkj',
          date: '234-12'
        }, {
          name: 'adfa ',
          date: 'adf-32'
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
