import { useState } from "react";

function DeleteItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Nguyễn Văn Minh", age: 20 },
        { id: 2, name: "Trần Thị An", age: 21 },
        { id: 3, name: "Lê Hoàng Linh", age: 19 },
        { id: 4, name: "Phạm Thùy Dương", age: 22 }
    ]);
    const [message, setMessage] = useState("");
    const [lastDeleted, setLastDeleted] = useState(null);
    const [undoTimer, setUndoTimer] = useState(null);
    
    function handleDelete(id, name) {
        if (window.confirm(`Bạn có chắc muốn xóa "${name}"?`)) {
            const deletedItem = items.find(item => item.id === id);
            setItems(items.filter(item => item.id !== id));
            setMessage(`✅ Đã xóa "${name}"!`);
            setTimeout(() => setMessage(""), 3000);
            
            // Lưu để hoàn tác
            setLastDeleted(deletedItem);
            
            // Tự động xóa sau 5 giây nếu không hoàn tác
            const timer = setTimeout(() => {
                setLastDeleted(null);
            }, 5000);
            setUndoTimer(timer);
        }
    }
    
    function handleUndo() {
        if (lastDeleted) {
            setItems([...items, lastDeleted]);
            setMessage(`↩️ Đã khôi phục "${lastDeleted.name}"!`);
            setTimeout(() => setMessage(""), 3000);
            clearTimeout(undoTimer);
            setLastDeleted(null);
        }
    }
    
    function handleDeleteAll() {
        if (window.confirm("⚠️ Bạn có chắc muốn xóa TẤT CẢ sinh viên? Hành động này không thể hoàn tác!")) {
            setItems([]);
            setMessage("🗑 Đã xóa tất cả sinh viên!");
            setTimeout(() => setMessage(""), 3000);
            setLastDeleted(null);
        }
    }
    
    return (
        <div style={{ 
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
            <h2>🗑 Xóa sinh viên</h2>
            
            {message && (
                <div style={{ 
                    padding: "10px", 
                    background: "#d4edda",
                    color: "#155724",
                    borderRadius: "5px",
                    marginBottom: "15px"
                }}>
                    {message}
                </div>
            )}
            
            {lastDeleted && (
                <div style={{ 
                    padding: "10px", 
                    background: "#fff3cd",
                    color: "#856404",
                    borderRadius: "5px",
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <span>💡 Bạn vừa xóa "{lastDeleted.name}".</span>
                    <button onClick={handleUndo} style={{...buttonStyle, background: "#f39c12", padding: "5px 10px"}}>
                        ↩️ Hoàn tác
                    </button>
                </div>
            )}
            
            {items.length > 0 && (
                <button 
                    onClick={handleDeleteAll}
                    style={{ 
                        marginBottom: "15px", 
                        background: "#e74c3c", 
                        color: "white",
                        padding: "8px 16px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    🗑 Xóa tất cả ({items.length} sinh viên)
                </button>
            )}
            
            {items.length === 0 ? (
                <p style={{ textAlign: "center", color: "#999", padding: "40px" }}>
                    📭 Danh sách trống
                </p>
            ) : (
                <div style={{ 
                    maxHeight: "400px", 
                    overflowY: "auto",
                    border: "1px solid #eee",
                    borderRadius: "5px"
                }}>
                    {items.map(item => (
                        <div key={item.id} style={{ 
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "12px",
                            margin: "2px 0",
                            background: "#f9f9f9",
                            borderRadius: "5px"
                        }}>
                            <div>
                                <strong>{item.name}</strong> - {item.age} tuổi
                            </div>
                            <button 
                                onClick={() => handleDelete(item.id, item.name)}
                                style={{ 
                                    background: "#e74c3c", 
                                    color: "white",
                                    border: "none",
                                    padding: "5px 12px",
                                    borderRadius: "3px",
                                    cursor: "pointer"
                                }}
                            >
                                ✕ Xóa
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const buttonStyle = {
    padding: "8px 16px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

export default DeleteItem;