// QuotesView.jsx
import React from "react";
import { FaSearch, FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const QuotesView = ({
  searchTerm,
  setSearchTerm,
  filteredQuotes,
  handleDeleteQuote,
}) => {
  return (
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
                      <span className={`status-pill ${q.status.toLowerCase()}`}>
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
  );
};

export default QuotesView;
