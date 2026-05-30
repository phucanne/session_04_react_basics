function ListRendering() {
    // Dữ liệu mẫu
    const fruits = ["🍎 Táo", "🍌 Chuối", "🍊 Cam", "🍇 Nho", "🍉 Dưa hấu"];
    
    const products = [
        { id: 1, name: "iPhone 15", price: 25000000, inStock: true },
        { id: 2, name: "Samsung S24", price: 22000000, inStock: true },
        { id: 3, name: "Xiaomi 14", price: 15000000, inStock: false },
        { id: 4, name: "Google Pixel 8", price: 18000000, inStock: true },
        { id: 5, name: "OnePlus 12", price: 17000000, inStock: false }
    ];
    
    const students = [
        { id: 1, name: "Nguyễn Văn Minh", age: 20, grade: "Giỏi" },
        { id: 2, name: "Trần Thị An", age: 21, grade: "Xuất sắc" },
        { id: 3, name: "Lê Hoàng Linh", age: 19, grade: "Khá" },
        { id: 4, name: "Phạm Thùy Dương", age: 20, grade: "Trung bình" }
    ];
    
    // Tính tổng giá sản phẩm còn hàng
    const totalPrice = products
        .filter(p => p.inStock)
        .reduce((sum, p) => sum + p.price, 0);
    
    return (
        <div style={{ padding: "20px" }}>
            <h1>📋 Bài 2.3: Render danh sách</h1>
            
            {/* Danh sách trái cây */}
            <div style={{ background: "#f0f0f0", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>🍎 Danh sách trái cây</h2>
                <ul>
                    {fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
            </div>
            
            {/* Danh sách sản phẩm */}
            <div style={{ background: "#e8f4f8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>📱 Danh sách sản phẩm</h2>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ background: "#2c3e50", color: "white" }}>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>STT</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Tên sản phẩm</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Giá</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id} style={{ background: index % 2 === 0 ? "#f9f9f9" : "white" }}>
                                <td style={{ padding: "8px", border: "1px solid #ddd", textAlign: "center" }}>{index + 1}</td>
                                <td style={{ padding: "8px", border: "1px solid #ddd" }}>{product.name}</td>
                                <td style={{ 
                                    padding: "8px", 
                                    border: "1px solid #ddd",
                                    color: product.price > 20000000 ? "red" : "black",
                                    fontWeight: product.price > 20000000 ? "bold" : "normal"
                                }}>
                                    {product.price.toLocaleString("vi-VN")}đ
                                </td>
                                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                                    <span style={{
                                        color: product.inStock ? "green" : "red",
                                        fontWeight: "bold"
                                    }}>
                                        {product.inStock ? "✅ Còn hàng" : "❌ Hết hàng"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr style={{ background: "#f0f0f0" }}>
                            <td colSpan="2" style={{ padding: "8px", textAlign: "right", fontWeight: "bold" }}>
                                Tổng giá (còn hàng):
                            </td>
                            <td colSpan="2" style={{ padding: "8px", fontWeight: "bold", color: "#e74c3c" }}>
                                {totalPrice.toLocaleString("vi-VN")}đ
                             </td>
                         </tr>
                    </tfoot>
                </table>
            </div>
            
            {/* Danh sách sinh viên */}
            <div style={{ background: "#e8f8e8", padding: "15px", borderRadius: "8px" }}>
                <h2>👨‍🎓 Danh sách sinh viên</h2>
                <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                    {students.map((student) => (
                        <div key={student.id} style={{
                            background: "white",
                            padding: "15px",
                            borderRadius: "8px",
                            width: "200px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            borderLeft: `4px solid ${
                                student.grade === "Xuất sắc" ? "#f1c40f" :
                                student.grade === "Giỏi" ? "#2ecc71" :
                                student.grade === "Khá" ? "#3498db" : "#95a5a6"
                            }`
                        }}>
                            <h3>{student.name}</h3>
                            <p>Tuổi: {student.age}</p>
                            <p>Xếp loại: <strong>{student.grade}</strong></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListRendering;