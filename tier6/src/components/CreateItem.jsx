import { useState, useRef } from "react";

function CreateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" }
    ]);
    const [newName, setNewName] = useState("");
    const [message, setMessage] = useState("");
    const inputRef = useRef(null);
    
    function handleAdd() {
        // Validate không cho thêm nếu tên trống
        if (newName.trim() === "") {
            setMessage("⚠️ Vui lòng nhập tên môn học!");
            setTimeout(() => setMessage(""), 2000);
            return;
        }
        
        // Kiểm tra trùng tên
        if (items.some(item => item.name.toLowerCase() === newName.trim().toLowerCase())) {
            setMessage("⚠️ Môn học này đã tồn tại!");
            setTimeout(() => setMessage(""), 2000);
            return;
        }
        
        const newItem = {
            id: Date.now(),
            name: newName.trim()
        };
        
        setItems([...items, newItem]);
        setNewName("");
        setMessage("✅ Đã thêm thành công!");
        setTimeout(() => setMessage(""), 2000);
        
        // Focus lại vào input
        inputRef.current?.focus();
    }
    
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleAdd();
        }
    }
    
    function handleAddToBeginning() {
        if (newName.trim() === "") return;
        
        const newItem = {
            id: Date.now(),
            name: newName.trim()
        };
        
        setItems([newItem, ...items]);
        setNewName("");
        setMessage("✅ Đã thêm vào đầu danh sách!");
        setTimeout(() => setMessage(""), 2000);
        inputRef.current?.focus();
    }
    
    return (
        <div style={{ 
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
            <h2>➕ Thêm môn học</h2>
            
            <div style={{ marginBottom: "15px" }}>
                <input 
                    ref={inputRef}
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Nhập tên môn học..."
                    style={{ 
                        padding: "10px", 
                        width: "250px",
                        marginRight: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "5px"
                    }}
                />
                <button onClick={handleAdd} style={{...buttonStyle, background: "#2ecc71"}}>
                    ➕ Thêm vào cuối
                </button>
                <button onClick={handleAddToBeginning} style={{...buttonStyle, background: "#3498db"}}>
                    ⬅️ Thêm vào đầu
                </button>
            </div>
            
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
            
            <h3>📚 Danh sách môn học ({items.length} môn):</h3>
            <div style={{ 
                maxHeight: "300px", 
                overflowY: "auto",
                border: "1px solid #eee",
                borderRadius: "5px"
            }}>
                {items.map((item, index) => (
                    <div key={item.id} style={{ 
                        padding: "10px", 
                        borderBottom: "1px solid #eee",
                        display: "flex",
                        justifyContent: "space-between",
                        background: index % 2 === 0 ? "#f9f9f9" : "white"
                    }}>
                        <span>
                            <strong>{index + 1}.</strong> {item.name}
                        </span>
                        <span style={{ fontSize: "12px", color: "#999" }}>
                            ID: {item.id}
                        </span>
                    </div>
                ))}
            </div>
            
            {items.length === 0 && (
                <p style={{ textAlign: "center", color: "#999", marginTop: "20px" }}>
                    Danh sách trống. Hãy thêm môn học đầu tiên!
                </p>
            )}
        </div>
    );
}

const buttonStyle = {
    padding: "10px 16px",
    margin: "0 5px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

export default CreateItem;