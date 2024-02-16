import React, { useEffect, useState } from "react";
import Axios from "../../Api/Axios";
import moment from "moment";
import Chart from "../Chart/AreaChart";
import { Link } from "react-router-dom";

const Card = (props) => {
  const [coin, setCoin] = useState(null);
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const link = "/products?Id="+props.data.item.id

  useEffect(() => {
    Axios.get(
      `coins/${props.data.item.id}/market_chart?vs_currency=eur&days=14&x_cg_demo_api_key=CG-LbRHoTvAKX7BQDAPJhyeiRHr`
    )
      .then((response) => {
        const coinData = response?.data.prices.map((val) => ({
          date: moment(val[0]).format("MMMDD"),
          y: val[1].toFixed(2),
        }));
        let coinMin = coinData[0].y;
        let coinMax = 0;
        for (let i = 0; i < coinData.length; i++) {
          if (coinData[i].y < coinMin) {
            coinMin = coinData[i].y;
          } else if (coinData[i].y > coinMax) {
            coinMax = coinData[i].y;
          }
        }
        setMax(coinMax);
        setMin(coinMin);
        setCoin(coinData);
      })
      .catch((error) => {});
  }, []);

  return (
    <Link to={link}>
      <div className="card border bg-[#3C354A] rounded-[10px] overflow-visible relative">
        <img
          src={props.data.item.small}
          alt=""
          className=" w-[35px] py-[5px] absolute left-[115px] top-[-20px] z-99 rounded-[50%]"
        />
        <ul className="w-[50%] p-[5px] ">
          <li>{props.data.item.symbol}</li>
        </ul>
        <Chart data={coin} max={Math.ceil(max)} min={Math.floor(min)} />
      </div>
    </Link>
  );
};

export default Card;
