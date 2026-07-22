import React, { useState, useEffect } from "react";
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
} from "react-icons/fa";
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

  // 💡 تطبيق الثيم والخط على HTML Root
  useEffect(() => {
    const root = document.documentElement;

    // 1. إزالة الكلاسات القديمة بالكامل
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

    // 2. تطبيق كلاس الثيم فقط إذا لم يكن "default"
    if (selectedTheme !== "default") {
      root.classList.add(`theme-${selectedTheme}`);
    }

    // 3. تطبيق كلاس الخط
    if (selectedFont) {
      root.classList.add(`font-${selectedFont}`);
    }

    // 4. حفظ التفضيلات
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

  /* =========================================================
      شاشة تسجيل الدخول
     ========================================================= */
  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper">
        <div className="login-card">
          <div className="login-header">
            <div className="login-badge">
              <FaUserShield />
            </div>
            <h2>لوحة التحكم للأدمن</h2>
            <p>سجل الدخول لإدارة الخدمات والطلبات</p>
          </div>

          {loginError && <div className="login-error-msg">{loginError}</div>}

          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label>البريد الإلكتروني</label>
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
              <label>كلمة المرور</label>
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
              تسجيل الدخول
            </button>
          </form>

          <div className="login-hint">
            <small>بيانات تجريبية: admin@marine.com / admin123</small>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
      لوحة التحكم الرئيسية
     ========================================================= */
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
            <FaChartBar /> الإحصائيات
          </button>

          <button
            className={`menu-item ${activeTab === "quotes" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("quotes");
              setSidebarOpen(false);
            }}
          >
            <FaFileContract /> عروض الأسعار
          </button>

          <button
            className={`menu-item ${activeTab === "services" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("services");
              setSidebarOpen(false);
            }}
          >
            <FaBoxes /> إدارة الخدمات
          </button>

          <button
            className={`menu-item ${activeTab === "users" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("users");
              setSidebarOpen(false);
            }}
          >
            <FaUsers /> المستخدمين
          </button>
        </nav>

        <div className="sidebar-footer">
          <button
            className="logout-btn"
            onClick={() => setIsAuthenticated(false)}
          >
            <FaSignOutAlt /> تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Main Panel View */}
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
              {activeTab === "dashboard" && "لوحة الإحصائيات العامة"}
              {activeTab === "quotes" && "إدارة عروض الأسعار"}
              {activeTab === "services" && "إدارة الخدمات المقدمة"}
              {activeTab === "users" && "إدارة فرق العمل والمستخدمين"}
            </h1>
          </div>

          <div className="top-bar-right">
            {/* 🎨 أزرار التحكم بالخط والألوان الشاملة للموقع */}
            <div className="style-controls">
              <div className="style-group">
                <FaPalette className="ctrl-icon" title="اختر الثيم" />
                <select
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="theme-select"
                >
                  <option value="default">افتراضي الموقع (Default)</option>
                  <option value="navy">كحلي بحري (Navy)</option>
                  <option value="teal">تركواز فخم (Teal)</option>
                  <option value="purple">بنفسجي رويال (Purple)</option>
                  <option value="dark">داكن احترافي (Dark)</option>
                </select>
              </div>

              <div className="style-group">
                <FaFont className="ctrl-icon" title="اختر الخط" />
                <select
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className="font-select"
                >
                  <option value="cairo">خط Cairo</option>
                  <option value="alexandria">خط Alexandria</option>
                  <option value="tajawal">خط Tajawal</option>
                  <option value="readex">خط Readex Pro</option>
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
                <span className="name">مدير النظام</span>
                <span className="role">Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* 📊 Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="dashboard-view">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon icon-blue">
                  <FaFileContract />
                </div>
                <div className="stat-details">
                  <h3>إجمالي الطلبات</h3>
                  <p className="number">128</p>
                  <span className="trend positive">+12% هذا الشهر</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon icon-green">
                  <FaBoxes />
                </div>
                <div className="stat-details">
                  <h3>الخدمات النشطة</h3>
                  <p className="number">14</p>
                  <span className="trend">4 أقسام رئيسية</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon icon-orange">
                  <FaUsers />
                </div>
                <div className="stat-details">
                  <h3>عملاء الشهر</h3>
                  <p className="number">45</p>
                  <span className="trend positive">+5 عملاء جدد</span>
                </div>
              </div>
            </div>

            <div className="content-box">
              <div className="box-header">
                <h2>أحدث طلبات عروض الأسعار</h2>
                <button
                  className="view-all-btn"
                  onClick={() => setActiveTab("quotes")}
                >
                  عرض الكل <FaChevronRight />
                </button>
              </div>

              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>رقم الطلب</th>
                      <th>العميل</th>
                      <th>الخدمة</th>
                      <th>التاريخ</th>
                      <th>الحالة</th>
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
                            {q.status}
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

        {/* 📑 Quotes Tab */}
        {activeTab === "quotes" && (
          <div className="quotes-view">
            <div className="content-box">
              <div className="table-actions">
                <div className="search-box">
                  <FaSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="بحث عن عميل أو خدمة أو رقم طلب..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <button className="primary-action-btn">
                  <FaPlus /> إضافة طلب جديد
                </button>
              </div>

              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>رقم الطلب</th>
                      <th>اسم العميل</th>
                      <th>نوع الخدمة</th>
                      <th>المبلغ المكتوب</th>
                      <th>التاريخ</th>
                      <th>الحالة</th>
                      <th>الإجراءات</th>
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
                              {q.status}
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
                          لا توجد نتائج تطابق بحثك.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 📦 Other Tabs */}
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
