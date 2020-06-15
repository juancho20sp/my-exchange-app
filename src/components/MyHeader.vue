<template>
  <div class="header__container">
    <div class="logo__container">
      <router-link to="/">
        <my-icon class="myIcon"></my-icon>
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
}

.logo__container {
  margin-left: 15px;

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

  display: flex;
}

.menu {
  list-style: none;

  display: flex;
  flex: 1;
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

@media screen and (max-width: 1024px) {
  .logo__container {
    width: 35%;
  }
  .menu__container {
    width: 90%;
  }
}
@media screen and (max-width: 780px) {
  .logo__container {
    width: 40%;
  }
  .menu__container {
    width: 90%;
  }
}

@media screen and (max-width: 720px) {
  .logo__container {
    width: 50%;
  }
}

@media screen and (max-width: 625px) {
  .logo__container {
    width: 75%;
  }
}

@media screen and (max-width: 479px) {
  .header {
    height: 6rem;
  }

  .header__container {
    display: block;
  }

  .logo__container {
    width: auto;
    margin: 0px;
    padding-top: 15px;
    height: 40%;
    justify-content: center;
  }

  .menu__container {
    width: auto;
    height: 40%;
    margin-top: 2%;
  }

  #image0 {
    max-width: 15%;
  }
}
@media screen and (max-width: 320px) {
}
</style>