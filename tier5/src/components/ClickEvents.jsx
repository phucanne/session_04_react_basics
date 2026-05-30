import { useState } from "react";

function ClickEvents() {
    const [message, setMessage] = useState("Chưa click");
    const [clickCount, setClickCount] = useState(0);
    const [likeCount, setLikeCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [bgColor, setBgColor] = useState("#f0f0f0");
    
    // Các hàm xử lý
    function handleClick() {
        setMessage("✅ Đã click lúc " + new Date().toLocaleTimeString());
        setClickCount(clickCount + 1);
    }
    
    function handleReset() {
        setMessage("🔄 Đã reset!");
        setClickCount(0);
    }
    
    function handleLike() {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    }
    
    function handleColorChange() {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setBgColor(randomColor);
    }
    
    return (
        <div style={{ 
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
            <h2>🖱️ Click Events Demo</h2>
            
            {/* Thử thách 1: Đổi màu ngẫu nhiên */}
            <div style={{ marginBottom: "20px" }}>
                <h3>🎨 Thử thách 1: Đổi màu ngẫu nhiên</h3>
                <div style={{
                    background: bgColor,
                    width: "200px",
                    height: "100px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                    transition: "background 0.3s"
                }}>
                    <span style={{ background: "rgba(255,255,255,0.8)", padding: "5px", borderRadius: "5px" }}>
                        Màu: {bgColor}
                    </span>
                </div>
                <button onClick={handleColorChange} style={buttonStyle}>
                    🎲 Đổi màu ngẫu nhiên
                </button>
            </div>
            
            {/* Click counter chính */}
            <div style={{ marginBottom: "20px" }}>
                <h3>📊 Click counter chính</h3>
                <p style={{ fontSize: "18px" }}>{message}</p>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>Số lần click: {clickCount}</p>
                <button onClick={handleClick} style={buttonStyle}>Click me!</button>
                <button onClick={handleReset} style={{...buttonStyle, background: "#e74c3c"}}>Reset</button>
            </div>
            
            {/* Thử thách 2: Like button */}
            <div style={{ marginBottom: "20px" }}>
                <h3>❤️ Thử thách 2: Like button</h3>
                <button 
                    onClick={handleLike}
                    style={{
                        ...buttonStyle,
                        background: isLiked ? "#e74c3c" : "#95a5a6",
                        fontSize: "18px",
                        padding: "10px 20px"
                    }}
                >
                    {isLiked ? "❤️ Đã thích" : "🤍 Thích"} ({likeCount})
                </button>
            </div>
            
            {/* Thử thách 3: Nút tăng giảm */}
            <div>
                <h3>➕ Thử thách 3: Nút tăng/giảm riêng biệt</h3>
                <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                    <CounterButton label="Nút A" />
                    <CounterButton label="Nút B" />
                    <CounterButton label="Nút C" />
                </div>
            </div>
        </div>
    );
}

// Component con cho thử thách 2
function CounterButton({ label }) {
    const [count, setCount] = useState(0);
    return (
        <div style={{ textAlign: "center" }}>
            <p><strong>{label}</strong></p>
            <p style={{ fontSize: "24px" }}>{count}</p>
            <button onClick={() => setCount(count + 1)} style={smallButtonStyle}>+1</button>
        </div>
    );
}

const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    background: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px"
};

const smallButtonStyle = {
    padding: "5px 15px",
    background: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

export default ClickEvents;