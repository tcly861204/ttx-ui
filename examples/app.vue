<template>
  <div class="container">
    <nav>
      <ul>
        <li><router-link to="/button">button</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
  module.exports = {
    data: function() {
      return {
      }
    },
    mounted: function() {
    },
    beforeDestroy: function() {
    },
    methods: {
    }
  }
</script>
<style lang="less">
html, body, div{
  padding: 0;
  margin: 0;
  outline: 0;
}
</style>
