import { useState } from "react";

function TodoInput({ onAdd }) {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    
    function handleSubmit() {
        if (inputValue.trim() === "") {
            alert("Vui lòng nhập công việc!");
            return;
        }
        onAdd(inputValue);
        setInputValue("");
    }
    
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleSubmit();
        }
        if (event.key === "Escape") {
            setInputValue("");
        }
    }
    
    return (
        <div style={{
            display: "flex",
            marginBottom: "25px",
            gap: "10px"
        }}>
            <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Nhập công việc mới..."
                style={{
                    flex: 1,
                    padding: "12px 15px",
                    fontSize: "16px",
                    border: `2px solid ${isFocused ? "#667eea" : "#ddd"}`,
                    borderRadius: "8px",
                    outline: "none",
                    transition: "all 0.3s"
                }}
            />
            <button 
                onClick={handleSubmit}
                style={{
                    padding: "12px 24px",
                    fontSize: "16px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "transform 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
                ➕ Thêm
            </button>
        </div>
    );
}

export default TodoInput;