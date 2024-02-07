import React from "react";
import styled from "styled-components";

const CoinDetailsContainer = styled.div`
  padding: 20px;
  background-color: #E0FFFF;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px #ccc;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  div {
    margin-bottom: 5px;
  }
`;

const CoinDetails = (props) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "usd",
    }).format(price);
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <CoinDetailsContainer>
      <h1>{props.coin.name}</h1>
      <div>{props.coin.description?.en}</div>
      <div>Current Price: {formatPrice(props.coin.market_data?.current_price?.usd)}</div>
      <div>
        Price Change (24h): {props.coin.market_data?.price_change_percentage_24h}% (
        {formatPrice(props.coin.market_data?.price_change_24h)})
      </div>
      <div>
        Price Change (7d): {props.coin.market_data?.price_change_percentage_7d}% (
        {formatPrice(props.coin.market_data?.price_change_percentage_7d)})
      </div>
      <div>
        Price Change (14d): {props.coin.market_data?.price_change_percentage_14d}% (
        {formatPrice(props.coin.market_data?.price_change_percentage_14d)})
      </div>
      <div>
        Price Change (1m): {props.coin.market_data?.price_change_percentage_1m}% (
        {formatPrice(props.coin.market_data?.price_change_percentage_1m)})
      </div>
      <div>
        Price Change (2m): {props.coin.market_data?.price_change_percentage_2m}% (
        {formatPrice(props.coin.market_data?.price_change_percentage_2m)})
      </div>
      <div>
        Price Change (200d): {props.coin.market_data?.price_change_percentage_200d}% (
        {formatPrice(props.coin.market_data?.price_change_percentage_200d)})
      </div>
      <div>
        Price Change (1y): {props.coin.market_data?.price_change_percentage_1y}% (
        {formatPrice(props.coin.market_data?.price_change_percentage_1y)})
      </div>
      <div>High (24h): {formatPrice(props.coin.market_data?.high_24h?.usd)}</div>
      <div>Low (24h): {formatPrice(props.coin.market_data?.low_24h?.usd)}</div>
    </CoinDetailsContainer>
  );
};

export default CoinDetails;