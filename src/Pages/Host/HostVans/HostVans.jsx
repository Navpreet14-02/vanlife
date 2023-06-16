import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function HostVans() {

  const [hostVans, setHostVans] = useState([])

  function fetchVans(){
    fetch('/api/host/vans')
      .then((res)=> res.json())
      .then((data)=> setHostVans(data.vans))
  }

  useEffect(() => {
    fetchVans();
  }, [])
  

  return (
    <div className='host-vans'>
      <h1>Your listed vans</h1>

      <ul className="list-vans">
        {
          hostVans.map((van)=>{
            return (
              <li>
                <Link key={van.id} to={`/host/vans/${van.id}`}>
              
                  <img src={van.imageUrl} alt="" />
                  <div className="van-info">
                    <p className="name">{van.name}</p>
                    <p className="price">${van.price}/day</p>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default HostVans