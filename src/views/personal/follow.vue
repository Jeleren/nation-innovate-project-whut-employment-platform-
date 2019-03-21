<template>
  <div class="left-wrap">
    <div class="title">全部关注</div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="关注用户" name="关注用户" style="text-indent: .5rem;">
        <div class="follow-wrap">
          <div class="follow-item" v-for="(item, index) in followList" :key="index">
            <img :src="item.head"/>
            <div class="item-right-wrap">
              <div class="name">{{item.username}}</div>
              <div class="desc">{{item.desc}}</div>
              <div class="button" @click="changeFollow(item)">
                <span v-if="item.isFollow" >已关注</span>
                <span v-if="!item.isFollow">+关注</span>
              </div>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="关注职业圈" name="关注职业圈" style="text-indent: .5rem;">
        <relationFilter>
          <div class="follow-wrap">
            <div class="follow-item" v-for="(item, index) in followProsList" :key="index">
              <img :src="item.head"/>
              <div class="item-right-wrap">
                <div class="name">{{item.pro}}</div>
                <el-button size="small" @click="changeFollowPros(item)" style="margin-left: .5rem">
                  <span v-if="item.isFollow" >已关注</span>
                  <span v-if="!item.isFollow">+关注</span>
                </el-button>
              </div>
            </div>
          </div>
        </relationFilter>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import {fetchFollowList} from '@/api/personal'
// import {cancelFollow, doFollow} from '@/api/user'
import {relation} from '@/utils/handleRelation'
import relationFilter from '../../components/filter/filter_relation'

export default {
  name: 'follow',
  components: {
    relationFilter
  },
  data () {
    return {
      followList: [],
      activeName: '关注用户'
    }
  },
  computed: {
    followProsList () {
      return this.$store.state.pros.followProsList
    }
  },
  created () {
    fetchFollowList(this.$store.state.user.userInfo.id).then(res => {
      if (res.status) {
        this.followList = res.data.followList
      }
    })
  },
  mounted () {
    if (!this.followProsList.length) {
      this.$store.dispatch('getFollowProsList')
    }
  },
  methods: {
    changeFollow (item) {
      relation.changeFollow(item)
    },
    changeFollowPros (item) {
      relation.changeFollowPros(item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    font: .7rem bold;
    background: #fff;
    padding: .2rem .5rem;
    border-bottom: 1px solid #f2f2f5;
  }
  .follow-wrap {
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: .5rem;
    overflow: hidden;
    .follow-item {
      display: flex;
      align-items: center;
      width: 10.9rem;
      background: #f2f2f5;
      margin-bottom: .5rem;
      overflow: hidden;
      border-radius: 5px;
      img {
        width: 2.5rem;
        height: 2.5rem;
        min-width: 2.5rem;
        border-radius: 50%;
        margin: 0 .5rem;
      }
      .item-right-wrap {
        overflow: hidden;
        padding: .3rem .2rem;
        .name {
          font: .7rem bold;
          margin-bottom: .2rem;
        }
        .desc {
          font-size: .5rem;
          /*white-space: nowrap;*/
          overflow: hidden;
          margin-bottom: .2rem;
        }
      }
    }
  }
</style>
