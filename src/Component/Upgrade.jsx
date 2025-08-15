import React from 'react'
import './Upgrade.css'
import { FaCheckCircle } from "react-icons/fa";
import upgradeImage from '../assets/img-upgrade.png' // Assuming you have an image for the upgrade section
const Upgrade = () => {
  return (
    <div className='upgrade-container py-5' id='Upgrade'>
        <div className='container upgrade-content'>
            <div>
               <h3 className='upgrade-h3'>Upgrade</h3>
               <h1 className='upgrade-h1'>Upgrade Your Storage Layer</h1>
               <p className='upgrade-p'>Get faster, safer, more affordable cloud object stronge with no <br />centeral point of failure.</p>
               <div className='upgrade-checks'>
                <span className='upgrade-checks-span'><FaCheckCircle /> 100% Secure</span>
                <span className='upgrade-checks-span'><FaCheckCircle /> A Fraction of the Cost</span>
               </div>
               {/* Another secton  */}
               <div className='upgrade-checks2'>
                <span className='upgrade-checks-span'><FaCheckCircle /> 100% Secure</span>
                <span className='upgrade-checks-span'><FaCheckCircle /> A Fraction of the Cost</span>
               </div>
            </div>
            <div>
                <img src={upgradeImage} alt="" className='upgrade-img'/>
            </div>
        </div>
    </div>
  )
}

export default Upgrade