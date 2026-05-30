import { useState } from "react";

function TernaryDemo() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [score, setScore] = useState(75);
    const [stock, setStock] = useState(0);
    const [status, setStatus] = useState("online");
    
    return (
        <div style={{ padding: "20px" }}>
            <h1>🔀 Bài 2.2: Conditional Rendering (Ternary)</h1>
            
            {/* Đăng nhập */}
            <div style={{ background: "#f0f0f0", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>🔐 Trạng thái đăng nhập</h2>
                <p>{isLoggedIn ? "👋 Chào mừng bạn đã quay lại!" : "⚠️ Vui lòng đăng nhập để tiếp tục"}</p>
                <button 
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    style={{ padding: "8px 16px", cursor: "pointer" }}
                >
                    {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
                </button>
            </div>
            
            {/* Đánh giá điểm số */}
            <div style={{ background: "#e8f4f8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>📊 Kết quả học tập</h2>
                <p><strong>Điểm số:</strong> {score}</p>
                <p><strong>Kết quả:</strong> {score >= 5 ? "✅ Đậu" : "❌ Rớt"}</p>
                <p><strong>Xếp loại:</strong> {
                    score >= 9 ? "Xuất sắc 🏆" :
                    score >= 8 ? "Giỏi ⭐" :
                    score >= 7 ? "Khá 👍" :
                    score >= 5 ? "Trung bình 📘" : "Yếu 📖"
                }</p>
                <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    step="0.5"
                    value={score}
                    onChange={(e) => setScore(Number(e.target.value))}
                    style={{ width: "100%", marginTop: "10px" }}
                />
            </div>
            
            {/* Tồn kho */}
            <div style={{ background: "#e8f8e8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>📦 Tình trạng sản phẩm</h2>
                <p><strong>Số lượng tồn kho:</strong> {stock}</p>
                <p style={{ color: stock === 0 ? "red" : "green" }}>
                    {stock === 0 ? "❌ HẾT HÀNG" : `✅ Còn ${stock} sản phẩm`}
                </p>
                <button 
                    onClick={() => setStock(stock + 1)}
                    style={{ marginRight: "10px", padding: "8px 16px" }}
                >
                    Nhập hàng (+1)
                </button>
                <button 
                    onClick={() => setStock(stock > 0 ? stock - 1 : 0)}
                    style={{ padding: "8px 16px" }}
                >
                    Bán hàng (-1)
                </button>
            </div>
            
            {/* Trạng thái online/offline */}
            <div style={{ background: "#fff4e8", padding: "15px", borderRadius: "8px" }}>
                <h2>🟢 Trạng thái</h2>
                <p>
                    <span style={{ 
                        display: "inline-block",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: status === "online" ? "#2ecc71" : "#e74c3c",
                        marginRight: "8px"
                    }}></span>
                    {status === "online" ? "Đang hoạt động" : "Đang offline"}
                </p>
                <button 
                    onClick={() => setStatus(status === "online" ? "offline" : "online")}
                    style={{ padding: "8px 16px" }}
                >
                    Chuyển sang {status === "online" ? "Offline" : "Online"}
                </button>
            </div>
        </div>
    );
}

export default TernaryDemo;