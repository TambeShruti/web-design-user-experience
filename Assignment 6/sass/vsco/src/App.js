import "./App.css";
import "./styles/sass/styles.css";
import Explore from "./pages/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./pages/Gallery/Gallery";
import SignupForm from "./components/auth/SingUp";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Create a history object
const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <div className="App">
        <Navbar />
        {/* <Explore /> */}
        <Routes>
          <Route path="/Explore" element={<Explore />} />{" "}
          <Route path="/Gallery" element={<Gallery />} />{" "}
          {/* <Route path="/Studio" element={<Studio />} />{" "} */}
          <Route path="/SignupForm" element={<SignupForm />} />{" "}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
