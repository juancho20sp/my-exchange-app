<template>
  <div class="supercontainer">
    <template v-if="isLoading">
      <div class="spinner__container">
        <bounce-loader
          :color="'#68d391'"
          :loading="isLoading"
          :size="100"
        ></bounce-loader>
      </div>
    </template>

    <template v-else>
      <div class="table__container">
        <table class="table">
          <div class="first-row">
            <tr class="row">
              <th class="t-header">
                <span style="visibility: hidden">Nonee</span>
              </th>
              <th class="t-header" @click="sortRank">
                <span class="ranking">Ranking</span>
              </th>
              <th class="t-header">Nombre</th>
              <th class="t-header">Precio</th>
              <th class="t-header">Cap. de Mercado</th>
              <th class="t-header">Variación 24hs</th>
              <th class="t-header">
                <input type="text" placeholder="Buscar..." v-model="filter" />
              </th>
            </tr>
            <tr v-for="asset in filteredAssets" :key="asset.id" class="row">
              <td class="img__container">
                <img
                  :src="
                    `https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`
                  "
                  :alt="`${asset.name} image`"
                />
              </td>
              <td>{{ asset.rank }}</td>
              <td>
                {{ asset.name }} <span class="small">{{ asset.symbol }}</span>
              </td>
              <td>{{ asset.priceUsd | dollar }}</td>
              <td>{{ asset.marketCapUsd | dollar }}</td>
              <td :class="asset.changePercent24Hr > 0 ? 'green' : 'red'">
                {{ asset.changePercent24Hr | percent }}
              </td>
              <td>
                <router-link
                  :to="{ name: 'coin-detail', params: { id: asset.id } }"
                >
                  <button class="btn">Detalle</button>
                </router-link>
              </td>
            </tr>
          </div>
        </table>
      </div>
    </template>
  </div>
</template>

<script>
import api from '@/api';
export default {
  name: 'AssetsTable',

  data() {
    return {
      isLoading: false,
      assets: [],
      filter: '',
      sortOrder: 1
    };
  },

  computed: {
    filteredAssets() {
      return this.assets
        .filter(
          asset =>
            asset.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            asset.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((act, next) => {
          if (parseInt(act.rank) > parseInt(next.rank)) {
            return this.sortOrder;
          }
          this.sortOrder = this.sortOrder === 1 ? -1 : 1;

          return this.sortOrder;
        });
    }
  },

  methods: {
    sortRank() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    }
  },

  created() {
    this.isLoading = true;

    api
      .getAssets()
      .then(res => (this.assets = res))
      .finally(() => (this.isLoading = false));
  }
};
</script>

<style scoped>
.supercontainer {
  height: 100%;
}

.spinner__container {
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.table__container {
  height: 80%;
  display: flex;
  justify-content: center;
}

table {
  width: 70%;
}

tr:first-child {
  background-color: rgba(128, 128, 128, 0.1);
  border-bottom: 1px solid gray;
  padding: 20px;
}

.t-header {
  flex: 1;
  text-align: center;
}

tr {
  display: flex;
  align-items: center;
}

tr:not(:first-child) {
  padding: 2rem 0;
  border-bottom: 1px solid gray;
}

tr:not(:first-child):hover {
  background-color: rgba(255, 166, 0, 0.2);
}

.image__container {
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 40px;
  height: 40px;
}

th:first-child {
  flex: 0;
  width: 10%;
}

th {
  flex: 1;
  text-align: center;
}

td:nth-child(1) {
  flex: 0;
}

td {
  flex: 1;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  background-color: transparent;
  font-size: 1rem;

  height: 2rem;
  width: 100%;
  padding-left: 10px;

  border: none;
  border-bottom: 1px solid gray;
}

input:focus {
  outline: none;
}

.small {
  font-size: 0.8rem;

  padding-left: 5px;
  padding-top: 5px;
}

.btn {
  background-color: transparent;
  color: #68d391;
  border: 2px solid #68d391;
  border-radius: 10px;

  height: 2.5rem;
  width: 5rem;
}

.btn:hover {
  background-color: #68d391;
  color: white;
  cursor: pointer;
}

.btn:focus {
  outline: none;
}

.ranking {
  text-decoration: underline;
}

.ranking:hover {
  cursor: pointer;
  color: #68d391;
}

.red {
  color: red;
}

.green {
  color: green;
}
</style>