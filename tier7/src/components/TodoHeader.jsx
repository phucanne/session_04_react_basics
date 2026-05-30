function TodoHeader() {
    const currentDate = new Date().toLocaleDateString('vi-VN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    return (
        <div style={{
            textAlign: "center",
            marginBottom: "30px",
            padding: "20px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "15px",
            color: "white"
        }}>
            <h1 style={{ margin: 0, fontSize: "28px" }}>📋 Todo List</h1>
            <p style={{ margin: "10px 0 0", opacity: 0.9 }}>{currentDate}</p>
        </div>
    );
}

export default TodoHeader;