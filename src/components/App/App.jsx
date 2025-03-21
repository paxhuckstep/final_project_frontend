import "./App.css";
import Header from "../Header/Header";
import { Routes, Route } from "react-router";
import Home from "../Home/Home";
import About from "../About/About";
import Leaderboards from "../Leaderboards/Leaderboards";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/leaderboards" element={<Leaderboards />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
