import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import GetAuote from "./pages/GetAuote";
import Inspection from "./pages/servisecPages/Inspect";
import Certification from "./pages/servisecPages/Certificate";
import LoadTesting from "./pages/servisecPages/LoadTesting";
import Training from "./pages/servisecPages/Traning";

function App() {
  return (
    <>
      <Header />

      <main style={{ paddingTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/inspection" element={<Inspection />} />
          <Route path="/services/certification" element={<Certification />} />
          <Route path="/services/load-testing" element={<LoadTesting />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<GetAuote />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
