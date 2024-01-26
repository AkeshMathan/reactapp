import "./App.css";
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./components/experience";
import About from "./components/about";
import Login from "./components/login";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
