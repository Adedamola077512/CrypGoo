import React from 'react'
import './Cryogo.css'
import support from '../assets/icon-support.svg'
import community from '../assets/icon-community.svg'
import academy from '../assets/icon-academy.svg'
const Cryogo = () => {
  return (
    <div className='cryogo py-5'>
        <div className='text-center py-5 cryogo-text'>
            <h4 className='cryogo-h4'>Always By <span className='cryogo-span'>Your Side</span></h4>
            <span className='cryogo-hr'></span>
            <h1>Be the first to use out Cryp<span>go</span>!</h1>
        </div>
        {/* div  */}
        <div className='container py-5 cryogo-div'>
            <div className='cryogo-flex'>
                <div>
                    <div className='cryogo-round'><img src={support} alt="" /></div>
                    <h4 className='cryogo-flex-h4'>24/7 Support</h4>
                    <p className='cryogo-flex-p'>Need help? Get your requests solved <br /> quikly via support team.</p>
                </div>
                <div>
                    <div className='cryogo-round'><img src={community} alt="" /></div>
                    <h4 className='cryogo-flex-h4'>Community</h4>
                    <p  className='cryogo-flex-p'>join the conversations on our worldwide <br />OKEx communties</p>
                </div>
                <div>
                    <div className='cryogo-round'><img src={academy} alt="" /></div>
                    <h4 className='cryogo-flex-h4'>Academy</h4>
                    <p className='cryogo-flex-p'>Learn blockchain and <br /> crypto for free</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cryogo