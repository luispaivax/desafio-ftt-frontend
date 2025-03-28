import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout";
import Notifications from "./components/Notifications";
import OccupancyChart from "./components/OccupancyChart";
import Reservations from "./components/Reservations";
import ReserveForm from "./components/ReserveForm";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reserveform" element={<ReserveForm />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/occupancychart" element={<OccupancyChart />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

