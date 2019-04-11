<template>
  <div class="left-wrap">
    <div class="title">全部关注</div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item :title="`关注用户(${followList.num})`" name="关注用户" style="text-indent: .5rem;">
        <relationFilter type="follow" :pageNum="followList.num">
          <div class="follow-wrap">
            <div class="follow-item" v-for="(item, index) in followList.followList" :key="index">
              <img :src="item.head"/>
              <div class="item-right-wrap">
                <div class="name">{{item.username}}</div>
                <div class="desc">{{item.desc}}</div>
                <el-button size="small" @click="changeFollow(item)" style="margin-left: .5rem">
                  <span v-if="item.isFollow" >已关注</span>
                  <span v-if="!item.isFollow">+关注</span>
                </el-button>
              </div>
            </div>
          </div>
        </relationFilter>
      </el-collapse-item>
      <el-collapse-item :title="`关注职业圈(${followProsList.num})`" name="关注职业圈" style="text-indent: .5rem;">
        <relationFilter type="followPros" :pageNum="followProsList.num">
          <div class="follow-wrap">
            <div class="follow-item" v-for="(item, index) in followProsList.followProsList" :key="index">
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
import {relation} from '@/utils/handleRelation'
import relationFilter from '../../components/filter/filter_relation'

export default {
  name: 'follow',
  components: {
    relationFilter
  },
  data () {
    return {
      // followList: [],
      activeName: '关注用户'
    }
  },
  computed: {
    followProsList () {
      return this.$store.state.relation.followProsList
    },
    followList () {
      return this.$store.state.relation.followList
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
  span {
    text-align: center;
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
      width: 12.5rem;
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
          white-space: nowrap;
          max-height: 1.8rem;
          overflow: hidden;
          margin-bottom: .2rem;
        }
      }
    }
  }
  .no-fan {
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    background: #fff;
  }
  /*.el-collapse-item.is-active{*/
    /*text-indent: 0 !important;*/
  /*}*/
</style>
