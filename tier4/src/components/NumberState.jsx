import { useState } from "react";

function NumberState() {
    const [count, setCount] = useState(0);
    
    // Xác định màu sắc dựa vào giá trị
    const getColor = () => {
        if (count > 0) return "#2ecc71";
        if (count < 0) return "#e74c3c";
        return "#333";
    };
    
    return (
        <div style={{ 
            textAlign: "center", 
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
            <h2>🔢 Bộ đếm số</h2>
            
            <div style={{ margin: "20px 0" }}>
                <p style={{ 
                    fontSize: "48px", 
                    fontWeight: "bold",
                    color: getColor(),
                    transition: "color 0.3s"
                }}>
                    {count}
                </p>
                <p style={{ color: "#666" }}>
                    {count > 0 ? "📈 Số dương" : count < 0 ? "📉 Số âm" : "⚖️ Bằng 0"}
                </p>
            </div>
            
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={() => setCount(count + 1)} style={buttonStyle}>+1</button>
                <button onClick={() => setCount(count - 1)} style={buttonStyle}>-1</button>
                <button onClick={() => setCount(count + 5)} style={buttonStyle}>+5</button>
                <button onClick={() => setCount(count - 5)} style={buttonStyle}>-5</button>
                <button onClick={() => setCount(count * 2)} style={{...buttonStyle, background: "#f39c12"}}>×2</button>
                <button onClick={() => setCount(0)} style={{...buttonStyle, background: "#e74c3c"}}>Reset</button>
            </div>
            
            <div style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0", borderRadius: "5px" }}>
                <p>💡 <strong>Thử thách đã hoàn thành:</strong></p>
                <ul style={{ textAlign: "left", marginLeft: "20px" }}>
                    <li>✅ Nút "Tăng 5" và "Giảm 5"</li>
                    <li>✅ Hiển thị "Số dương/Số âm/Bằng 0"</li>
                    <li>✅ Màu sắc thay đổi: xanh &gt; 0, đỏ &lt; 0, đen = 0</li>
                </ul>
            </div>
        </div>
    );
}

const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    background: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s"
};

export default NumberState;