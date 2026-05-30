import { useState } from "react";

function FullCRUD() {
    const [students, setStudents] = useState([
        { id: 1, name: "Nguyễn Văn Minh", age: 20, class: "CNTT-K62" },
        { id: 2, name: "Trần Thị An", age: 21, class: "CNTT-K61" },
        { id: 3, name: "Lê Hoàng Linh", age: 19, class: "CNTT-K63" }
    ]);
    
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        class: ""
    });
    const [editingId, setEditingId] = useState(null);
    const [message, setMessage] = useState("");
    
    // CREATE
    function handleAdd() {
        if (!formData.name || !formData.age || !formData.class) {
            setMessage("⚠️ Vui lòng nhập đầy đủ thông tin!");
            setTimeout(() => setMessage(""), 2000);
            return;
        }
        
        const newStudent = {
            id: Date.now(),
            name: formData.name,
            age: parseInt(formData.age),
            class: formData.class
        };
        
        setStudents([...students, newStudent]);
        resetForm();
        setMessage("✅ Đã thêm sinh viên!");
        setTimeout(() => setMessage(""), 2000);
    }
    
    // UPDATE
    function handleEdit(student) {
        setEditingId(student.id);
        setFormData({
            name: student.name,
            age: student.age.toString(),
            class: student.class
        });
    }
    
    function handleUpdate() {
        if (!formData.name || !formData.age || !formData.class) {
            setMessage("⚠️ Vui lòng nhập đầy đủ thông tin!");
            setTimeout(() => setMessage(""), 2000);
            return;
        }
        
        setStudents(students.map(student =>
            student.id === editingId
                ? { ...student, name: formData.name, age: parseInt(formData.age), class: formData.class }
                : student
        ));
        
        resetForm();
        setMessage("✅ Đã cập nhật sinh viên!");
        setTimeout(() => setMessage(""), 2000);
    }
    
    // DELETE
    function handleDelete(id) {
        if (window.confirm("Bạn có chắc muốn xóa sinh viên này?")) {
            setStudents(students.filter(student => student.id !== id));
            setMessage("🗑 Đã xóa sinh viên!");
            setTimeout(() => setMessage(""), 2000);
        }
    }
    
    function resetForm() {
        setFormData({ name: "", age: "", class: "" });
        setEditingId(null);
    }
    
    return (
        <div style={{ 
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
            <h2>📚 Quản lý sinh viên (CRUD)</h2>
            
            {message && (
                <div style={{ 
                    padding: "10px", 
                    background: message.includes("✅") ? "#d4edda" : "#f8d7da",
                    color: message.includes("✅") ? "#155724" : "#721c24",
                    borderRadius: "5px",
                    marginBottom: "15px"
                }}>
                    {message}
                </div>
            )}
            
            {/* Form */}
            <div style={{ 
                background: "#f0f0f0", 
                padding: "15px", 
                borderRadius: "8px", 
                marginBottom: "20px" 
            }}>
                <h3>{editingId ? "✏️ Cập nhật sinh viên" : "➕ Thêm sinh viên mới"}</h3>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
                    <input
                        type="text"
                        placeholder="Họ tên"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={inputStyle}
                    />
                    <input
                        type="number"
                        placeholder="Tuổi"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        style={{...inputStyle, width: "80px"}}
                    />
                    <input
                        type="text"
                        placeholder="Lớp"
                        value={formData.class}
                        onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                        style={{...inputStyle, width: "120px"}}
                    />
                    {editingId ? (
                        <>
                            <button onClick={handleUpdate} style={{...buttonStyle, background: "#27ae60"}}>
                                💾 Cập nhật
                            </button>
                            <button onClick={resetForm} style={{...buttonStyle, background: "#95a5a6"}}>
                                ❌ Hủy
                            </button>
                        </>
                    ) : (
                        <button onClick={handleAdd} style={{...buttonStyle, background: "#2ecc71"}}>
                            ➕ Thêm
                        </button>
                    )}
                </div>
            </div>
            
            {/* Table */}
            {students.length === 0 ? (
                <p style={{ textAlign: "center", color: "#999", padding: "40px" }}>
                    📭 Chưa có sinh viên nào. Hãy thêm sinh viên đầu tiên!
                </p>
            ) : (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ background: "#2c3e50", color: "white" }}>
                            <th style={{ padding: "12px", border: "1px solid #ddd" }}>STT</th>
                            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Họ tên</th>
                            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Tuổi</th>
                            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Lớp</th>
                            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.id} style={{ textAlign: "center" }}>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{index + 1}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.name}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.age}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.class}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                    <button 
                                        onClick={() => handleEdit(student)} 
                                        style={{...actionButton, background: "#3498db", marginRight: "5px"}}
                                    >
                                        ✏️ Sửa
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(student.id)} 
                                        style={{...actionButton, background: "#e74c3c"}}
                                    >
                                        🗑 Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            
            <div style={{ marginTop: "15px", textAlign: "right", fontWeight: "bold" }}>
                Tổng số: {students.length} sinh viên
            </div>
        </div>
    );
}

const inputStyle = {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    flex: 1
};

const buttonStyle = {
    padding: "10px 20px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

const actionButton = {
    padding: "5px 10px",
    color: "white",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer"
};

export default FullCRUD;