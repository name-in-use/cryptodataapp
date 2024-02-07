const axios = require('axios');

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

async function getCoins() {
  const response = await axios.get(`${API_BASE_URL}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: false,
    },
  });
  const coins = response.data.map((coin) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    current_price: coin.current_price,
    high_24h: coin.high_24h,
    low_24h: coin.low_24h,
    price_change_percentage_24h: coin.price_change_percentage_24h,
  }));
  return coins;
}

async function getCoin(id) {
  const response = await axios.get(`${API_BASE_URL}/coins/${id}`, {
    params: {
      localization: false,
      tickers: false,
      market_data: true,
      community_data: false,
      developer_data: false,
      sparkline: false,
    },
  });
  const coin = response.data;
  const formattedData = {
    id: coin.id,
    name: coin.name,
    description: coin.description.en,
    current_price: coin.market_data.current_price.usd,
    price_change_percentage_24h:
      coin.market_data.price_change_percentage_24h,
    price_change_percentage_7d: coin.market_data.price_change_percentage_7d,
    price_change_percentage_14d: coin.market_data.price_change_percentage_14d,
    price_change_percentage_30d: coin.market_data.price_change_percentage_30d,
    price_change_percentage_60d: coin.market_data.price_change_percentage_60d,
    price_change_percentage_200d:
      coin.market_data.price_change_percentage_200d,
    price_change_percentage_1y: coin.market_data.price_change_percentage_1y,
    high_24h: coin.market_data.high_24h.usd,
    low_24h: coin.market_data.low_24h.usd,
  };
  return formattedData;
}

module.exports = {
  getCoins,
  getCoin,
};