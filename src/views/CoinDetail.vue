<template>
  <div class="container"></div>
</template>

<script>
import api from '@/api';
export default {
  name: 'CoinDetail',
  data() {
    return {
      info: []
    };
  },
  created() {
    var coin = this.$route.params.id;
    console.log(coin);
    api.getCoin(coin).then(res => console.log(res));
  }
};
</script>

<style scoped>
.container {
  outline: 2px solid black;
}
</style>