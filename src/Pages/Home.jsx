import React from 'react'
import Banner from '../Components/Banner/Banner'
import FeaturedProducts from '../Components/FeatureProduct/FeaturedProducts'
import Categories from '../Components/Categories/Categories'
import SearchBar from '../Components/SearchBar/SearchBar'
import FlashSale from '../Components/FlashSale/FlashSale'
import TrendSearch from '../Components/TrendSearch/TrendSearch'

const Home = ({ cartItems, setCartItems }) => {
  return (
    <div>
      <Banner/>
      <SearchBar/>
      <Categories/>
      <FeaturedProducts cartItems={cartItems} setCartItems={setCartItems}/>
      <FlashSale cartItems={cartItems} setCartItems={setCartItems}/>
      <TrendSearch cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  )
}

export default Home