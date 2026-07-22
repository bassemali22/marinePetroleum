import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"; // أو اسم الملف الذي أضفت فيه الكود العام

import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";

AOS.init({
  duration: 1000,
  once: true,
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  </StrictMode>,
);
