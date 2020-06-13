<template>
  <div class="header__container">
    <div class="logo__container">
      <router-link to="/">
        <my-icon></my-icon>
        <h1 class="title">My Exchange App</h1>
      </router-link>
    </div>

    <nav class="menu__container">
      <ul class="menu">
        <router-link
          class="menu__item"
          :to="{ name: 'coin-detail', params: { id: 'bitcoin' } }"
        >
          <li class="coin-nav__item">BTC</li>
        </router-link>
        <router-link
          class="menu__item"
          :to="{ name: 'coin-detail', params: { id: 'ethereum' } }"
        >
          <li class="coin-nav__item">ETH</li>
        </router-link>
        <router-link
          class="menu__item"
          :to="{ name: 'coin-detail', params: { id: 'ripple' } }"
        >
          <li class="coin-nav__item">XRP</li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import MyIcon from '@/components/MyIcon';

export default {
  name: 'MyHeader',

  components: {
    MyIcon
  }
};
</script>

<style scoped>
.header__container {
  background-color: #68d391;

  height: 100%;

  display: flex;
  align-items: center;
}

.logo__container {
  margin-left: 15px;

  max-width: 20%;
  color: #fff;

  display: flex;
  align-items: center;
}

.title {
  margin-left: 5px;
  font-size: 20px;
  color: #fff;
}

.menu__container {
  width: 20%;

  margin-left: 20px;
}

.menu {
  list-style: none;

  display: flex;
}

.menu__item {
  text-align: center;

  flex: 1;
}

a {
  text-decoration: none;
  color: #b2f5ea;

  font-size: 15px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>