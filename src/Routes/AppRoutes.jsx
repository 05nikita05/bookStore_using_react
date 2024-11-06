import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/home/Layout'
import DetailLayout from '../components/details/DetailLayout'
import SearchLayout from '../components/Search/SearchLayout'

const Approutes = () => {
  return (
    <Routes>
        <Route path='/detail/:title' element={<DetailLayout/>}/>
        <Route path='/' element={<Layout/>}/>
        <Route path='/search/:query' element={<SearchLayout/>}/>
        <Route path='/search/:query/*' element={<DetailLayout/>}/>

        
        
    </Routes>
  )
}

export default Approutes