// Admin.jsx
import { useState, useEffect } from "react";
import Sidebar from "../components/Admin/Sidebar";
import TopBar from "./../components/Admin/TopBar";
import DashboardView from "./../components/Admin/DashboardView";
import QuotesView from "./../components/Admin/QuotesView";
import LoginView from "./../components/Admin/LoginView";
import "./Admin.css";

const Admin = () => {
  // حالة تسجيل الدخول
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");

  // حالات لوحة التحكم
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // قراءة الثيم والخط المخزنين أو تفعيل الافتراضي
  const [selectedTheme, setSelectedTheme] = useState(
    () => localStorage.getItem("appTheme") || "default",
  );
  const [selectedFont, setSelectedFont] = useState(
    () => localStorage.getItem("appFont") || "cairo",
  );

  // تطبيق الثيم والخط على HTML Root
  useEffect(() => {
    const root = document.documentElement;

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

    if (selectedTheme !== "default") {
      root.classList.add(`theme-${selectedTheme}`);
    }

    if (selectedFont) {
      root.classList.add(`font-${selectedFont}`);
    }

    localStorage.setItem("appTheme", selectedTheme);
    localStorage.setItem("appFont", selectedFont);
  }, [selectedTheme, selectedFont]);

  // بيانات عروض الأسعار
  const [quotes, setQuotes] = useState([
    {
      id: "QT-101",
      client: "Aramco Logistics",
      service: "Inspection",
      date: "2026-07-20",
      status: "Pending",
      amount: "$4,500",
    },
    {
      id: "QT-102",
      client: "Petrojet Egypt",
      service: "Supply",
      date: "2026-07-19",
      status: "Approved",
      amount: "$12,800",
    },
    {
      id: "QT-103",
      client: "Marine Tech Services",
      service: "Training",
      date: "2026-07-18",
      status: "Rejected",
      amount: "$1,200",
    },
    {
      id: "QT-104",
      client: "Suez Canal Lifting",
      service: "Project",
      date: "2026-07-15",
      status: "Approved",
      amount: "$32,000",
    },
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginData.email.trim().toLowerCase() === "admin@marine.com" &&
      loginData.password === "admin123"
    ) {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("البريد الإلكتروني أو كلمة السر غير صحيحة");
    }
  };

  const handleDeleteQuote = (id) => {
    if (window.confirm("هل أنت تأكد من حذف هذا الطلب؟")) {
      setQuotes(quotes.filter((q) => q.id !== id));
    }
  };

  const filteredQuotes = quotes.filter(
    (q) =>
      q.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.service.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // شاشة تسجيل الدخول
  if (!isAuthenticated) {
    return (
      <LoginView
        loginData={loginData}
        setLoginData={setLoginData}
        handleLogin={handleLogin}
        loginError={loginError}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    );
  }

  // لوحة التحكم الرئيسية
  return (
    <div className="admin-dashboard-container">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setIsAuthenticated={setIsAuthenticated}
      />

      <main className="admin-main-content">
        <TopBar
          activeTab={activeTab}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
        />

        {activeTab === "dashboard" && (
          <DashboardView quotes={quotes} setActiveTab={setActiveTab} />
        )}

        {activeTab === "quotes" && (
          <QuotesView
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filteredQuotes={filteredQuotes}
            handleDeleteQuote={handleDeleteQuote}
          />
        )}

        {(activeTab === "services" || activeTab === "users") && (
          <div className="content-box empty-state">
            <h3>
              قسم{" "}
              {activeTab === "services" ? "إدارة الخدمات" : "إدارة المستخدمين"}
            </h3>
            <p>يمكنك إضافة عناصر تحكم وتفاصيل إضافية لهذا القسم بسهولة.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
