import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import "./HostVanInfo.css";

function HostVanInfo() {

  const { id } = useParams();

  const [vanInfo, setVanInfo] = useState(null);

  function fetchVanInfo() {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVanInfo(data.vans));
  }

  useEffect(() => {
    fetchVanInfo();
  }, [id]);

  const activeStyles={
    textDecoration:'underline',
    color: "#161616",
    fontWeight:'bold',
  }

  return (
    <div className="host-vaninfo-container">
      <p className="back-vans">
        <Link relative="path" to={".."}>&larr; Back to all vans</Link>
      </p>
      <div className="host-vaninfo">
        {
          vanInfo ? (
            <>
            <div className="info-head">
              <img src={vanInfo.imageUrl} alt="" />
              <div className="vaninfo-identity">
                <p className="van-type">{vanInfo.type}</p>
                <p className="van-name">{vanInfo.name}</p>
                <p className="price">
                  <span className="amount">${vanInfo.price}</span>
                  <span className="period">/day</span>
                </p>
              </div>
            </div>
            <div className="info-body">
                <nav className="host-nav">
                  <NavLink
                    to={`.`}
                    end
                    style={({isActive})=> (isActive?activeStyles:null)}
                  >
                    Details
                  </NavLink>
                  <NavLink
                    to={`pricing`}
                    style={({isActive})=> (isActive?activeStyles:null)}
                  >
                    Pricing
                  </NavLink>
                  <NavLink
                    to={`photos`}
                    style={({isActive})=> (isActive?activeStyles:null)}
                  >
                    Photos
                  </NavLink>
                </nav>

                <Outlet context={{vanInfo}}/>
            </div>
            </>
          ) : (
            <p className="loading">Loading</p>
          )
        }

      </div>
    </div>
  );
}

export default HostVanInfo;
