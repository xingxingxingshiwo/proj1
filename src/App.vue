<template>
    <div id="app">
        <router-link to="/index">首页</router-link>
        <router-link to="/New">新增</router-link>
        <router-link to="/search">查找</router-link>
        <router-link to="/manage">管理</router-link>
        <router-view></router-view>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #nav {
    padding: 30px;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
