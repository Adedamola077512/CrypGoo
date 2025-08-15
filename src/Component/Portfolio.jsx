import React from 'react'
import './Portfolio.css'
import portfolio from '../assets/img-portfolio.png'
import wallet from '../assets/icon-wallet.svg'
import vault from '../assets/icon-vault.svg'
import mobile from '../assets/icon-mobileapp.svg'
const Portfolio = () => {
  return (
    <div className='py-5 portfolio' id='Portfoilo'>
        <div className='portfolio-container'>
            {/* img  */}
            <div>
                <img src={portfolio} alt="" className='portfolio-img'/>
            </div>
            {/* content section */}
            <div>
                <p className='portfolio-p'>Cryptocurrency <span className='portfolio-span'>Portfolio</span></p>
                <h1 className='portfolio-h1'>Create your crypto portfolio <br />today with Cryp<span className='portfolio-span'>Go</span>!</h1>
                <p className='Coinbase-p'>Coinbase has a variety of features that make it the best <br />place to start trading.</p>
                <div>
                    <div className='portfolio-flex'>
                        <div className='portfolio-round'><img src={wallet} alt="" className='wallet'/></div>
                        <h4>Manage your portfolio</h4>
                    </div> <hr />
                    <div className='portfolio-flex'>
                        <div className='portfolio-round'><img src={vault} alt="" /></div>
                        <h4>Vault protection</h4>
                    </div> <hr />
                    <div className='portfolio-flex'>
                        <div className='portfolio-round'><img src={mobile} alt="" /></div>
                        <h4>Mobile apps</h4>
                    </div> <hr />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio