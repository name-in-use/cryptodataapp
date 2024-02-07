import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CoinList from "../CoinList";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #E0FFFF;
  border-radius: 30px;
`;


const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const PrevButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #ccc;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #999;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const NextButton = styled(PrevButton)`
  margin-left: 10px;
  background-color: #2ecc71;

  &:hover {
    background-color: #27ae60;
  }
`;

const Error = styled.p`
  text-align: center;
  color: #e74c3c;
`;

const CoinListPage = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`
        );
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    fetchCoins();
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      {error ? (
        <Error>Sorry, there was an error fetching the data. Please try again later.</Error>
      ) : (
        <>
          <CoinList coins={coins} />
          <PaginationContainer>
            <PrevButton onClick={handlePrevPage} disabled={page === 1}>
              Prev
            </PrevButton>
            <NextButton onClick={handleNextPage}>Next</NextButton>
          </PaginationContainer>
        </>
      )}
    </Container>
  );
};

export default CoinListPage;