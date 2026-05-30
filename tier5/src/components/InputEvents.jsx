import { useState } from "react";

function InputEvents() {
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    
    // Xử lý text (đếm ký tự và từ)
    function handleTextChange(event) {
        const newText = event.target.value;
        setText(newText);
        
        // Đếm từ (split theo khoảng trắng, lọc bỏ khoảng trống)
        const words = newText.trim().split(/\s+/).filter(word => word.length > 0);
        setWordCount(words.length);
    }
    
    // Xử lý email validation
    function handleEmailChange(event) {
        const newEmail = event.target.value;
        setEmail(newEmail);
    }
    
    const isValidEmail = email.includes("@") && email.includes(".");
    
    return (
        <div style={{ 
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
            <h2>📝 Input Events Demo</h2>
            
            {/* Basic input với đếm ký tự */}
            <div style={sectionStyle}>
                <h3>📊 Đếm ký tự và từ</h3>
                <textarea
                    value={text}
                    onChange={handleTextChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Nhập văn bản..."
                    rows={4}
                    style={{
                        width: "100%",
                        padding: "10px",
                        border: `2px solid ${isFocused ? "#3498db" : "#ddd"}`,
                        borderRadius: "5px",
                        fontSize: "14px",
                        outline: "none"
                    }}
                />
                <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
                    <p>📝 Ký tự: {text.length}</p>
                    <p>📚 Từ: {wordCount}</p>
                    {text.length > 80 && <p style={{ color: "red" }}>⚠️ Sắp hết giới hạn!</p>}
                </div>
            </div>
            
            {/* Email validation */}
            <div style={sectionStyle}>
                <h3>📧 Email validation</h3>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="example@email.com"
                    style={{
                        width: "100%",
                        padding: "10px",
                        border: `2px solid ${email ? (isValidEmail ? "#2ecc71" : "#e74c3c") : "#ddd"}`,
                        borderRadius: "5px",
                        fontSize: "14px"
                    }}
                />
                {email && (
                    <p style={{ color: isValidEmail ? "#2ecc71" : "#e74c3c", marginTop: "5px" }}>
                        {isValidEmail ? "✅ Email hợp lệ" : "❌ Email không hợp lệ (cần có @)"}
                    </p>
                )}
            </div>
            
            {/* Live preview */}
            <div style={sectionStyle}>
                <h3>👁️ Live preview</h3>
                <div style={{
                    background: "#f0f0f0",
                    padding: "15px",
                    borderRadius: "8px",
                    minHeight: "100px"
                }}>
                    {text ? (
                        <>
                            <p><strong>Nội dung:</strong> {text}</p>
                            <p><strong>Email:</strong> {email || "Chưa nhập"}</p>
                        </>
                    ) : (
                        <p style={{ color: "#999" }}>Nhập nội dung để xem preview...</p>
                    )}
                </div>
            </div>
            
            {/* Thử thách: Focus/Blur */}
            <div>
                <h3>🎯 Focus/Blur demo</h3>
                <input
                    onFocus={() => console.log("Input focused!")}
                    onBlur={() => console.log("Input blurred!")}
                    placeholder="Click vào đây rồi click ra ngoài..."
                    style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "5px"
                    }}
                />
                <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
                    💡 Mở console (F12) để xem log focus/blur
                </p>
            </div>
        </div>
    );
}

const sectionStyle = {
    marginBottom: "25px",
    paddingBottom: "20px",
    borderBottom: "1px solid #eee"
};

export default InputEvents;