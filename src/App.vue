<template>
  <div id="app">
    <el-container  class="out-container-warp">
        <el-main class="main-container">
          <el-header class="header-container">
            <RouterLink to="/"><h1 class="text-bold title">DILIDDLI</h1></RouterLink>
          </el-header>
          <router-view/>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import 'element-plus/dist/index.css';
import './assets/main.css';

export default {
  name: 'App',
  methods: {
  },
};
</script>

<style>
html,body {
    width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.text-bold {
  font-weight: bolder;
  font-size: 16px;
}
.title {
  text-align: left;
}
.title span {
  font-size: 14px;
  font-weight: normal;
  float: right;
}
.out-container-warp {
  background: #f4f4f4;
  width: 100%;
  height: 100%;
}
.header-container {
  height: 40px;
  line-height: 40px;
}
.main-container {
  margin-top: 0px;
  padding-top: 0;
}
</style>