import React from 'react'
import ProductNav from '../components/ProductComponent/ProductNav'
import ChartGrid from '../components/ProductComponent/ChartGrid'
import Table from '../components/homeComponent/Table'
const Products = () => {
  return (
    <div className='w-[100%] bg-violet overflow-hidden'>
      <ProductNav/>
      <ChartGrid/>
      <Table/>
    </div>
  )
}

export default Products