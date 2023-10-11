import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Achievement } from "./components/Pages/Achievement";
import { Contact } from "./components/Pages/Contact";
import {Gallery} from "./components/Pages/Gallery";
import { Events } from "./components/Pages/Events";
import { Team } from "./components/Pages/Team";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/achievements" element={<Achievement/>} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
  </>
  );
}

export default App;
