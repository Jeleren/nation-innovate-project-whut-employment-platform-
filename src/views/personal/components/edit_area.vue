<template>
  <div class="edit-area">
    <textarea v-model="edit_content" @mouseover="showEdit" @mouseout="hideEdit" @focus="edit" @blur="saveEdit" ref="input"></textarea>
  </div>
</template>

<script>
export default {
  name: 'edit_area',
  props: {
    content: ''
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
      this.edit_content = val
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-area {
  display: inline-block;
  max-height: 100%;
  textarea {
    resize: none;
    min-height: .7rem;
    width: fit-content;
    /*height: fit-content;*/
    /*overflow: hidden;*/
    padding: 0;
    vertical-align: top;
  }
}
</style>
