// Sidebar.jsx
import {
  FaUserShield,
  FaChartBar,
  FaFileContract,
  FaBoxes,
  FaUsers,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({
  activeTab,
  setActiveTab,
  sidebarOpen,
  setSidebarOpen,
  setIsAuthenticated,
}) => {
  return (
    <>
      {sidebarOpen && (
        <div
          className="admin-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

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
    </>
  );
};

export default Sidebar;
