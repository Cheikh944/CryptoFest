import React, { useEffect, useState } from "react";
import bitcoin from "../../assets/bitcoin.png";
import Chart from "../Chart/AreaChart";
import Slide from "./swiperSlide";
import getDataAreaChart from "../../hooks/useAreaChartData";

const contentRow = () => {
  const [coin, setCoin] = useState(null);
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { coinData, coinMin, coinMax } = await getDataAreaChart(`coins/bitcoin/market_chart?vs_currency=eur&days=14`);
        setCoin(coinData);
        setMin(coinMin);
        setMax(coinMax);
      } catch (error) {
        console.error("Erreur lors du chargement des données du marché :", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="w-[100%] pt-[20px] overflow-hidden sm:mt-[50px]">
      <section className="w-[100%] flex justify-around sm:flex-col sm:items-center">
        <div className='rounded-[40px] w-[45%] h-[290px] bg-[url("./assets/bg-1.png")] bg-no-repeat bg-cover px-[20px] sm:w-[90%]'>
          <h4 className="my-[15px]">ETHEREUM 2.0</h4>
          <h1 className=" text-title font-bold w-[235px]">
            Your Gateway into Blockchain
          </h1>
          <p className=" text-text w-[235px]">
            Paronia is a blockchain platform. We make blockchain accessible.
          </p>
          <button className=" mt-[10px] w-[145px] h-[45px] bg-violet">
            Learn More
          </button>
        </div>
        <div className=" w-[45%] h-[290px] bg-[#3C354A] rounded-[10px] sm:w-[90%] sm:mt-[50px]">
          <ul className="flex items-center my-[10px] ml-[20px]">
            <img className="w-[30px] mr-[10px]" src={bitcoin} alt="" />
            <li>BTC</li>
          </ul>
          <Chart data={coin} max={Math.ceil(max)} min={Math.floor(min)} />
        </div>
      </section>
        <Slide/>
    </div>
  );
};

export default contentRow;
