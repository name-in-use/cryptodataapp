import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  

  th, td {
    padding: 0.5rem;
    text-align: left;
    border: 1px solid #ccc;
    
  }

  th {
    font-weight: bold;
  }

  td a {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const CoinList = ({ coins }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Current Price</th>
          <th>24h High</th>
          <th>24h Low</th>
          <th>24h Change</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <tr key={coin.id}>
            <td><Link to={`/coins/${coin.id}`}>{coin.name}</Link></td>
            <td>{coin.symbol.toUpperCase()}</td>
            <td>${coin.current_price.toFixed(2)}</td>
            <td>${coin.high_24h.toFixed(2)}</td>
            <td>${coin.low_24h.toFixed(2)}</td>
            <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CoinList;