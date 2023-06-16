import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPricing() {

  const {vanInfo} = useOutletContext();

  return (
    <div className='hostvan-pricing'>
      <p>
        <span className="amount">${(vanInfo.price).toFixed(2)}</span>
        <span className="period">/day</span>
      </p>
    </div>
  )
}

export default HostVanPricing