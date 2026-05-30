import { useState } from "react";

function MultipleStates() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [isStudent, setIsStudent] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
    // Validation
    const isValidAge = age !== "" && parseInt(age) > 0 && parseInt(age) < 100;
    const isValidEmail = email.includes("@") && email.includes(".");
    const isFormValid = name.trim() !== "" && isValidAge && isValidEmail;
    
    const handleSubmit = () => {
        if (!isFormValid) {
            if (name.trim() === "") alert("Vui lòng nhập tên!");
            else if (!isValidAge) alert("Tuổi phải từ 1-99!");
            else if (!isValidEmail) alert("Email không hợp lệ!");
            return;
        }
        setSubmitted(true);
    };
    
    const handleReset = () => {
        setName("");
        setAge("");
        setEmail("");
        setIsStudent(false);
        setSubmitted(false);
    };
    
    if (submitted) {
        return (
            <div style={{ 
                padding: "20px",
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}>
                <div style={{ 
                    background: "linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)",
                    padding: "30px",
                    borderRadius: "10px",
                    textAlign: "center"
                }}>
                    <h2>🎉 Đăng ký thành công!</h2>
                    <div style={{ textAlign: "left", marginTop: "20px", background: "white", padding: "20px", borderRadius: "8px" }}>
                        <p><strong>👤 Tên:</strong> {name}</p>
                        <p><strong>🎂 Tuổi:</strong> {age}</p>
                        <p><strong>📧 Email:</strong> {email}</p>
                        <p><strong>🎓 Sinh viên:</strong> {isStudent ? "Có" : "Không"}</p>
                    </div>
                    <p style={{ marginTop: "20px", fontSize: "18px" }}>
                        👋 Xin chào {name}! Chào mừng bạn đến với khóa học React!
                    </p>
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
            <h2>📝 Form đăng ký</h2>
            
            <div style={inputGroupStyle}>
                <label>👤 Tên: </label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên của bạn..."
                    style={inputStyle}
                />
                {name && <small>✓</small>}
            </div>
            
            <div style={inputGroupStyle}>
                <label>🎂 Tuổi: </label>
                <input 
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Nhập tuổi (1-99)"
                    style={{...inputStyle, borderColor: age && !isValidAge ? "#e74c3c" : "#ddd"}}
                />
                {age && !isValidAge && (
                    <small style={{ color: "#e74c3c" }}>Tuổi phải từ 1 đến 99!</small>
                )}
            </div>
            
            <div style={inputGroupStyle}>
                <label>📧 Email: </label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    style={{...inputStyle, borderColor: email && !isValidEmail ? "#e74c3c" : "#ddd"}}
                />
                {email && !isValidEmail && (
                    <small style={{ color: "#e74c3c" }}>Email phải có @ và .</small>
                )}
            </div>
            
            <div style={inputGroupStyle}>
                <label>
                    <input 
                        type="checkbox"
                        checked={isStudent}
                        onChange={(e) => setIsStudent(e.target.checked)}
                    />
                    🎓 Là sinh viên
                </label>
            </div>
            
            <button 
                onClick={handleSubmit} 
                style={{
                    ...buttonStyle,
                    background: isFormValid ? "#2ecc71" : "#95a5a6",
                    cursor: isFormValid ? "pointer" : "not-allowed"
                }}
                disabled={!isFormValid}
            >
                {isFormValid ? "✅ Đăng ký" : "⛔ Vui lòng điền đầy đủ"}
            </button>
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
    background: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px"
};

export default MultipleStates;