import React from 'react'
import HomeNav from '../components/homeComponent/HomeNav'
import Content from '../components/homeComponent/contentRow'
import Table from '../components/homeComponent/Table'

const Home = () => {
  return (
    <div className='w-[100%] bg-violet overflow-hidden'>
      <HomeNav/>
      <Content/>
      <Table/>
    </div>
  )
}

export default Home