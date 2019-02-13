<template>
  <div class="edit-input">
    <input v-model="edit_content" :style="{'width': width}" @mouseover="showEdit" @mouseout="hideEdit" @focus="edit" @blur="saveEdit" ref="input"/>
  </div>
</template>

<script>
export default {
  name: 'edit_input',
  props: {
    content: '',
    width: {
      default: '3rem'
    }
  },
  data () {
    return {
      edit_content: '',
      edit_state: false
    }
  },
  methods: {
    showEdit () {
      this.$refs.input.style.backgroundColor = '#ececec'
    },
    hideEdit () {
      if (!this.edit_state) {
        this.$refs.input.style.backgroundColor = '#fff'
      }
    },
    edit () {
      this.edit_state = true
      this.showEdit()
    },
    saveEdit () {
      this.edit_state = false
      this.hideEdit()
    }
  },
  watch: {
    content (val) {
      // console.log(val)
      this.edit_content = val
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-input {
  display: inline-block;
  height: 100%;
  width: fit-content;
  input {
    /*max-width: 3rem;*/
    padding: 0;
    vertical-align: bottom;
  }
}
</style>
