<template>
  <div class="form-input-item">
    <i ref="i"></i><input :type="type" v-model="content" :placeholder="placeholder" @focus="inputFocus" @blur="inputBlur" autocomplete="off"/>
  </div>
</template>

<script>
export default {
  name: 'input_item',
  props: {
    type: {
      default: 'text'
    },
    placeholder: ''
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    inputFocus () {
      this.$refs.i.style.backgroundColor = '#6bd9f2'
    },
    inputBlur () {
      this.$refs.i.style.backgroundColor = '#ececec'
      this.$emit('getContent', this.content)
    }
  }
}
</script>

<style scoped>

</style>
