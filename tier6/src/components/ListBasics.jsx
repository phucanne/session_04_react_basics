import { useState } from "react";

function ListBasics() {
    const [fruits] = useState(["🍎 Táo", "🍌 Chuối", "🍊 Cam", "🍇 Nho"]);
    
    const [students] = useState([
        { id: 1, name: "Nguyễn Văn Minh", age: 20 },
        { id: 2, name: "Trần Thị An", age: 21 },
        { id: 3, name: "Lê Hoàng Linh", age: 19 },
        { id: 4, name: "Phạm Thùy Dương", age: 22 },
        { id: 5, name: "Đỗ Minh Quân", age: 18 }
    ]);
    
    // Tính tuổi trung bình
    const averageAge = students.reduce((sum, student) => sum + student.age, 0) / students.length;
    
    return (
        <div style={{ 
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
            <h2>🍎 Danh sách trái cây</h2>
            <ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        {index + 1}. {fruit}
                    </li>
                ))}
            </ul>
            
            <h2>👨‍🎓 Danh sách sinh viên</h2>
            <p><strong>Tuổi trung bình:</strong> {averageAge.toFixed(1)}</p>
            <p><strong>Tổng số:</strong> {students.length} sinh viên</p>
            
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}>
                <thead>
                    <tr style={{ background: "#2c3e50", color: "white" }}>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>STT</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Họ tên</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Tuổi</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id} style={{ 
                            background: student.age >= 20 ? "#d5f4e6" : "white"
                        }}>
                            <td style={{ padding: "8px", border: "1px solid #ddd", textAlign: "center" }}>
                                {index + 1}
                            </td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                                {student.name}
                            </td>
                            <td style={{ padding: "8px", border: "1px solid #ddd", textAlign: "center" }}>
                                {student.age}
                            </td>
                            <td style={{ padding: "8px", border: "1px solid #ddd", textAlign: "center" }}>
                                <span style={{
                                    color: student.age >= 20 ? "#27ae60" : "#e74c3c",
                                    fontWeight: "bold"
                                }}>
                                    {student.age >= 20 ? "✅ Đủ tuổi" : "⏳ Chưa đủ 20"}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListBasics;