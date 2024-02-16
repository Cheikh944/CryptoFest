import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AreaChart from "../Chart/AreaChart";
import BarChart from "../Chart/BarChart";
import getDataAreaChart from "../../hooks/useAreaChartData";
import getDataBarChart from "../../hooks/useBarChartData";

const ChartGrid = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const coinId = searchParams.get("Id");
  const [Areacoin, setAreaCoin] = useState(null);
  const [BarCoin, setBarCoin] = useState(null);
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [barChartMax, setBarChartMax] = useState(0);
  const [barChartMin, setBarChartMin] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { coinData, coinMin, coinMax } = await getDataAreaChart(
          `coins/${coinId}/market_chart?vs_currency=eur&days=14&x_cg_demo_api_key=CG-LbRHoTvAKX7BQDAPJhyeiRHr`
        );
        const { result, barMin, barMax } = await getDataBarChart(
          `coins/${coinId}/market_chart?vs_currency=eur&days=14&x_cg_demo_api_key=CG-LbRHoTvAKX7BQDAPJhyeiRHr`
        );
        setBarCoin(result);
        setBarChartMax(barMax);
        setBarChartMin(barMin);
        setAreaCoin(coinData);
        setMin(coinMin);
        setMax(coinMax);
      } catch (error) {
        console.error(
          "Erreur lors du chargement des données du marché :",
          error
        );
      }
    };
    fetchData();
  }, [coinId]);

  return (
    <div className="flex sm:flex-col sm:items-center">
      <div className="w-[45%] h-[400px] mt-[50px] sm:h-[200px] sm:w-[100%] sm:mt-[100px]">
        <AreaChart data={Areacoin} max={Math.ceil(max)} min={Math.floor(min)} />
      </div>
      <div className="w-[45%] h-[400px] mt-[50px] sm:h-[200px] sm:w-[100%] sm:mt-[20px]">
        <BarChart
          data={BarCoin}
          max={Math.ceil(barChartMax)}
          min={Math.floor(barChartMin)}
        />
      </div>
    </div>
  );
};

export default ChartGrid;
