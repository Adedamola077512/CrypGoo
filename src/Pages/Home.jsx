import React from 'react'
import Header from '../Component/Header'
import CryptoSwiper from '../Component/CryptoSwiper'
import Blockchain from '../Component/Blockchain'
import Timeline from '../Component/Timeline'
import Platform from '../Component/Platform'
import Portfolio from '../Component/Portfolio'
import Upgrade from '../Component/Upgrade'
import Cryogo from '../Component/Cryogo'
import Footer from '../Component/Footer'
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