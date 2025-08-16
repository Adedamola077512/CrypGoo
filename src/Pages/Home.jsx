import React from 'react'
import Header from '../Components/Header'
import CryptoSwiper from '../Components/CryptoSwiper'
import Blockchain from '../Components/Blockchain'
import Timeline from '../Components/Timeline'
import Platform from '../Components/Platform'
import Portfolio from '../Components/Portfolio'
import Upgrade from '../Components/Upgrade'
import Cryogo from '../Components/Cryogo'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
        <Header />
        <CryptoSwiper />
        <Blockchain />
        <Timeline />
        <Platform />
        <Portfolio />
        <Upgrade />
        <Cryogo />
        <Footer />
    </div>
  )
}

export default Home