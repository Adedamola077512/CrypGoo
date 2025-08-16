import React from 'react'
import './Platform.css'
const Platform = () => {
  return (
    <div className='platform'>
        <div className='container platform-flex'>
            <div>
                <p className='platform-p'>Powered by the Cryp<span className='span-go'>go</span> Platfrom</p>
                <p className='platform-p-content'>Our product empoer people to have safer and more <br /> cladtrustworthy experiences.</p>
            </div>
            {/* button section  */}
            <div>
                <button className='platform-btn'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Platform