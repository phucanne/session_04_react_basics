import { useState } from "react";

function AndDemo() {
    const [hasNotification, setHasNotification] = useState(true);
    const [notificationCount, setNotificationCount] = useState(3);
    const [showMenu, setShowMenu] = useState(false);
    const [showDiscount, setShowDiscount] = useState(true);
    
    return (
        <div style={{ padding: "20px" }}>
            <h1>🔀 Bài 2.2: Conditional Rendering (&&)</h1>
            
            {/* Thông báo */}
            <div style={{ background: "#f0f0f0", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>🔔 Thông báo</h2>
                {hasNotification && (
                    <div style={{ background: "#fff3cd", padding: "10px", borderRadius: "5px", margin: "10px 0" }}>
                        <p>📬 Bạn có {notificationCount} thông báo mới!</p>
                    </div>
                )}
                {!hasNotification && (
                    <p style={{ color: "#999" }}>✨ Không có thông báo mới</p>
                )}
                <button onClick={() => setHasNotification(!hasNotification)}>
                    {hasNotification ? "Tắt thông báo" : "Bật thông báo"}
                </button>
            </div>
            
            {/* Menu */}
            <div style={{ background: "#e8f4f8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>📱 Menu điều khiển</h2>
                <button onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? "🔽 Đóng menu" : "🔼 Mở menu"}
                </button>
                {showMenu && (
                    <div style={{ marginTop: "15px", padding: "10px", background: "white", borderRadius: "5px" }}>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                            <li style={{ padding: "8px" }}>🏠 Trang chủ</li>
                            <li style={{ padding: "8px" }}>📦 Sản phẩm</li>
                            <li style={{ padding: "8px" }}>👤 Tài khoản</li>
                            <li style={{ padding: "8px" }}>⚙️ Cài đặt</li>
                        </ul>
                    </div>
                )}
            </div>
            
            {/* Khuyến mãi */}
            <div style={{ background: "#e8f8e8", padding: "15px", borderRadius: "8px" }}>
                <h2>🎉 Khuyến mãi đặc biệt</h2>
                {showDiscount && (
                    <div style={{ 
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "white",
                        padding: "15px",
                        borderRadius: "8px",
                        marginTop: "10px"
                    }}>
                        <h3>🔥 Flash Sale!</h3>
                        <p>Giảm giá 50% cho tất cả sản phẩm</p>
                        <p>Mã: FLASH50 | Hạn: Hôm nay</p>
                    </div>
                )}
                <button 
                    onClick={() => setShowDiscount(!showDiscount)}
                    style={{ marginTop: "10px" }}
                >
                    {showDiscount ? "Ẩn khuyến mãi" : "Hiện khuyến mãi"}
                </button>
            </div>
        </div>
    );
}

export default AndDemo;