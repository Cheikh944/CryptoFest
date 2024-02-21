import React, { useEffect, useState } from "react";
import ProductNav from "../components/ProductComponent/ProductNav";
import ChartGrid from "../components/ProductComponent/ChartGrid";
import Table from "../components/homeComponent/Table";
import FetchCoinList from "../hooks/FetchCoinList";

const Products = () => {
  const [coinList, setCoinList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { response } = await FetchCoinList();
        setCoinList(response);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className="w-[100%] bg-violet overflow-hidden">
      <ProductNav list={coinList} />
      <ChartGrid />
      <Table list={coinList} />
    </div>
  );
};

export default Products;
