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