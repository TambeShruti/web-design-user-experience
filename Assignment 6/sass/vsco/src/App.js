import "./App.css";
import "./styles/sass/styles.css";
import Explore from "./pages/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./pages/Gallery/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Explore /> */}
        <Routes>
          <Route path="/Explore" element={<Explore />} />{" "}
          <Route path="/Gallery" element={<Gallery />} />{" "}
          {/* <Route path="/Studio" element={<Studio />} />{" "} */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
