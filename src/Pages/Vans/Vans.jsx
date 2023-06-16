import React, { useEffect, useState } from "react";
import "./Vans.css";
import Van from "../../Components/Van/Van";

function Vans() {
  const [vansList, setVansList] = useState([]);

  async function fetchVans() {
    const resp = await fetch("/api/vans")
    const data = (await resp.json());
    setVansList(data.vans);
  }

  useEffect(() => {
    fetchVans();
  }, []);

  // console.log(vansList);

  return (
    <div className="vans">
      <h1>Explore our van options</h1>
      <div className="filters">
        <div className="filter-tabs">
          <p>Simple</p>
          <p>Luxury</p>
          <p>Rugged</p>
        </div>
        <div className="clear">
          <p>Clear filters</p>
        </div>
      </div>

      <div className="van-list">
        {
          vansList.map((van)=>{
            return (
              <Van 
                key={van.id}
                {...van}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default Vans;
