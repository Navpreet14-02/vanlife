import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanDetails() {

  const {vanInfo} = useOutletContext();

  return (
    <div className='hostvan-details'>
      <p><span className="property">Name:</span> {vanInfo.name}</p>
      <p><span className="property">Category:</span> {vanInfo.type}</p>
      <p><span className="property">Description:</span> {vanInfo.description}</p>
      <p><span className="property">Visibility:</span> Public</p>
    </div>
  )
}

export default HostVanDetails