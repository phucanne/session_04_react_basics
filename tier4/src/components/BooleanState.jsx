import { useState } from "react";

function BooleanState() {
    const [isVisible, setIsVisible] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [openAccordion, setOpenAccordion] = useState(null);
    const [isBulbOn, setIsBulbOn] = useState(false);
    
    const accordionItems = [
        { id: 1, title: "🎯 React là gì?", content: "React là thư viện JavaScript để xây dựng giao diện người dùng." },
        { id: 2, title: "💡 useState dùng để làm gì?", content: "useState dùng để quản lý trạng thái (state) trong component." },
        { id: 3, title: "🔧 Props là gì?", content: "Props là dữ liệu truyền từ component cha xuống component con." }
    ];
    
    const themeStyle = {
        backgroundColor: isDarkMode ? "#2c3e50" : "#fff",
        color: isDarkMode ? "#ecf0f1" : "#333",
        padding: "20px",
        borderRadius: "10px",
        transition: "all 0.3s",
        minHeight: "300px"
    };
    
    return (
        <div style={themeStyle}>
            <h2>🎛️ Boolean State Demo</h2>
            
            {/* 1. Ẩn/Hiện nội dung */}
            <div style={sectionStyle}>
                <h3>📦 Ẩn/Hiện nội dung</h3>
                <button onClick={() => setIsVisible(!isVisible)} style={toggleButtonStyle(isVisible)}>
                    {isVisible ? "🔽 Ẩn nội dung" : "🔼 Hiện nội dung"}
                </button>
                {isVisible && (
                    <div style={{ 
                        marginTop: "10px", 
                        padding: "15px", 
                        background: isDarkMode ? "#34495e" : "#f0f0f0",
                        borderRadius: "8px"
                    }}>
                        <p>Đây là nội dung có thể ẩn/hiện! Click nút để thử.</p>
                    </div>
                )}
            </div>
            
            {/* 2. Dark Mode */}
            <div style={sectionStyle}>
                <h3>🌓 Dark/Light Mode</h3>
                <button onClick={() => setIsDarkMode(!isDarkMode)} style={toggleButtonStyle(isDarkMode)}>
                    {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>
            
            {/* 3. Like button */}
            <div style={sectionStyle}>
                <h3>❤️ Like button</h3>
                <button 
                    onClick={() => setIsLiked(!isLiked)} 
                    style={{
                        ...toggleButtonStyle(isLiked),
                        background: isLiked ? "#e74c3c" : "#95a5a6",
                        fontSize: "18px"
                    }}
                >
                    {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
                </button>
                <p>{isLiked ? "Cảm ơn bạn đã thích! 😊" : "Hãy nhấn thích nếu thấy hữu ích"}</p>
            </div>
            
            {/* 4. Accordion */}
            <div style={sectionStyle}>
                <h3>📑 Accordion (FAQ)</h3>
                {accordionItems.map(item => (
                    <div key={item.id} style={{ marginBottom: "10px" }}>
                        <button
                            onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                            style={{
                                width: "100%",
                                textAlign: "left",
                                padding: "12px",
                                background: isDarkMode ? "#34495e" : "#ecf0f1",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontWeight: "bold"
                            }}
                        >
                            {item.title} {openAccordion === item.id ? "▲" : "▼"}
                        </button>
                        {openAccordion === item.id && (
                            <div style={{
                                padding: "12px",
                                background: isDarkMode ? "#3d566e" : "#f9f9f9",
                                borderRadius: "0 0 5px 5px",
                                marginTop: "2px"
                            }}>
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            {/* 5. Bóng đèn toggle */}
            <div style={sectionStyle}>
                <h3>💡 Bật/Tắt bóng đèn</h3>
                <div style={{ textAlign: "center" }}>
                    <div style={{
                        fontSize: "80px",
                        filter: isBulbOn ? "drop-shadow(0 0 20px #f1c40f)" : "none",
                        transition: "filter 0.3s"
                    }}>
                        {isBulbOn ? "💡" : "🔌"}
                    </div>
                    <button 
                        onClick={() => setIsBulbOn(!isBulbOn)} 
                        style={{
                            ...toggleButtonStyle(isBulbOn),
                            background: isBulbOn ? "#f1c40f" : "#95a5a6",
                            color: isBulbOn ? "#333" : "white"
                        }}
                    >
                        {isBulbOn ? "Tắt đèn" : "Bật đèn"}
                    </button>
                </div>
            </div>
        </div>
    );
}

const sectionStyle = {
    marginBottom: "25px",
    padding: "15px",
    borderBottom: "1px solid #ddd"
};

const toggleButtonStyle = (isActive) => ({
    padding: "10px 20px",
    background: isActive ? "#e74c3c" : "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s"
});

export default BooleanState;