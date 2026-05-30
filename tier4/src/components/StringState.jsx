import { useState } from "react";

function StringState() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
    const maxLength = 50;
    const isValidEmail = email.includes("@") && email.includes(".");
    
    const handleSubmit = () => {
        if (name.trim() === "" || email.trim() === "" || password === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        if (!isValidEmail) {
            alert("Email không hợp lệ! Phải có @ và .");
            return;
        }
        setSubmitted(true);
    };
    
    if (submitted) {
        return (
            <div style={{ padding: "20px", textAlign: "center" }}>
                <div style={{ background: "#d4edda", padding: "20px", borderRadius: "10px" }}>
                    <h2>✅ Đăng ký thành công!</h2>
                    <p>Tên: {name}</p>
                    <p>Email: {email}</p>
                    <button onClick={() => {
                        setName("");
                        setEmail("");
                        setPassword("");
                        setSubmitted(false);
                    }}>Đăng ký mới</button>
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
            <h2>📝 Nhập thông tin</h2>
            
            {/* Tên */}
            <div style={inputGroupStyle}>
                <label>👤 Tên: </label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value.slice(0, maxLength))}
                    placeholder="Nhập tên..."
                    style={inputStyle}
                />
                <small style={{ color: "#666" }}>{name.length}/{maxLength}</small>
            </div>
            
            {/* Email */}
            <div style={inputGroupStyle}>
                <label>📧 Email: </label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com..."
                    style={{...inputStyle, borderColor: email ? (isValidEmail ? "#2ecc71" : "#e74c3c") : "#ddd"}}
                />
                {email && (
                    <small style={{ color: isValidEmail ? "#2ecc71" : "#e74c3c" }}>
                        {isValidEmail ? "✅ Email hợp lệ" : "❌ Email không hợp lệ (cần @ và .)"}
                    </small>
                )}
            </div>
            
            {/* Mật khẩu */}
            <div style={inputGroupStyle}>
                <label>🔒 Mật khẩu: </label>
                <div style={{ display: "flex", gap: "10px" }}>
                    <input 
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập mật khẩu..."
                        style={inputStyle}
                    />
                    <button onClick={() => setShowPassword(!showPassword)} style={smallButtonStyle}>
                        {showPassword ? "🙈 Ẩn" : "👁️ Hiện"}
                    </button>
                </div>
                <small>Mật khẩu có {password.length} ký tự</small>
            </div>
            
            {/* Preview */}
            {(name || email) && (
                <div style={{ 
                    marginTop: "20px", 
                    padding: "15px", 
                    background: "#e8f4f8", 
                    borderRadius: "8px",
                    textAlign: "center"
                }}>
                    <h3>👋 Xin chào {name || "bạn"}!</h3>
                    <p>Email của bạn là: {email || "chưa cập nhật"}</p>
                </div>
            )}
            
            <button onClick={handleSubmit} style={buttonStyle}>Đăng ký</button>
        </div>
    );
}

const inputGroupStyle = {
    marginBottom: "20px"
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

const smallButtonStyle = {
    padding: "0 15px",
    background: "#95a5a6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    whiteSpace: "nowrap"
};

export default StringState;