<template>
  <div>
    <el-table
      :data="resumeList.filter(data => !search || data.position.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        width="150"
        prop="position"
        label="职位">
      </el-table-column>
      <el-table-column
        prop="resume[0].name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        :filters="[{ text: '未处理', value: 1 }, { text: '已通过', value: 2 }, { text: '未通过', value: 0}]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="handleType(scope.row.state)"
            >{{handleTag(scope.row.state)}}</el-tag>
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
            @click="handleWatch(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <popResume @closePop="closePop" :data="watchItem" v-if="watchItem.id"/>
  </div>
</template>

<script>
import {getResume} from '@/api/ent'
import popResume from '../popResume'

export default {
  name: 'emp_resume',
  components: {
    popResume
  },
  data () {
    return {
      resumeList: [],
      search: '',
      watchIndex: -1,
      watchItem: {}
    }
  },
  created () {
    if (!this.resumeList.length) {
      let formData = new FormData()
      formData.append('id', this.$store.state.user.userInfo.id)
      // formData.append('active_id', 10)
      getResume(formData).then(res => {
        if (res.data) {
          this.resumeList = res.data.resumeList
          console.log(this.resumeList)
        }
      })
    }
  },
  methods: {
    filterTag (value, row) {
      return row.state === value
    },
    handleType (value) {
      switch (value) {
        case 1:
          return 'info'
        case 2:
          return 'success'
        case 0:
          return 'warning'
      }
    },
    handleTag (value) {
      switch (value) {
        case 1:
          return '未处理'
        case 2:
          return '已通过'
        case 0:
          return '未通过'
      }
    },
    handleWatch (index, row) {
      this.watchIndex = index
      // this.watchItem.emp_id =
      this.watchItem = this.resumeList[index]
      console.log(row)
      document.documentElement.style.overflow = 'hidden'
    },
    closePop (data) {
      if (data.state >= 0) {
        this.resumeList[this.watchIndex].state = data.state
      }
      this.watchItem = {}
      document.documentElement.style.overflow = 'auto'
    }
  }
}
</script>

<style scoped>

</style>
