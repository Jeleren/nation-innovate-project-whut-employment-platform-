<template>
  <div class="slideshow">
    <transition-group name="slideshow" tag="div" class="list-wrap">
      <!--<span v-for="item in slideshow" :key="item.id" :style="{'background-image': `url(${item.url})`}" class="list-item">{{item.url}}</span>-->
      <!--<div v-for="item in slideshow" :key="item.id" v-if="item.id === showIndex">-->
        <img v-for="item in slideshow" :key="item.id" v-if="item.id === showIndex" class="list-item" :src="''+item.url" @mouseover="stop" @mouseleave="start"/>
      <!--</div>-->
    </transition-group>
    <div class="dot-wrap">
      <span v-for="item in slideshow" :key="item.id">
        <i :class="{'i-active': item.id === showIndex}" @mouseover="changeShow(item.id)" @mouseout="start"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { fetchSlideShow } from '@/api/first_page'
export default {
  name: 'slideshow',
  data () {
    return {
      slideshow: [],
      showIndex: -1,
      timeInt: 2500
    }
  },
  created () {
    fetchSlideShow().then(res => {
      this.slideshow = res.data.slideshow
      this.showIndex = this.slideshow[0].id
      this.start()
    })
  },
  methods: {
    start () {
      this.interval = setInterval(this.play, this.timeInt)
    },
    stop () {
      clearInterval(this.interval)
    },
    play () {
      if (this.showIndex === this.slideshow.length) {
        this.showIndex = 1
      } else {
        this.showIndex++
      }
    },
    changeShow (id) {
      this.showIndex = id
      this.stop()
    }
  }
}
</script>

<style lang="scss" scoped>
  .slideshow-enter,.slideshow-leave-to{
    opacity: 0;
  }
  /*.slideshow-enter-to,.slideshow-leave{*/
    /*opacity: 1;*/
  /*}*/
  .slideshow-enter-active,.slideshow-leave-active{
    transition: all 1s;
  }
.slideshow {
  position: relative;
  width: 100%;
  height: 10.625rem;
  margin-top: 1.81rem;
  display: flex;
  justify-content: center;
  .list-wrap {
    width: 100%;
    height: 100%;
  }
  .list-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    cursor: pointer;
  }
  .dot-wrap {
    position: absolute;
    bottom: 0;
    height: 1rem;
    display: flex;
    align-items: center;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: .8rem;
      height: .8rem;
      i {
        display: inline-block;
        width: .5rem;
        height: .5rem;
        background-color: #A5A5A5;
        border-radius: 50%;
        cursor: pointer;
      }
    }
    .i-active {
      width: .6rem;
      height: .6rem;
    }
  }
}
</style>
