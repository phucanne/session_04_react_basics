import { useState } from "react";

function GoodCounter() {
    const [count, setCount] = useState(0);  // ← useState!
    
    console.log("✅ GoodCounter re-render với count =", count);
    
    function handleClick() {
        setCount(count + 1);  // React biết cần re-render!
        console.log("📌 Đã gọi setCount, React sẽ re-render");
    }
    
    function handleReset() {
        setCount(0);
    }
    
    return (
        <div style={{ 
            padding: "20px", 
            border: "2px solid #2ecc71",
            borderRadius: "10px",
            margin: "10px",
            background: "#f0fff4"
        }}>
            <h2 style={{ color: "#2ecc71" }}>✅ Counter "tốt"</h2>
            <p style={{ fontSize: "32px", fontWeight: "bold", color: "#27ae60" }}>
                {count}
            </p>
            <div>
                <button 
                    onClick={handleClick}
                    style={{
                        background: "#2ecc71",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                        marginRight: "10px"
                    }}
                >
                    Tăng (+1)
                </button>
                <button 
                    onClick={handleReset}
                    style={{
                        background: "#95a5a6",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    Reset
                </button>
            </div>
            <p style={{ color: "#27ae60", marginTop: "10px" }}>
                ✅ Nhấn nút → Số trên màn hình CẬP NHẬT!
            </p>
            <div style={{ 
                background: "#d5f4e6", 
                padding: "10px", 
                borderRadius: "5px",
                marginTop: "10px",
                fontSize: "14px"
            }}>
                🔄 Mỗi lần click đều gây re-render (xem Console)
            </div>
        </div>
    );
}

export default GoodCounter;