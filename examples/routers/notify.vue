<template>
  <div>
    <Button @click="handleClick">添加</Button>
  </div>
</template>
<script>
export default {
  name: 'notify',
  methods: {
    handleClick (v) {
      this.$notify({
        content: '你好'
      })
    }
  }
}
</script>
