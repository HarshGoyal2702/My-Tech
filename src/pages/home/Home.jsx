import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import Special from './Special'
import About from './About'
const Home = () => {
  return (
    <div>
      <Banner />
      <Categories/>
      <Special/>
      <About/>
    </div>
  )
}

export default Home
