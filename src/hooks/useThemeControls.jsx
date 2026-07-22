import { useEffect, useState } from "react";

export function useThemeControls() {
  const [theme, setTheme] = useState("purple"); // theme-purple, theme-dark, theme-navy, theme-teal
  const [font, setFont] = useState("cairo"); // font-cairo, font-alexandria, font-tajawal, font-readex
  const [lang, setLang] = useState("ar"); // ar, en

  // 1️⃣ تغيير الثيم (الألوان)
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove(
      "theme-navy",
      "theme-teal",
      "theme-purple",
      "theme-dark",
    );
    if (theme) htmlElement.classList.add(`theme-${theme}`);
  }, [theme]);

  // 2️⃣ تغيير الخط
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove(
      "font-cairo",
      "font-alexandria",
      "font-tajawal",
      "font-readex",
    );
    if (font) htmlElement.classList.add(`font-${font}`);
  }, [font]);

  // 3️⃣ تغيير اللغة والاتجاه (RTL / LTR)
  useEffect(() => {
    const htmlElement = document.documentElement; // ✅ التصحيح هنا
    htmlElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    htmlElement.setAttribute("lang", lang);
  }, [lang]);

  return { theme, setTheme, font, setFont, lang, setLang };
}
