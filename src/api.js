const URL = 'https://api.coincap.io/v2';

function getAssets() {
  return fetch(`${URL}/assets`)
    .then(res => res.json())
    .then(res => res.data);
}

function getImages(symbol) {
  return fetch(`https://static.coincap.io/assets/icons/${symbol}@2x.png`)
    .then(res => res.json())
    .then(res => res.data);
}

function getCoin(coin) {
  return fetch(`api.coincap.io/v2/assets/${coin.toLowerCase()}`)
    .then(res => res.json())
    .then(res => console.log(res));
}

export default {
  getAssets,
  getImages,
  getCoin
};
