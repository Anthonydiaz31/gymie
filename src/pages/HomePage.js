import React from 'react'
import Header from "../components/Header";
import Icons from "../components/Icons";
import Navbar from '../components/Navbar';
import Search from "../components/Search";

function HomePage() {
  return (
    <div>
        <Navbar />
        <Header />
        <Icons />
        <Search />
    </div>
  )
}

export default HomePage