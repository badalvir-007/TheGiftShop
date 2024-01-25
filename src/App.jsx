import "./App.css";
import Cakes from "./Pages/Cakes";
import Flower from "./Pages/Flower";
import Home from "./Pages/Home";
import Plant from "./Pages/Plant";
import Pencil from "./Pages/Pencil";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Camera from "./Pages/Camera";
import Music from "./Pages/Music";
import BulkCart from "./Pages/BulkCart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cakes" element={<Cakes />} />
  
        <Route path="Flower" element={<Flower />} />
        <Route path="Pencil" element={<Pencil />} />
        <Route path="Plant" element={<Plant />} />
        <Route path="Camera" element={<Camera />} />
        <Route path="Music" element={<Music />} />
        <Route path="BulkCart" element={<BulkCart />} />
      </Routes>
    </Router>
  );
  
}

export default App;
