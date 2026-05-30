import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    
    function handleDoubleClick() {
        setIsEditing(true);
        setEditText(todo.text);
    }
    
    function handleSave() {
        if (editText.trim() === "") {
            onDelete(todo.id);
        } else {
            onEdit(todo.id, editText);
        }
        setIsEditing(false);
    }
    
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleSave();
        }
        if (event.key === "Escape") {
            setIsEditing(false);
            setEditText(todo.text);
        }
    }
    
    if (isEditing) {
        return (
            <div style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                margin: "8px 0",
                background: "#fff",
                border: "1px solid #667eea",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(102,126,234,0.2)"
            }}>
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={handleKeyPress}
                    onBlur={handleSave}
                    autoFocus
                    style={{
                        flex: 1,
                        padding: "8px",
                        fontSize: "14px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        outline: "none"
                    }}
                />
                <span style={{ marginLeft: "10px", fontSize: "12px", color: "#999" }}>
                    Enter ✓ | Esc ✕
                </span>
            </div>
        );
    }
    
    return (
        <div 
            onDoubleClick={handleDoubleClick}
            style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                margin: "8px 0",
                background: todo.done ? "#f0fff4" : "white",
                border: "1px solid #eee",
                borderRadius: "8px",
                transition: "all 0.3s",
                cursor: "pointer",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(5px)";
                e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
            }}
        >
            <input 
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
                style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "12px",
                    cursor: "pointer"
                }}
            />
            <span style={{ 
                flex: 1,
                textDecoration: todo.done ? "line-through" : "none",
                color: todo.done ? "#999" : "#333",
                fontSize: "16px"
            }}>
                {todo.text}
            </span>
            {todo.createdAt && (
                <span style={{
                    fontSize: "11px",
                    color: "#999",
                    marginRight: "10px"
                }}>
                    {new Date(todo.createdAt).toLocaleDateString()}
                </span>
            )}
            <button 
                onClick={() => onDelete(todo.id)}
                style={{
                    background: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "all 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#c0392b"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#e74c3c"}
            >
                🗑 Xóa
            </button>
        </div>
    );
}

export default TodoItem;