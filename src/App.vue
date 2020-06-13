<template>
  <div id="app">
    <div class="header">
      <my-header></my-header>
    </div>
    <router-view class="body"></router-view>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader';

export default {
  name: 'App',
  components: {
    MyHeader
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;

  font-family: 'Roboto', sans-serif;
}
#app {
  height: 100vh;

  display: flex;
  flex-direction: column;
}

.header {
  height: 5.3rem;
}

.body {
  margin-top: 25px;
  height: auto;
}
</style>
