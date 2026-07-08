import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import GetAuote from "./pages/GetAuote";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Header />

      <main style={{ paddingTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<GetAuote />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
