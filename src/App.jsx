import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Vans from "./Pages/Vans/Vans";
import VanDetails from "./Pages/VanDetails/VanDetails";
import Dashboard from "./Pages/Host/Dashboard/Dashboard";
import Income from "./Pages/Host/Income/Income";
import HostVans from "./Pages/Host/HostVans/HostVans";
import Reviews from "./Pages/Host/Reviews/Reviews";
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";
import HostVanInfo from "./Pages/Host/HostVanInfo/HostVanInfo";
import HostVanDetails from "./Pages/Host/HostVanInfo/HostVanDetails";
import HostVanPricing from "./Pages/Host/HostVanInfo/HostVanPricing";
import HostVanPhotos from "./Pages/Host/HostVanInfo/HostVanPhotos";

import "./server";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanInfo />} >
              <Route index element={<HostVanDetails/>}/>
              <Route path="pricing" element={<HostVanPricing />}/>
              <Route path="photos" element={<HostVanPhotos/>}/>
            </Route>

            
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
