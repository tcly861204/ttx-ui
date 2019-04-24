<template>
  <transition name="fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div
      class="notification"
      :style="style"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="createTimer"
    >
      <span class="content">{{content}}</span>
      <a class="btn" @click="handleClose">{{btn}}</a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'
    }
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    style () {
      return {}
    }
  },
  methods: {
    handleClose (e) {
      e.preventDefault()
      this.$emit('close')
    },
    afterLeave () {
      this.$emit('closed')
    },
    afterEnter () {},
    clearTimer () {},
    createTimer () {}
  }
}
</script>

<style lang="less" scoped>
.notification {
  display: inline-flex;
  background-color: #fff;
  border-radius: 4px;
  align-items: center;
  padding: 20px;
  min-width: 280px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, .1);
  flex-wrap: wrap;
  transition: all .3s;
}
.content{
  padding: 0;
  color: #212121;
  font-size: 14px;
}
.btn{
  color: #ff4081;
  padding-left: 24px;
  margin-left: auto;
  cursor: pointer;
}
</style>


