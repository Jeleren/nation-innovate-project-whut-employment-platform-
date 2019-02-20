<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      :span-method="objectSpanMethod"
      style="width: 100%">
      <el-table-column
        prop="position"
        label="职位">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="状态"
        :filters="[{ text: '未处理', value: '未处理' }, { text: '已通过', value: '已通过' }, { text: '未通过', value: ''}]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="handleType(scope.row.tag)"
            >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"></el-input>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'emp_resume',
  data () {
    return {
      tableData: [
        {
          position: '字节跳动前端工程师',
          name: 'ada',
          tag: '未处理'
        },
        {
          position: 'aada',
          name: 'ada',
          tag: '未通过'
        },
        {
          position: 'aada',
          name: 'ada',
          tag: '未处理'
        },
        {
          position: 'aada',
          name: 'adal'
        }
      ],
      search: ''
    }
  },
  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    filterTag (value, row) {
      return row.tag === value
    },
    handleType (value) {
      switch (value) {
        case '未处理': {
          return 'info'
        }
        case '已通过':
          return 'success'
        case '未通过':
          return 'warning'
      }
    }
  }
}
</script>

<style scoped>

</style>
