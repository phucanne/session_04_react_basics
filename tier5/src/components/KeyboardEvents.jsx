import { useState, useEffect } from "react";

function KeyboardEvents() {
    const [lastKey, setLastKey] = useState("");
    const [log, setLog] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [targetKey, setTargetKey] = useState("");
    const [gameScore, setGameScore] = useState(0);
    const [gameMessage, setGameMessage] = useState("");
    
    // Khởi tạo target key cho game
    useEffect(() => {
        generateRandomKey();
    }, [gameScore]);
    
    function generateRandomKey() {
        const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                      "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        setTargetKey(keys[Math.floor(Math.random() * keys.length)]);
    }
    
    // Xử lý phím toàn trang
    function handleGlobalKeyDown(event) {
        const key = event.key;
        setLastKey(key);
        setLog(prev => [...prev.slice(-5), key]);
        
        // Thử thách 1: Game đoán phím
        if (targetKey && key.toLowerCase() === targetKey) {
            setGameScore(prev => prev + 10);
            setGameMessage("🎉 Đúng rồi! +10 điểm");
            generateRandomKey();
            setTimeout(() => setGameMessage(""), 1000);
        }
        
        // Thử thách 2: Di chuyển ô vuông với phím mũi tên
        const step = 20;
        switch(key) {
            case "ArrowUp":
                setPosition(prev => ({ ...prev, y: prev.y - step }));
                break;
            case "ArrowDown":
                setPosition(prev => ({ ...prev, y: prev.y + step }));
                break;
            case "ArrowLeft":
                setPosition(prev => ({ ...prev, x: prev.x - step }));
                break;
            case "ArrowRight":
                setPosition(prev => ({ ...prev, x: prev.x + step }));
                break;
            default:
                break;
        }
        
        // Thử thách 3: Ctrl + D để đổi màu nền
        if (event.ctrlKey && key === "d") {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = randomColor;
            setGameMessage("🎨 Đã đổi màu nền!");
            setTimeout(() => setGameMessage(""), 1000);
        }
    }
    
    // Xử lý phím trong input
    function handleInputKeyDown(event) {
        if (event.key === "Enter") {
            if (inputValue.trim() !== "") {
                alert("✅ Bạn nhập: " + inputValue);
                setInputValue("");
            }
        }
        
        if (event.key === "Escape") {
            setInputValue("");
        }
    }
    
    return (
        <div 
            style={{ 
                padding: "20px",
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}
            onKeyDown={handleGlobalKeyDown}
            tabIndex={0}
        >
            <h2>⌨️ Keyboard Events Demo</h2>
            
            {/* Hiển thị phím đã nhấn */}
            <div style={sectionStyle}>
                <h3>🔑 Phím đã nhấn</h3>
                <p style={{ fontSize: "24px", fontWeight: "bold", color: "#3498db" }}>
                    {lastKey || "Chưa nhấn phím nào"}
                </p>
                <p>Log (5 phím gần nhất): <strong>{log.join(" → ")}</strong></p>
                <p style={{ fontSize: "12px", color: "#666" }}>
                    💡 Hãy thử nhấn các phím trên bàn phím!
                </p>
            </div>
            
            {/* Thử thách 1: Game đoán phím */}
            <div style={sectionStyle}>
                <h3>🎮 Thử thách 1: Game đoán phím</h3>
                <div style={{
                    background: "#2c3e50",
                    color: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    textAlign: "center"
                }}>
                    <p>Nhấn phím:</p>
                    <p style={{ fontSize: "48px", fontWeight: "bold", letterSpacing: "10px" }}>
                        {targetKey.toUpperCase()}
                    </p>
                    <p>Điểm: {gameScore}</p>
                    {gameMessage && <p style={{ color: "#2ecc71" }}>{gameMessage}</p>}
                </div>
            </div>
            
            {/* Thử thách 2: Di chuyển ô vuông */}
            <div style={sectionStyle}>
                <h3>⬆️ Thử thách 2: Di chuyển ô vuông (phím mũi tên)</h3>
                <div style={{
                    position: "relative",
                    background: "#f0f0f0",
                    height: "200px",
                    borderRadius: "10px",
                    overflow: "hidden"
                }}>
                    <div style={{
                        position: "absolute",
                        left: position.x,
                        top: position.y,
                        width: "50px",
                        height: "50px",
                        background: "#e74c3c",
                        borderRadius: "8px",
                        transition: "all 0.1s"
                    }}></div>
                </div>
                <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
                    💡 Dùng phím ↑ ↓ ← → để di chuyển ô màu đỏ
                </p>
            </div>
            
            {/* Thử thách 3: Input với keyboard shortcuts */}
            <div style={sectionStyle}>
                <h3>⌨️ Input với Keyboard Shortcuts</h3>
                <input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    placeholder="Nhập rồi nhấn Enter, hoặc Escape để xóa..."
                    style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        fontSize: "14px"
                    }}
                />
                <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
                    💡 <strong>Shortcuts:</strong> Enter → Submit, Escape → Xóa
                </p>
            </div>
            
            {/* Shortcuts */}
            <div style={{
                background: "#f8f9fa",
                padding: "10px",
                borderRadius: "5px"
            }}>
                <h4>🎯 Phím tắt trong demo này:</h4>
                <ul style={{ marginLeft: "20px", fontSize: "14px" }}>
                    <li><strong>Ctrl + D</strong> → Đổi màu nền ngẫu nhiên</li>
                    <li><strong>↑ ↓ ← →</strong> → Di chuyển ô vuông</li>
                    <li><strong>Enter</strong> → Submit trong input</li>
                    <li><strong>Escape</strong> → Xóa input</li>
                </ul>
            </div>
        </div>
    );
}

const sectionStyle = {
    marginBottom: "25px",
    paddingBottom: "20px",
    borderBottom: "1px solid #eee"
};

export default KeyboardEvents;