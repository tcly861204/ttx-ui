<template>
<div class="button" @click="onClick">button</div>
</template>
<script>
export default {
  name: 'Button',
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="less">
.button{
  width: 80px;
  height: 36px;
  border-radius: 4px;
  text-align: center;
  line-height: 36px;
  background: #f60;
  color: #fff;
  cursor: pointer;
}
</style>
