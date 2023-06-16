/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotos() {

  const {vanInfo} = useOutletContext();

  return (
    <div className='hostvan-image'>
      <img src={vanInfo.imageUrl} alt="van-image" />
    </div>
  )
}

export default HostVanPhotos