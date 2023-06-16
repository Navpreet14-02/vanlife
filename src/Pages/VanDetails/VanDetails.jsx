import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./VanDetails.css";

function VanDetails() {
  const { id } = useParams();

  const [vanInfo, setVanInfo] = useState(null);

  function fetchVanDetails() {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVanInfo(data.vans));
  }

  useEffect(() => {
    fetchVanDetails();
  }, [id]);

  // console.log(vanInfo);

  return (
    <div className="van-detail-container">
      {vanInfo ? (
        <div className="van-details">
          <p className="back-vans">
            <Link to={"/vans"}>&larr; Back to all vans</Link>
          </p>
          <div className="van-content">
            <div>
              <img src={vanInfo.imageUrl} alt="" className="van-img" />
            </div>
            <div className="details">
              <p className="van-type">{vanInfo.type}</p>
              <p className="van-name">{vanInfo.name}</p>
              <p className="price">
                <span className="amount">${vanInfo.price}</span>
                <span className="period">/day</span>
              </p>
              <p className="van-desc">{vanInfo.description}</p>
              <button className="rent-van">Rent this van</button>
            </div>
          </div>
        </div>
      ) : (
        <p className="loading">Loading</p>
      )}
    </div>
  );
}

export default VanDetails;
