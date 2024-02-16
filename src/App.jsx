import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Products from "./pages/Products.jsx";

function App() {
  return (
    <div className="flex">
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
