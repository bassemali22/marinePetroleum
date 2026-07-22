// DashboardView.jsx
import {
  FaFileContract,
  FaBoxes,
  FaUsers,
  FaChevronRight,
} from "react-icons/fa";

const DashboardView = ({ quotes, setActiveTab }) => {
  return (
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
                    <span className={`status-pill ${q.status.toLowerCase()}`}>
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
  );
};

export default DashboardView;
