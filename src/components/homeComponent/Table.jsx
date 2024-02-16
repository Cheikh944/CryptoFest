import React, { useEffect, useState } from "react";
import Axios from "../../Api/Axios";
import { useNavigate } from "react-router-dom";
const Table = () => {
  const [coinList, setCoinList] = useState(null);

  let navigate = useNavigate();

  const handleRowClick = (coinId) => {
    navigate(`/products?Id=${coinId}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    Axios.get(
      "coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=30d&locale=fr&x_cg_demo_api_key=CG-LbRHoTvAKX7BQDAPJhyeiRHr"
    )
      .then((response) => {
        setCoinList(response);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête" + error);
      });
  }, []);

  return (
    <div>
      <table className=" m-auto my-[50px]">
        <thead>
          <tr>
            <th>Name</th>
            <th>Logo</th>
            <th>Current Price</th>
            <th className="md:hidden">Lowest (24h)</th>
            <th className="md:hidden">Highest (24h)</th>
            <th className="sm:hidden">Price Change 24h</th>
          </tr>
        </thead>
        <tbody>
          {coinList &&
            coinList.data.map((coin) => (
              <tr key={coin.id} className=" cursor-pointer" onClick={() => handleRowClick(coin.id)}>
                <th>{coin.name}</th>
                <th>
                  <img
                    src={coin.image}
                    alt=""
                    className=" w-[30px] rounded-[50%]"
                  />
                </th>
                <th>{coin.current_price.toFixed(2)} EUR</th>
                <th className="md:hidden">{coin.low_24h.toFixed(2)} EUR</th>
                <th className="md:hidden">{coin.high_24h.toFixed(4)} EUR</th>
                <th className="flex items-center sm:hidden">
                  {coin.price_change_percentage_24h.toFixed(4)} EUR
                  {coin.price_change_percentage_24h > 0 ? (
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="green"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.64645 3.64644C3.45118 3.8417 3.45118 4.15828 3.64645 4.35354L10.2929 11L6 11C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12L11.5 12C11.6326 12 11.7598 11.9473 11.8536 11.8536C11.9473 11.7598 12 11.6326 12 11.5L12 5.99999C12 5.72385 11.7761 5.49999 11.5 5.49999C11.2239 5.49999 11 5.72385 11 5.99999V10.2929L4.35355 3.64643C4.15829 3.45117 3.84171 3.45117 3.64645 3.64644Z"
                        fill="red"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
