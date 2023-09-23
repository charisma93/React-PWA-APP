import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import InfoDetail from "./pages/info";
import ShipInfo from "./pages/shipInfo";
import DriverInfo from "./pages/driverLog";
import CheckingInfo from "./pages/checkingInfo";
import Dashboard from "./pages/yardDashboard";
import FinalLogCheck from "./pages/finalLogCheck";
import YardCheck from "./pages/yardCheck";
import YardGenSet from "./pages/yardGenset";
import YardDelivery from "./pages/yardDelivery";
import YardDashboard from "./pages/yardDashboard";
import Login from "./pages/login";
import Webcamera from "./pages/webcamera";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="back-img">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/info/:id" element={<InfoDetail />} />
          <Route path="/shipinfo" element={<ShipInfo />} />
          <Route path="/driverinfo" element={<DriverInfo />} />
          <Route path="/checkinginfo" element={<CheckingInfo />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/finallogcheck" element={<FinalLogCheck />} />
          <Route path="/yardcheck" element={<YardCheck />} />
          <Route path="/yardDashboard" element={<YardDashboard />} />
          <Route path="/yardgenset" element={<YardGenSet />} />
          <Route path="/yarddelivery" element={<YardDelivery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Webcamera" element={<Webcamera />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
