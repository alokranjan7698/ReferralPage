import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Referrals from "./components/Referrals";
import Referred from "./components/Referred";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<Referrals />} />
        <Route path="/referred" element={<Referred />} />
      </Routes>
    </div>
  );
}

export default App;
