import React, { useEffect, useState } from "react";
import HomeNav from "../components/homeComponent/HomeNav";
import Content from "../components/homeComponent/contentRow";
import Table from "../components/homeComponent/Table";
import FetchCoinList from "../hooks/FetchCoinList";

const Home = () => {
  const [coinList, setCoinList] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { response } = await FetchCoinList();
        setCoinList(response)
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-[100%] bg-violet overflow-hidden">
      <HomeNav list={ coinList }/>
      <Content />
      <Table list= { coinList }/>
    </div>
  );
};

export default Home;
