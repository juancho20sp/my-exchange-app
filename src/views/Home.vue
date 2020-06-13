<template>
  <div class="home__container">
    <assets-table></assets-table>
  </div>
</template>

<script>
import AssetsTable from '@/components/AssetsTable';

export default {
  name: 'Home',
  components: {
    AssetsTable
  }
};
</script>

<style scoped>
.home__container {
  height: 100%;
}
</style>