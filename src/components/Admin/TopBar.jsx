// TopBar.jsx
import { FaBars, FaPalette, FaFont, FaBell } from "react-icons/fa";

const TopBar = ({
  activeTab,
  sidebarOpen,
  setSidebarOpen,
  selectedTheme,
  setSelectedTheme,
  selectedFont,
  setSelectedFont,
}) => {
  return (
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
        <div className="style-controls">
          <div className="style-group">
            <FaPalette className="ctrl-icon" title="اختر الثيم" />
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="theme-select"
            >
              <option value="default">افتراضي (Default)</option>
              <option value="navy">كحلي (Navy)</option>
              <option value="teal">تركواز (Teal)</option>
              <option value="purple">بنفسجي (Purple)</option>
              <option value="dark">داكن (Dark)</option>
            </select>
          </div>

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
            <span className="name">مدير النظام</span>
            <span className="role">Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
