import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoinDetails from '../CoinDetails';

function CoinDetailPage() {
  const [coinData, setCoinData] = useState(null);
  const { coinId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!coinId) return; 
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      const data = await response.json();
      setCoinData(data);
    };

    fetchData();
  }, [coinId]);

  return (
    <div>
      {coinData ? (
        <CoinDetails coin={coinData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CoinDetailPage;