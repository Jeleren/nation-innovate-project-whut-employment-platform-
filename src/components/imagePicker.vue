<template>
  <div class="pop-wrap">
    <div class="pop-content">
      <el-button type="primary" @click="pickImage">上传图片</el-button>
      <div class="image-wrap">
        <div class="left-img">
          <img src="../assets/default_cover.png" class="default-img" v-if="!imagePickUrl">
          <div v-if="imagePickUrl" class="left-img-content" ref="wrap">
            <div class="image-window" ref="window" @mousedown="changeWindow"><div class="resize"></div></div>
            <img :src="imagePickUrl" class="back-img" ref="back_img" draggable="false"/>
            <img :src="imagePickUrl" class="clip-img" ref="image"/>
          </div>
        </div>
        <div class="right-img">
          <canvas ref="canvas" class="canvas"></canvas>
        </div>
      </div>
      <div>
        <el-button type="primary" @click="getImage">保存</el-button><el-button type="cancel" @click="setShow">取消</el-button>
      </div>
    </div>
    <input type="file" accept="image/*" style="display: none;" ref="input" @change="showImage"/>
  </div>
</template>

<script>
export default {
  name: 'imagePicker',
  data () {
    return {
      imagePickUrl: '',
      oriImageWidth: 0,
      oriImageHeight: 0,
      //  大图片长宽
      height: 0,
      width: 0,
      //  裁剪区长宽
      divWidth: 0,
      divHeight: 0,
      ratio: 1,
      show: false
    }
  },
  methods: {
    setShow () {
      this.$emit('closeImagePicker', '')
    },
    pickImage () {
      this.$refs.input.click()
    },
    showImage () {
      let file = this.$refs.input.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      let _this = this
      reader.onload = function () {
        _this.imagePickUrl = reader.result
        let image = new Image()
        image.onload = function () {
          _this.oriImageWidth = image.width
          _this.oriImageHeight = image.height
          //  图片超过范围时，按最大范围缩小图片可视范围
          if (image.width > 210) {
            _this.height = image.height * 210 / image.width
            _this.width = 210
            // 设置缩放比例
            _this.ratio = image.width / 210
          } else if (image.height > 210) {
            _this.width = image.width * 210 / image.height
            _this.height = 210
          } else {
            let width = image.width > image.height ? 210 : image.width
            let height = image.height > image.width ? 210 : image.height
            if (width > height) {
              _this.height = 210 * image.height / image.width
              _this.width = 210
              _this.ratio = _this.width / 210
            } else {
              _this.width = 210 * image.width / image.height
              _this.height = 210
              _this.ratio = _this.height / 210
            }
          }
          _this.setSize()
        }
        image.src = reader.result
      }
    },
    setSize () {
      let width = this.width + 'px'
      let height = this.height + 'px'
      this.$refs.wrap.style.width = this.$refs.image.style.width = this.$refs.back_img.style.width = width
      this.$refs.wrap.style.height = this.$refs.image.style.height = this.$refs.back_img.style.height = height
      let imageWindowStyle = this.$refs.window.style
      if (this.width > 105 && this.height > 105) {
        imageWindowStyle.width = imageWindowStyle.height = 105 + 'px'
        this.divWidth = this.divHeight = 105
      } else {
        imageWindowStyle.height = imageWindowStyle.width = this.width > this.height ? height : width + 'px'
        this.divWidth = this.divHeight = this.width > this.height ? this.height : this.width
      }
      imageWindowStyle.left = (this.width - parseFloat(imageWindowStyle.width)) / 2 + 'px'
      imageWindowStyle.top = (this.height - parseFloat(imageWindowStyle.height)) / 2 + 'px'
      this.setClip(imageWindowStyle)
      this.clipImage()
    },
    setClip (imageWindowStyle) {
      this.$refs.image.style.clip = `rect(${imageWindowStyle.top}, ${parseFloat(imageWindowStyle.left) + parseFloat(this.$refs.window.style.width)}px, ${parseFloat(imageWindowStyle.top) + parseFloat(this.$refs.window.style.height)}px, ${imageWindowStyle.left})`
    },
    changeWindow (e) {
      // console.log(e, e.clientX)
      let dragDiv = this.$refs.window
      let distanceX = e.clientX - dragDiv.offsetLeft
      let distanceY = e.clientY - dragDiv.offsetTop
      let clienX = e.clientX
      this.divHeight = parseFloat(dragDiv.style.height)
      this.divWidth = parseFloat(dragDiv.style.width)
      let _this = this
      document.onmousedown = function mouseDown (e) {
        if (e.target.className !== 'resize') {
          document.onmousemove = drag
        } else {
          document.onmousemove = resize
        }
        document.onmouseup = endDrag
        document.onmousedown = null
        e.stopPropagation()
        e.preventDefault()
      }
      function drag (e) {
        let left = e.clientX - distanceX
        let top = e.clientY - distanceY
        if (left < 0) {
          dragDiv.style.left = '0px'
        } else if (left + _this.divWidth > _this.width) {
          dragDiv.style.left = _this.width - _this.divWidth + 'px'
        } else {
          dragDiv.style.left = left + 'px'
        }
        if (top < 0) {
          dragDiv.style.top = '0px'
        } else if (top + _this.divHeight > _this.height) {
          dragDiv.style.top = _this.height - _this.divHeight + 'px'
        } else {
          dragDiv.style.top = top + 'px'
        }
        _this.setClip(dragDiv.style)
        _this.clipImage()
      }
      function endDrag (e) {
        document.onclick = null
        document.onmousemove = null
        document.onmouseup = null
        e.stopPropagation()
        e.preventDefault()
      }
      function resize (e) {
        let distance = e.clientX - clienX
        let width = parseFloat(dragDiv.style.width)
        let left = parseFloat(dragDiv.style.left)
        clienX = e.clientX
        if (e.clientX < clienX) {
          if (parseFloat(dragDiv.style.width) > 100) {
            dragDiv.style.height = dragDiv.style.width = width - distance + 'px'
          }
        } else {
          if (width + left < _this.width) {
            dragDiv.style.height = dragDiv.style.width = width + distance + 'px'
          } else {
            dragDiv.style.left = _this.width - width + 'px'
          }
        }
        _this.setClip(dragDiv.style)
        _this.clipImage()
      }
    },
    //  生成canvas图片 并且切图保存
    clipImage () {
      let canvas = this.$refs.canvas
      let cell = this.$refs.window
      canvas.width = parseFloat(cell.style.width) * this.ratio
      canvas.height = parseFloat(cell.style.height) * this.ratio
      let _this = this
      let ratio = this.ratio
      let ctx = canvas.getContext('2d')
      ctx.drawImage(_this.$refs.image, cell.offsetLeft * ratio, cell.offsetTop * ratio, parseFloat(cell.style.width) * ratio, parseFloat(cell.style.height) * ratio, 0, 0, canvas.width, canvas.height)
    },
    getImage () {
      let canvas1 = this.$refs.canvas
      let ctx1 = canvas1.getContext('2d')
      let data = ctx1.getImageData(0, 0, canvas1.width, canvas1.height)
      let canvas2 = document.createElement('canvas')
      let ctx2 = canvas2.getContext('2d')
      canvas2.width = canvas1.width
      canvas2.height = canvas1.height
      ctx2.putImageData(data, 0, 0)
      let resultImage = new Image()
      resultImage.src = canvas2.toDataURL('image/png')
      this.$emit('setImage', resultImage)
      this.setShow()
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-wrap {
    display: flex;
    margin-top: .5rem;
    position: relative;
    .left-img {
      position: relative;
      width: 210px;
      height: 210px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ececec;
      box-sizing: content-box;
      .left-img-content {
        position: relative;
        width: 100%;
        height: 100%;
        color: #333;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /*display: flex;*/
        .image-window {
          position: absolute;
          border: 1px solid #fff;
          z-index: 10;
          cursor: move;
          .resize {
            position: absolute;
            width: 6px;
            height: 6px;
            right: -1px;
            bottom: -1px;
            border: 1px solid #fff;
            cursor: nw-resize;
            background: #000;
            opacity: 0.8;
            filter: (opacity=80);
            overflow: hidden;
          }
        }
        .back-img {
          position: absolute;
          max-width: 100%;
          max-height: 100%;
          opacity: .5;
          z-index: 0;
        }
        .clip-img {
          position: absolute;
          max-width: 100%;
          max-height: 100%;
        }
      }
      .default-img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .right-img {
      .canvas {
        width: 100px;
        height: 100px;
      }
      img {
        min-width: 100px;
        min-height: 100px;
      }
    }
  }
</style>
