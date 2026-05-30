import { useState } from "react";

function ChallengeExercises() {
    // State cho bài tập
    const [status, setStatus] = useState("online");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [stock, setStock] = useState(5);
    
    // Dữ liệu mẫu
    const products = [
        { id: 1, name: "Áo thun", price: 200000 },
        { id: 2, name: "Quần jeans", price: 500000 },
        { id: 3, name: "Giày thể thao", price: 1500000 },
        { id: 4, name: "Mũ lưỡi trai", price: 150000 },
        { id: 5, name: "Túi xách", price: 800000 }
    ];
    
    // Lọc sản phẩm giá > 1 triệu
    const expensiveProducts = products.filter(p => p.price > 1000000);
    
    // Tính tổng tiền
    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
    
    return (
        <div style={{ padding: "20px" }}>
            <h1>🏆 THỬ THÁCH TIER 2</h1>
            
            {/* Thử thách 1: Hiển thị icon online/offline */}
            <div style={{ background: "#f0f0f0", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>🎯 Thử thách 1: Trạng thái online</h2>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{
                        display: "inline-block",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: status === "online" ? "#2ecc71" : "#e74c3c",
                        boxShadow: "0 0 5px rgba(0,0,0,0.2)"
                    }}></span>
                    <span>
                        {status === "online" ? "🟢 Đang hoạt động" : "🔴 Đang offline"}
                    </span>
                    <button onClick={() => setStatus(status === "online" ? "offline" : "online")}>
                        Đổi trạng thái
                    </button>
                </div>
            </div>
            
            {/* Thử thách 2: Hiện menu khi đăng nhập */}
            <div style={{ background: "#e8f4f8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>🎯 Thử thách 2: Menu đăng nhập</h2>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
                </button>
                {isLoggedIn && (
                    <div style={{ marginTop: "15px", padding: "10px", background: "white", borderRadius: "5px" }}>
                        <ul style={{ margin: 0, paddingLeft: "20px" }}>
                            <li>🏠 Trang chủ</li>
                            <li>📊 Dashboard</li>
                            <li>⚙️ Cài đặt</li>
                            <li>🚪 Đăng xuất</li>
                        </ul>
                    </div>
                )}
                {!isLoggedIn && (
                    <p style={{ marginTop: "10px", color: "#999" }}>
                        🔒 Vui lòng đăng nhập để xem menu
                    </p>
                )}
            </div>
            
            {/* Thử thách 3: Hiển thị hết hàng */}
            <div style={{ background: "#e8f8e8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>🎯 Thử thách 3: Tình trạng sản phẩm</h2>
                <p><strong>Số lượng:</strong> {stock}</p>
                <p style={{ color: stock === 0 ? "red" : "green", fontWeight: "bold" }}>
                    {stock === 0 ? "❌ HẾT HÀNG" : "✅ CÒN HÀNG"}
                </p>
                <div>
                    <button onClick={() => setStock(stock + 1)}>Thêm hàng (+)</button>
                    <button 
                        onClick={() => stock > 0 && setStock(stock - 1)}
                        style={{ marginLeft: "10px" }}
                    >
                        Bán hàng (-)
                    </button>
                </div>
            </div>
            
            {/* Thử thách 4: Sản phẩm giá cao */}
            <div style={{ background: "#fff4e8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>🎯 Thử thách 4: Sản phẩm cao cấp</h2>
                <ul>
                    {products.map(product => (
                        <li key={product.id} style={{ margin: "5px 0" }}>
                            {product.name}: {product.price.toLocaleString("vi-VN")}đ
                            {product.price > 1000000 && (
                                <span style={{ color: "red", marginLeft: "10px" }}>
                                    ⭐ Cao cấp
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Thử thách 5: Tổng giá sản phẩm */}
            <div style={{ background: "#fdf0e8", padding: "15px", borderRadius: "8px" }}>
                <h2>🎯 Thử thách 5: Tổng giá trị</h2>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>STT</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Sản phẩm</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{index + 1}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.name}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "right" }}>
                                    {product.price.toLocaleString("vi-VN")}đ
                                 </td>
                             </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr style={{ background: "#f0f0f0", fontWeight: "bold" }}>
                            <td colSpan="2" style={{ padding: "8px", textAlign: "right" }}>Tổng cộng:</td>
                            <td style={{ padding: "8px", textAlign: "right", color: "#e74c3c" }}>
                                {totalPrice.toLocaleString("vi-VN")}đ
                             </td>
                         </tr>
                    </tfoot>
                </table>
                <p style={{ marginTop: "15px" }}>
                    📊 Số sản phẩm cao cấp: {expensiveProducts.length}
                </p>
            </div>
        </div>
    );
}

export default ChallengeExercises;