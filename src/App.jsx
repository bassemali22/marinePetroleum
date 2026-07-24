import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getSiteSettings } from "./services/siteSettings.service";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import GetAuote from "./pages/GetAuote";
import Inspection from "./pages/servisecPages/Inspect";
import Certification from "./pages/servisecPages/Certificate";
import Training from "./pages/servisecPages/Traning";
import Supply from "./pages/servisecPages/Supply";
import Project from "./pages/servisecPages/Project";
import Admin from "./pages/Admin";

function App() {
  // جلب وتطبيق الإعدادات العامة للموقع فور تحميل أي صفحة أو عمل Refresh
  useEffect(() => {
    const fetchGlobalSettings = async () => {
      try {
        const data = await getSiteSettings();
        if (data) {
          const root = document.documentElement;

          // إزالة أي كلاسات قديمة للثيم والخط
          root.classList.remove(
            "theme-navy",
            "theme-teal",
            "theme-purple",
            "theme-dark",
            "font-cairo",
            "font-alexandria",
            "font-tajawal",
            "font-readex",
          );

          // تطبيق الثيم والخط المخزنين في قاعدة البيانات
          if (data.theme) root.classList.add(`theme-${data.theme}`);
          if (data.font) root.classList.add(`font-${data.font}`);
        }
      } catch (err) {
        console.error("فشل في جلب إعدادات الموقع العامة:", err);
      }
    };

    fetchGlobalSettings();
  }, []);

  return (
    <>
      <Header />

      <main style={{ paddingTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/certificate" element={<Gallery />} />
          <Route path="/services/inspection" element={<Inspection />} />
          <Route path="/services/project" element={<Project />} />
          <Route path="/services/supply" element={<Supply />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/services/certificate" element={<Certification />} />
          <Route path="/certificate" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<GetAuote />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
