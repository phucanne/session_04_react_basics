import { useState } from "react";

function UpdateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Nguyễn Văn Minh", age: 20, email: "minh@example.com" },
        { id: 2, name: "Trần Thị An", age: 21, email: "an@example.com" },
        { id: 3, name: "Lê Hoàng Linh", age: 19, email: "linh@example.com" }
    ]);
    
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [message, setMessage] = useState("");
    
    function startEdit(item) {
        setEditingId(item.id);
        setEditName(item.name);
        setEditAge(item.age.toString());
        setEditEmail(item.email);
    }
    
    function saveEdit() {
        if (editName.trim() === "") {
            setMessage("⚠️ Tên không được để trống!");
            setTimeout(() => setMessage(""), 2000);
            return;
        }
        
        if (editAge === "" || parseInt(editAge) < 1 || parseInt(editAge) > 120) {
            setMessage("⚠️ Tuổi phải từ 1 đến 120!");
            setTimeout(() => setMessage(""), 2000);
            return;
        }
        
        if (!editEmail.includes("@")) {
            setMessage("⚠️ Email không hợp lệ!");
            setTimeout(() => setMessage(""), 2000);
            return;
        }
        
        setItems(items.map(item => 
            item.id === editingId 
                ? { ...item, name: editName, age: parseInt(editAge), email: editEmail }
                : item
        ));
        
        setEditingId(null);
        setMessage("✅ Đã cập nhật thành công!");
        setTimeout(() => setMessage(""), 2000);
    }
    
    function cancelEdit() {
        setEditingId(null);
        setMessage("");
    }
    
    function handleKeyPress(event) {
        if (event.key === "Enter") saveEdit();
        if (event.key === "Escape") cancelEdit();
    }
    
    return (
        <div style={{ 
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
            <h2>✏️ Sửa thông tin sinh viên</h2>
            
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
            
            <div style={{ 
                maxHeight: "400px", 
                overflowY: "auto",
                border: "1px solid #eee",
                borderRadius: "5px"
            }}>
                {items.map(item => (
                    <div key={item.id} style={{ 
                        padding: "15px", 
                        margin: "2px 0",
                        background: editingId === item.id ? "#e8f4f8" : "#f9f9f9",
                        borderRadius: "5px",
                        border: editingId === item.id ? "2px solid #3498db" : "none"
                    }}>
                        {editingId === item.id ? (
                            // Chế độ sửa
                            <div>
                                <div style={{ marginBottom: "10px" }}>
                                    <label>Tên: </label>
                                    <input 
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        autoFocus
                                        style={{ 
                                            width: "100%",
                                            padding: "8px",
                                            marginTop: "5px",
                                            border: "1px solid #ddd",
                                            borderRadius: "4px"
                                        }}
                                    />
                                </div>
                                <div style={{ marginBottom: "10px" }}>
                                    <label>Tuổi: </label>
                                    <input 
                                        type="number"
                                        value={editAge}
                                        onChange={(e) => setEditAge(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        style={{ 
                                            width: "100%",
                                            padding: "8px",
                                            marginTop: "5px",
                                            border: "1px solid #ddd",
                                            borderRadius: "4px"
                                        }}
                                    />
                                </div>
                                <div style={{ marginBottom: "10px" }}>
                                    <label>Email: </label>
                                    <input 
                                        type="email"
                                        value={editEmail}
                                        onChange={(e) => setEditEmail(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        style={{ 
                                            width: "100%",
                                            padding: "8px",
                                            marginTop: "5px",
                                            border: "1px solid #ddd",
                                            borderRadius: "4px"
                                        }}
                                    />
                                </div>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <button onClick={saveEdit} style={{...actionButton, background: "#27ae60"}}>
                                        ✓ Lưu (Enter)
                                    </button>
                                    <button onClick={cancelEdit} style={{...actionButton, background: "#95a5a6"}}>
                                        ✕ Hủy (Esc)
                                    </button>
                                </div>
                            </div>
                        ) : (
                            // Chế độ xem
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div>
                                    <div><strong>{item.name}</strong></div>
                                    <div style={{ fontSize: "14px", color: "#666" }}>
                                        🎂 {item.age} tuổi | 📧 {item.email}
                                    </div>
                                </div>
                                <button 
                                    onClick={() => startEdit(item)} 
                                    style={{ background: "#3498db", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }}
                                >
                                    ✏️ Sửa
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            <div style={{ marginTop: "15px", padding: "10px", background: "#f0f0f0", borderRadius: "5px", fontSize: "12px" }}>
                💡 <strong>Mẹo:</strong> Nhấn <strong>Enter</strong> để lưu, <strong>Escape</strong> để hủy sửa
            </div>
        </div>
    );
}

const actionButton = {
    padding: "8px 16px",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
};

export default UpdateItem;