import { useState, useEffect } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoFilter from "./components/TodoFilter";
import TodoItem from "./components/TodoItem";
import TodoStats from "./components/TodoStats";
import "./App.css";

function App() {
    // State
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [filter, setFilter] = useState("all");
    
    // Lưu vào localStorage khi todos thay đổi
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    
    // CRUD Operations
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            done: false,
            createdAt: new Date().toISOString()
        };
        setTodos([newTodo, ...todos]);
    };
    
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ));
    };
    
    const deleteTodo = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa công việc này?")) {
            setTodos(todos.filter(todo => todo.id !== id));
        }
    };
    
    const editTodo = (id, newText) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        ));
    };
    
    const deleteAllCompleted = () => {
        if (window.confirm("Xóa tất cả công việc đã hoàn thành?")) {
            setTodos(todos.filter(todo => !todo.done));
        }
    };
    
    // Filter todos
    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.done;
        if (filter === "completed") return todo.done;
        return true;
    });
    
    return (
        <div className="app-container">
            <div className="todo-app">
                <TodoHeader />
                <TodoInput onAdd={addTodo} />
                
                {todos.length > 0 && (
                    <>
                        <TodoFilter filter={filter} setFilter={setFilter} />
                        
                        <div className="todo-list">
                            {filteredTodos.length === 0 ? (
                                <div className="empty-state">
                                    {filter === "all" && "📭 Chưa có công việc nào"}
                                    {filter === "active" && "🎉 Không còn việc nào chưa xong!"}
                                    {filter === "completed" && "📝 Chưa có việc nào hoàn thành"}
                                </div>
                            ) : (
                                filteredTodos.map(todo => (
                                    <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                        onToggle={toggleTodo}
                                        onDelete={deleteTodo}
                                        onEdit={editTodo}
                                    />
                                ))
                            )}
                        </div>
                        
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "15px"
                        }}>
                            <TodoStats todos={todos} />
                            {todos.some(t => t.done) && (
                                <button
                                    onClick={deleteAllCompleted}
                                    className="clear-btn"
                                >
                                    🗑 Xóa hoàn thành
                                </button>
                            )}
                        </div>
                    </>
                )}
                
                {todos.length === 0 && (
                    <div className="empty-state welcome">
                        🎉 Chào mừng bạn đến với Todo App!
                        <br />
                        Hãy thêm công việc đầu tiên của bạn
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;