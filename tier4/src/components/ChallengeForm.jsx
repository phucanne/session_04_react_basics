import { useState } from "react";

function ChallengeForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        email: "",
        phone: "",
        address: "",
        isStudent: false,
        newsletter: true
    });
    
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    
    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Vui lòng nhập họ tên";
        if (!formData.age || formData.age < 1 || formData.age > 120) newErrors.age = "Tuổi phải từ 1-120";
        if (!formData.email || !formData.email.includes("@")) newErrors.email = "Email không hợp lệ";
        if (!formData.phone || formData.phone.length < 9) newErrors.phone = "Số điện thoại không hợp lệ";
        return newErrors;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
        } else {
            setErrors(newErrors);
        }
    };
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
        // Xóa lỗi khi người dùng sửa
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };
    
    if (submitted) {
        return (
            <div style={{ padding: "20px" }}>
                <div style={{ background: "#d4edda", padding: "20px", borderRadius: "10px" }}>
                    <h2>🎉 Đăng ký thành công!</h2>
                    <div style={{ background: "white", padding: "15px", borderRadius: "8px", marginTop: "15px" }}>
                        <h3>Thông tin của bạn:</h3>
                        <p><strong>Họ tên:</strong> {formData.fullName}</p>
                        <p><strong>Tuổi:</strong> {formData.age}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Điện thoại:</strong> {formData.phone}</p>
                        <p><strong>Địa chỉ:</strong> {formData.address || "Chưa cập nhật"}</p>
                        <p><strong>Sinh viên:</strong> {formData.isStudent ? "Có" : "Không"}</p>
                        <p><strong>Nhận tin:</strong> {formData.newsletter ? "Có" : "Không"}</p>
                    </div>
                    <button onClick={() => {
                        setFormData({
                            fullName: "", age: "", email: "", phone: "", address: "",
                            isStudent: false, newsletter: true
                        });
                        setSubmitted(false);
                    }} style={buttonStyle}>Đăng ký mới</button>
                </div>
            </div>
        );
    }
    
    return (
        <div style={{ padding: "20px", background: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
            <h2>📝 Form đăng ký chi tiết</h2>
            <form onSubmit={handleSubmit}>
                <div style={inputGroupStyle}>
                    <label>👤 Họ tên: *</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        style={{...inputStyle, borderColor: errors.fullName ? "#e74c3c" : "#ddd"}}
                    />
                    {errors.fullName && <small style={{ color: "#e74c3c" }}>{errors.fullName}</small>}
                </div>
                
                <div style={inputGroupStyle}>
                    <label>🎂 Tuổi: *</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        style={{...inputStyle, borderColor: errors.age ? "#e74c3c" : "#ddd"}}
                    />
                    {errors.age && <small style={{ color: "#e74c3c" }}>{errors.age}</small>}
                </div>
                
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
                
                <div style={inputGroupStyle}>
                    <label>📱 Số điện thoại: *</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{...inputStyle, borderColor: errors.phone ? "#e74c3c" : "#ddd"}}
                    />
                    {errors.phone && <small style={{ color: "#e74c3c" }}>{errors.phone}</small>}
                </div>
                
                <div style={inputGroupStyle}>
                    <label>🏠 Địa chỉ:</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="2"
                        style={inputStyle}
                    />
                </div>
                
                <div style={inputGroupStyle}>
                    <label>
                        <input
                            type="checkbox"
                            name="isStudent"
                            checked={formData.isStudent}
                            onChange={handleChange}
                        />
                        🎓 Là sinh viên
                    </label>
                </div>
                
                <div style={inputGroupStyle}>
                    <label>
                        <input
                            type="checkbox"
                            name="newsletter"
                            checked={formData.newsletter}
                            onChange={handleChange}
                        />
                        📧 Nhận bản tin hàng tuần
                    </label>
                </div>
                
                <button type="submit" style={buttonStyle}>Đăng ký</button>
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
    width: "100%",
    padding: "12px",
    background: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px"
};

export default ChallengeForm;