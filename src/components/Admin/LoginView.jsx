// LoginView.jsx
import React from "react";
import {
  FaUserShield,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const LoginView = ({
  loginData,
  setLoginData,
  handleLogin,
  loginError,
  showPassword,
  setShowPassword,
}) => {
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
};

export default LoginView;
