import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    
    const addTodo = () => {
        if (inputValue.trim() === "") return;
        
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text: inputValue,
                completed: false
            }
        ]);
        setInputValue("");
    };
    
    const handleInputKeyDown = (event) => {
        if (event.key === "Enter") {
            addTodo();
        }
    };
    
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    const deleteAll = () => {
        setTodos([]);
    };
    
    const remainingTasks = todos.filter(todo => !todo.completed).length;
    
    return (
        <div style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
            <h2>✅ Todo List</h2>
            
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    placeholder="Nhập việc cần làm..."
                    style={{
                        flex: 1,
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        fontSize: "14px"
                    }}
                />
                <button onClick={addTodo} style={buttonStyle}>Thêm</button>
            </div>
            
            <div style={{ marginBottom: "10px" }}>
                <p>Còn lại: {remainingTasks} việc chưa làm</p>
                {todos.length > 0 && (
                    <button onClick={deleteAll} style={{...buttonStyle, background: "#e74c3c"}}>
                        Xóa tất cả
                    </button>
                )}
            </div>
            
            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map(todo => (
                    <li key={todo.id} style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        marginBottom: "5px",
                        background: "#f9f9f9",
                        borderRadius: "5px",
                        textDecoration: todo.completed ? "line-through" : "none",
                        opacity: todo.completed ? 0.6 : 1
                    }}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            style={{ marginRight: "10px" }}
                        />
                        <span style={{ flex: 1 }}>{todo.text}</span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            style={{
                                background: "#e74c3c",
                                color: "white",
                                border: "none",
                                borderRadius: "3px",
                                cursor: "pointer",
                                padding: "5px 10px"
                            }}
                        >
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
            
            {todos.length === 0 && (
                <p style={{ textAlign: "center", color: "#999", marginTop: "20px" }}>
                    Chưa có việc gì. Hãy thêm việc đầu tiên!
                </p>
            )}
        </div>
    );
}

const buttonStyle = {
    padding: "10px 20px",
    background: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

export default TodoList;