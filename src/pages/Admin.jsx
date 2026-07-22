import { useState, useEffect } from "react";
import {
  FaLock,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaSignOutAlt,
  FaChartBar,
  FaUsers,
  FaFileContract,
  FaBoxes,
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaBell,
  FaUserShield,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaPalette,
  FaFont,
  FaGlobe,
} from "react-icons/fa";
import "./Admin.css";

// 🌐 قاموس النصوص
const translations = {
  ar: {
    dashboard: "الإحصائيات",
    quotes: "عروض الأسعار",
    services: "إدارة الخدمات",
    users: "المستخدمين",
    logout: "تسجيل الخروج",
    titleDashboard: "لوحة الإحصائيات العامة",
    titleQuotes: "إدارة عروض الأسعار",
    titleServices: "إدارة الخدمات المقدمة",
    titleUsers: "إدارة فرق العمل والمستخدمين",
    systemManager: "مدير النظام",
    totalOrders: "إجمالي الطلبات",
    activeServices: "الخدمات النشطة",
    monthClients: "عملاء الشهر",
    latestQuotes: "أحدث طلبات عروض الأسعار",
    viewAll: "عرض الكل",
    searchPlaceholder: "بحث عن عميل أو خدمة أو رقم طلب...",
    addQuote: "إضافة طلب جديد",
    orderNo: "رقم الطلب",
    client: "اسم العميل",
    service: "نوع الخدمة",
    amount: "المبلغ المكتوب",
    date: "التاريخ",
    status: "الحالة",
    actions: "الإجراءات",
    loginTitle: "لوحة التحكم للأدمن",
    loginSubtitle: "سجل الدخول لإدارة الخدمات والطلبات",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    loginBtn: "تسجيل الدخول",
    pending: "قيد الانتظار",
    approved: "مقبول",
    rejected: "مرفوض",
  },
  en: {
    dashboard: "Dashboard",
    quotes: "Quotations",
    services: "Manage Services",
    users: "Users & Team",
    logout: "Logout",
    titleDashboard: "General Statistics Dashboard",
    titleQuotes: "Manage Price Quotations",
    titleServices: "Manage Offered Services",
    titleUsers: "Manage Team & Users",
    systemManager: "System Admin",
    totalOrders: "Total Orders",
    activeServices: "Active Services",
    monthClients: "Monthly Clients",
    latestQuotes: "Latest Quote Requests",
    viewAll: "View All",
    searchPlaceholder: "Search client, service or quote ID...",
    addQuote: "Add New Request",
    orderNo: "Quote ID",
    client: "Client Name",
    service: "Service Type",
    amount: "Amount",
    date: "Date",
    status: "Status",
    actions: "Actions",
    loginTitle: "Admin Dashboard",
    loginSubtitle: "Log in to manage services and requests",
    email: "Email Address",
    password: "Password",
    loginBtn: "Login",
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
  },
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // حالات التحكم (اللغة، الثيم، الخط)
  const [lang, setLang] = useState(
    () => localStorage.getItem("appLang") || "ar",
  );
  const [selectedTheme, setSelectedTheme] = useState(
    () => localStorage.getItem("appTheme") || "purple",
  );
  const [selectedFont, setSelectedFont] = useState(
    () => localStorage.getItem("appFont") || "cairo",
  );

  const t = translations[lang] || translations.ar;

  // 💡 تطبيق اللغة، الاتجاه، الخط والثيم بشكل ديناميكي ممتاز على جذر الصفحة
  useEffect(() => {
    const root = document.documentElement;

    // ضبط اتجاه الصفحة واللغة
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    // تنظيف الكلاسات السابقة لتجنب التداخل
    root.classList.remove(
      "theme-default",
      "theme-navy",
      "theme-teal",
      "theme-purple",
      "theme-dark",
      "font-cairo",
      "font-alexandria",
      "font-tajawal",
      "font-readex",
    );

    // إضافة الكلاسات الجديدة
    if (selectedTheme) {
      root.classList.add(`theme-${selectedTheme}`);
    }
    if (selectedFont) {
      root.classList.add(`font-${selectedFont}`);
    }

    localStorage.setItem("appLang", lang);
    localStorage.setItem("appTheme", selectedTheme);
    localStorage.setItem("appFont", selectedFont);
  }, [selectedTheme, selectedFont, lang]);

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
      setLoginError(
        lang === "ar"
          ? "البريد الإلكتروني أو كلمة السر غير صحيحة"
          : "Invalid email or password",
      );
    }
  };

  const handleDeleteQuote = (id) => {
    if (
      window.confirm(
        lang === "ar"
          ? "هل أنت متأكد من حذف هذا الطلب؟"
          : "Are you sure you want to delete this quote?",
      )
    ) {
      setQuotes(quotes.filter((q) => q.id !== id));
    }
  };

  const filteredQuotes = quotes.filter(
    (q) =>
      q.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.service.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper">
        <div className="login-card">
          <div className="login-header">
            <div className="login-badge">
              <FaUserShield />
            </div>
            <h2>{t.loginTitle}</h2>
            <p>{t.loginSubtitle}</p>
          </div>

          {loginError && <div className="login-error-msg">{loginError}</div>}

          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label>{t.email}</label>
              <div className="input-field">
                <FaEnvelope className="field-icon" />
                <input
                  type="email"
                  placeholder="admin@marine.com"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>{t.password}</label>
              <div className="input-field">
                <FaLock className="field-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="login-btn">
              {t.loginBtn}
            </button>
          </form>

          <div className="login-hint">
            <small>admin@marine.com / admin123</small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-container">
      {sidebarOpen && (
        <div
          className="admin-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          <FaUserShield className="brand-icon" />
          <span>Marine Admin</span>
          <button
            className="close-sidebar-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="sidebar-menu">
          <button
            className={`menu-item ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("dashboard");
              setSidebarOpen(false);
            }}
          >
            <FaChartBar /> <span>{t.dashboard}</span>
          </button>

          <button
            className={`menu-item ${activeTab === "quotes" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("quotes");
              setSidebarOpen(false);
            }}
          >
            <FaFileContract /> <span>{t.quotes}</span>
          </button>

          <button
            className={`menu-item ${activeTab === "services" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("services");
              setSidebarOpen(false);
            }}
          >
            <FaBoxes /> <span>{t.services}</span>
          </button>

          <button
            className={`menu-item ${activeTab === "users" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("users");
              setSidebarOpen(false);
            }}
          >
            <FaUsers /> <span>{t.users}</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <button
            className="logout-btn"
            onClick={() => setIsAuthenticated(false)}
          >
            <FaSignOutAlt /> <span>{t.logout}</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main-content">
        <header className="admin-top-bar">
          <div className="top-bar-left">
            <button
              className="toggle-sidebar-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FaBars />
            </button>
            <h1 className="page-title">
              {activeTab === "dashboard" && t.titleDashboard}
              {activeTab === "quotes" && t.titleQuotes}
              {activeTab === "services" && t.titleServices}
              {activeTab === "users" && t.titleUsers}
            </h1>
          </div>

          <div className="top-bar-right">
            {/* أدوات التحكم باللغة والثيم والخط */}
            <div className="style-controls">
              {/* اللغة */}
              <div className="style-group">
                <FaGlobe className="ctrl-icon" title="Language / اللغة" />
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="lang-select"
                >
                  <option value="ar">العربية (AR)</option>
                  <option value="en">English (EN)</option>
                </select>
              </div>

              {/* الثيم */}
              <div className="style-group">
                <FaPalette className="ctrl-icon" title="اختر الثيم" />
                <select
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="theme-select"
                >
                  <option value="purple">Purple</option>
                  <option value="navy">Navy</option>
                  <option value="teal">Teal</option>
                  <option value="dark">Dark</option>
                </select>
              </div>

              {/* الخط */}
              <div className="style-group">
                <FaFont className="ctrl-icon" title="اختر الخط" />
                <select
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className="font-select"
                >
                  <option value="cairo">Cairo</option>
                  <option value="alexandria">Alexandria</option>
                  <option value="tajawal">Tajawal</option>
                  <option value="readex">Readex Pro</option>
                </select>
              </div>
            </div>

            <div className="notification-icon">
              <FaBell />
              <span className="badge">3</span>
            </div>

            <div className="user-profile">
              <div className="avatar">AD</div>
              <div className="info">
                <span className="name">{t.systemManager}</span>
                <span className="role">Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        {activeTab === "dashboard" && (
          <div className="dashboard-view">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon icon-blue">
                  <FaFileContract />
                </div>
                <div className="stat-details">
                  <h3>{t.totalOrders}</h3>
                  <p className="number">128</p>
                  <span className="trend positive">+12%</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon icon-green">
                  <FaBoxes />
                </div>
                <div className="stat-details">
                  <h3>{t.activeServices}</h3>
                  <p className="number">14</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon icon-orange">
                  <FaUsers />
                </div>
                <div className="stat-details">
                  <h3>{t.monthClients}</h3>
                  <p className="number">45</p>
                </div>
              </div>
            </div>

            <div className="content-box">
              <div className="box-header">
                <h2>{t.latestQuotes}</h2>
                <button
                  className="view-all-btn"
                  onClick={() => setActiveTab("quotes")}
                >
                  {t.viewAll} <FaChevronRight />
                </button>
              </div>

              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>{t.orderNo}</th>
                      <th>{t.client}</th>
                      <th>{t.service}</th>
                      <th>{t.date}</th>
                      <th>{t.status}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quotes.slice(0, 3).map((q) => (
                      <tr key={q.id}>
                        <td>
                          <strong>{q.id}</strong>
                        </td>
                        <td>{q.client}</td>
                        <td>{q.service}</td>
                        <td>{q.date}</td>
                        <td>
                          <span
                            className={`status-pill ${q.status.toLowerCase()}`}
                          >
                            {t[q.status.toLowerCase()]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Quotes Tab */}
        {activeTab === "quotes" && (
          <div className="quotes-view">
            <div className="content-box">
              <div className="table-actions">
                <div className="search-box">
                  <FaSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <button className="primary-action-btn">
                  <FaPlus /> {t.addQuote}
                </button>
              </div>

              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>{t.orderNo}</th>
                      <th>{t.client}</th>
                      <th>{t.service}</th>
                      <th>{t.amount}</th>
                      <th>{t.date}</th>
                      <th>{t.status}</th>
                      <th>{t.actions}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredQuotes.length > 0 ? (
                      filteredQuotes.map((q) => (
                        <tr key={q.id}>
                          <td>
                            <strong>{q.id}</strong>
                          </td>
                          <td>{q.client}</td>
                          <td>{q.service}</td>
                          <td>{q.amount}</td>
                          <td>{q.date}</td>
                          <td>
                            <span
                              className={`status-pill ${q.status.toLowerCase()}`}
                            >
                              {t[q.status.toLowerCase()]}
                            </span>
                          </td>
                          <td className="actions-cell">
                            <button className="action-btn edit" title="تعديل">
                              <FaEdit />
                            </button>
                            <button
                              className="action-btn delete"
                              title="حذف"
                              onClick={() => handleDeleteQuote(q.id)}
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="no-data">
                          {lang === "ar"
                            ? "لا توجد نتائج تطابق بحثك."
                            : "No matching results found."}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {(activeTab === "services" || activeTab === "users") && (
          <div className="content-box empty-state">
            <h3>{activeTab === "services" ? t.services : t.users}</h3>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
