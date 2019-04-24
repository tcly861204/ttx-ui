<template>
  <div class="container">
    <header class="header">
      <h1>TTX-UI</h1>
    </header>
    <section>
      <nav>
        <ul class="nav-wrapper">
          <router-link to="/install">安装</router-link>
          <router-link to="/button">button</router-link>
          <router-link to="/notify">notify</router-link>
        </ul>
      </nav>
      <main>
        <router-view></router-view>
      </main>
    </section>
    <footer>
      ttx-ui库
    </footer>
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
html, body{
  height: 100%;
}
.container{
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  header{
    height: 60px;
    background: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
    h1{
      height: 60px;
      line-height: 60px;
      padding: 0 20px;
    }
  }
  .nav-wrapper{
    width: 100%;
    a{
      display: block;
      color: #212121;
      font-size: 16px;
      padding: 10px 0 10px 20px;
    }
  }
  section{
    display: flex;
    height: calc(~'100% - 110px');
    padding: 20px 0 0 0;
    nav{
      width: 200px;
      background: #fff;
      border-right: 1px dashed #c1c1c1;
    }
    main{
      flex: 1;
      padding: 20px;
      background: #fff;
    }
  }
  footer{
    height: 50px;
    background: #333;
    color: #666;
    text-align: center;
    line-height: 50px;
  }
}
</style>
