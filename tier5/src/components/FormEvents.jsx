import { useState } from "react";

function FormEvents() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: ""
    });
    
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    
    // Validate realtime
    const validate = (name, value) => {
        const newErrors = { ...errors };
        
        switch(name) {
            case "name":
                if (!value.trim()) newErrors.name = "Vui lòng nhập tên";
                else if (value.length < 2) newErrors.name = "Tên phải có ít nhất 2 ký tự";
                else delete newErrors.name;
                break;
            case "email":
                if (!value) newErrors.email = "Vui lòng nhập email";
                else if (!value.includes("@")) newErrors.email = "Email phải có @";
                else delete newErrors.email;
                break;
            case "password":
                if (!value) newErrors.password = "Vui lòng nhập mật khẩu";
                else if (value.length < 6) newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
                else delete newErrors.password;
                // Validate confirm password
                if (formData.confirmPassword && value !== formData.confirmPassword) {
                    newErrors.confirmPassword = "Mật khẩu không khớp";
                } else if (formData.confirmPassword) {
                    delete newErrors.confirmPassword;
                }
                break;
            case "confirmPassword":
                if (!value) newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu";
                else if (value !== formData.password) newErrors.confirmPassword = "Mật khẩu không khớp";
                else delete newErrors.confirmPassword;
                break;
            default:
                break;
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        validate(name, value);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        
        // Validate all fields
        let isValid = true;
        Object.keys(formData).forEach(key => {
            if (!validate(key, formData[key])) isValid = false;
        });
        
        if (isValid && formData.password === formData.confirmPassword) {
            setSubmitted(true);
        } else {
            alert("Vui lòng sửa các lỗi trong form!");
        }
    }
    
    function handleReset() {
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            message: ""
        });
        setErrors({});
        setSubmitted(false);
    }
    
    if (submitted) {
        return (
            <div style={{ padding: "20px" }}>
                <div style={{ 
                    background: "linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)",
                    padding: "30px",
                    borderRadius: "10px",
                    textAlign: "center"
                }}>
                    <h2>🎉 Đăng ký thành công!</h2>
                    <div style={{ textAlign: "left", background: "white", padding: "20px", borderRadius: "8px", marginTop: "20px" }}>
                        <h3>Thông tin của bạn:</h3>
                        <p><strong>👤 Tên:</strong> {formData.name}</p>
                        <p><strong>📧 Email:</strong> {formData.email}</p>
                        <p><strong>💬 Tin nhắn:</strong> {formData.message || "Không có"}</p>
                    </div>
                    <button onClick={handleReset} style={buttonStyle}>Đăng ký mới</button>
                </div>
            </div>
        );
    }
    
    return (
        <div style={{ 
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
            <h2>📋 Form Events Demo</h2>
            
            <form onSubmit={handleSubmit}>
                {/* Name field */}
                <div style={inputGroupStyle}>
                    <label>👤 Tên: *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{...inputStyle, borderColor: errors.name ? "#e74c3c" : "#ddd"}}
                    />
                    {errors.name && <small style={{ color: "#e74c3c" }}>{errors.name}</small>}
                </div>
                
                {/* Email field */}
                <div style={inputGroupStyle}>
                    <label>📧 Email: *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{...inputStyle, borderColor: errors.email ? "#e74c3c" : "#ddd"}}
                    />
                    {errors.email && <small style={{ color: "#e74c3c" }}>{errors.email}</small>}
                </div>
                
                {/* Password field */}
                <div style={inputGroupStyle}>
                    <label>🔒 Mật khẩu: *</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{...inputStyle, borderColor: errors.password ? "#e74c3c" : "#ddd"}}
                    />
                    {errors.password && <small style={{ color: "#e74c3c" }}>{errors.password}</small>}
                </div>
                
                {/* Confirm Password field */}
                <div style={inputGroupStyle}>
                    <label>🔐 Xác nhận mật khẩu: *</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        style={{...inputStyle, borderColor: errors.confirmPassword ? "#e74c3c" : "#ddd"}}
                    />
                    {errors.confirmPassword && <small style={{ color: "#e74c3c" }}>{errors.confirmPassword}</small>}
                </div>
                
                {/* Message field */}
                <div style={inputGroupStyle}>
                    <label>💬 Tin nhắn:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        style={inputStyle}
                        placeholder="Nhập tin nhắn (không bắt buộc)..."
                    />
                </div>
                
                <div style={{ display: "flex", gap: "10px" }}>
                    <button type="submit" style={buttonStyle}>Đăng ký</button>
                    <button type="button" onClick={handleReset} style={{...buttonStyle, background: "#95a5a6"}}>Xóa form</button>
                </div>
            </form>
        </div>
    );
}

const inputGroupStyle = {
    marginBottom: "15px"
};

const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    marginTop: "5px"
};

const buttonStyle = {
    flex: 1,
    padding: "12px",
    background: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer"
};

export default FormEvents;