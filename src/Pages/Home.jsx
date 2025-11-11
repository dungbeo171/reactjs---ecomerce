import React from 'react'
import Banner from '../Components/Banner/Banner'
import FeaturedProducts from '../Components/FeatureProduct/FeaturedProducts'
import Categories from '../Components/Categories/Categories'
import SearchBar from '../Components/SearchBar/SearchBar'

const Home = () => {
  return (
    <div>
        <Banner/>
        <SearchBar/>
        <Categories/>
        <FeaturedProducts/>
    </div>
  )
}

export default Home