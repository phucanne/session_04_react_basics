function BadCounter() {
    let count = 0;  // ← Biến bình thường!
    
    function handleClick() {
        count = count + 1;
        console.log("Count:", count);  // Console: 1, 2, 3...
        // Nhưng UI KHÔNG cập nhật!
    }
    
    return (
        <div style={{ 
            padding: "20px", 
            border: "2px solid #e74c3c",
            borderRadius: "10px",
            margin: "10px",
            background: "#fff5f5"
        }}>
            <h2 style={{ color: "#e74c3c" }}>❌ Counter "tệ"</h2>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                Bộ đếm: {count}
            </p>
            <button 
                onClick={handleClick}
                style={{
                    background: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px"
                }}
            >
                Tăng (+1)
            </button>
            <p style={{ color: "#e74c3c", marginTop: "10px" }}>
                ⚠️ Nhấn nút → Console tăng, nhưng số trên màn hình KHÔNG đổi!
            </p>
            <div style={{ 
                background: "#ffe8e8", 
                padding: "10px", 
                borderRadius: "5px",
                marginTop: "10px",
                fontSize: "14px"
            }}>
                📌 Giải thích: Biến thường không gây re-render
            </div>
        </div>
    );
}

export default BadCounter;