// src/components/Admin/ArticlesView.jsx
import { useEffect, useState } from "react";
import {
  updateArticle,
  addArticle,
  getAllArticle,
  deleteArticle,
} from "../../services/article.service";

const ArticlesView = () => {
  const [formMode, setFormMode] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  // حالات نافذة الحذف
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "رفع ونقليات",
    content: "",
  });

  // جلب المقالات عند تحميل المكون
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await getAllArticle();
        if (Array.isArray(res)) {
          setArticles(res);
        } else if (res && Array.isArray(res.data)) {
          setArticles(res.data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const handleOpenAdd = () => {
    setFormMode("add");
    setEditingId(null);
    setFormData({ title: "", category: "رفع ونقليات", content: "" });
  };

  const handleOpenEdit = (articleObj) => {
    setFormMode("edit");
    setEditingId(articleObj.id || articleObj._id);
    setFormData({
      title: articleObj.title,
      category: articleObj.category,
      content: articleObj.content || "",
    });
  };

  const handleCloseForm = () => {
    setFormMode(null);
    setEditingId(null);
    setFormData({ title: "", category: "رفع ونقليات", content: "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    setLoading(true);
    try {
      if (formMode === "edit" && editingId) {
        console.log(editingId);
        const updated = await updateArticle(editingId, formData);
        setArticles(
          articles.map((art) =>
            (art.id || art._id) === editingId
              ? updated || { ...art, ...formData }
              : art,
          ),
        );
      } else if (formMode === "add") {
        const newArticleData = {
          ...formData,
          date: new Date().toISOString().split("T")[0],
        };
        const created = await addArticle(newArticleData);

        if (created) {
          setArticles([created, ...articles]);
        } else {
          setArticles([{ id: Date.now(), ...newArticleData }, ...articles]);
        }
      }

      handleCloseForm();
    } catch (error) {
      console.error("Error saving article:", error);
      alert("حدث خطأ أثناء حفظ المقالة.");
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = (articleObj) => {
    setArticleToDelete(articleObj);
    setDeleteModalOpen(true);
  };

  const executeDelete = async () => {
    if (articleToDelete) {
      const targetId = articleToDelete.id || articleToDelete._id;

      // 1. التحديث الفوري للواجهة محلياً
      setArticles(articles.filter((art) => (art.id || art._id) !== targetId));

      // 2. إرسال طلب الحذف للـ API
      try {
        console.log(targetId);
        await deleteArticle(targetId);
      } catch (err) {
        console.error("Error deleting from backend:", err);
      }

      // 3. إغلاق النافذة وتفريغ الحالة
      setDeleteModalOpen(false);
      setArticleToDelete(null);
    }
  };

  return (
    <div className="articles-view-container">
      {/* الهيدر وزر الإضافة */}
      <div className="content-box box-header" style={{ marginBottom: "20px" }}>
        <div>
          <h2 className="page-title" style={{ margin: 0 }}>
            إدارة المقالات
          </h2>
          <p style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>
            إضافة وتعديل مقالات الموقع والخدمات باحترافية
          </p>
        </div>

        <button
          onClick={() =>
            formMode === "add" ? handleCloseForm() : handleOpenAdd()
          }
          className="primary-action-btn"
          style={{
            background: formMode === "add" ? "#64748b" : "var(--primary-color)",
          }}
        >
          {formMode === "add" ? "إلغاء الإجراء" : "+ إضافة مقالة جديدة"}
        </button>
      </div>

      {/* الفورم */}
      {formMode && (
        <div className="article-form-wrapper">
          <h3>
            {formMode === "edit"
              ? "✏️ تعديل المقالة الحالية"
              : "➕ كتابة ونشر مقالة جديدة"}
          </h3>

          <form onSubmit={onSubmit} className="article-form">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "18px",
              }}
            >
              <div className="form-group-custom">
                <label>عنوان المقالة</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="اكتب عنوان المقالة هنا..."
                  className="form-input-custom"
                />
              </div>

              <div className="form-group-custom">
                <label>القسم</label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="form-select-custom"
                >
                  <option value="رفع ونقليات">رفع ونقليات</option>
                  <option value="أمن وسلامة">أمن وسلامة</option>
                  <option value="فحص واختبار">فحص واختبار</option>
                </select>
              </div>
            </div>

            <div className="form-group-custom">
              <label>المحتوى</label>
              <textarea
                rows="5"
                required
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                placeholder="اكتب محتوى المقالة بالتفصيل..."
                className="form-textarea-custom"
              ></textarea>
            </div>

            <div className="form-actions">
              <button
                type="button"
                onClick={handleCloseForm}
                className="custom-modal-btn-cancel"
                style={{ flex: "none", padding: "10px 20px" }}
              >
                إلغاء
              </button>

              <button
                type="submit"
                disabled={loading}
                className="primary-action-btn"
                style={{
                  background:
                    formMode === "edit" ? "#d97706" : "var(--primary-color)",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading
                  ? "جاري الحفظ..."
                  : formMode === "edit"
                    ? "حفظ التعديلات"
                    : "حفظ ونشر المقالة"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* جدول المقالات */}
      <div className="content-box">
        <div className="table-responsive">
          <table className="admin-table articles-table">
            <thead>
              <tr>
                <th>عنوان المقالة</th>
                <th>القسم</th>
                <th>التاريخ</th>
                <th style={{ textAlign: "center" }}>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(articles) &&
                articles.map((articleItem) => (
                  <tr key={articleItem.id || articleItem._id}>
                    <td style={{ fontWeight: "600" }}>{articleItem.title}</td>
                    <td>
                      <span className="category-badge-custom">
                        {articleItem.category}
                      </span>
                    </td>
                    <td style={{ fontSize: "13px", color: "#64748b" }}>
                      {articleItem.date}
                    </td>
                    <td>
                      <div className="actions-cell">
                        <button
                          onClick={() => handleOpenEdit(articleItem)}
                          className="action-btn edit"
                          title="تعديل"
                        >
                          ✏️
                        </button>

                        <button
                          onClick={() => confirmDelete(articleItem)}
                          className="action-btn delete"
                          title="حذف"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              {(!Array.isArray(articles) || articles.length === 0) && (
                <tr>
                  <td
                    colSpan="4"
                    style={{
                      textAlign: "center",
                      padding: "40px",
                      color: "#94a3b8",
                    }}
                  >
                    لا توجد مقالات مضافة حالياً.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* نافذة تأكيد الحذف */}
      {deleteModalOpen && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-card">
            <div className="custom-modal-icon-wrapper">⚠️</div>
            <h3 className="custom-modal-title">تأكيد الحذف</h3>
            <p className="custom-modal-desc">
              هل أنت متأكد من رغبتك في حذف المقالة: <br />
              <strong>"{articleToDelete?.title}"</strong>؟
            </p>
            <div className="custom-modal-actions">
              <button
                type="button"
                className="custom-modal-btn-cancel"
                onClick={() => setDeleteModalOpen(false)}
              >
                إلغاء
              </button>
              <button
                type="button"
                className="custom-modal-btn-confirm"
                onClick={executeDelete}
              >
                نعم، احذف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlesView;
