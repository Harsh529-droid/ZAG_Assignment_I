import React from 'react'
import HomeNav from './HomeNav'
import '../style.scss'
import SearchBar from './SearchBar'
import Features from './Features'
import Welcome from './Welcome'
import NewArrivals from './NewArrivals'
import Footer from './Footer'


const HomeScreen = () => {
  return (
    <>
       <div className="main">
            <div className="HomeScreen">
                <HomeNav />

                <Welcome />

                <SearchBar/>

                <Features/>

                <NewArrivals />

                <Footer/>
            </div>
       </div>
    </>
  )
}

export default HomeScreen