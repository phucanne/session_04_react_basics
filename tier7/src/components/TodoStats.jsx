function TodoStats({ todos }) {
    const total = todos.length;
    const active = todos.filter(t => !t.done).length;
    const completed = todos.filter(t => t.done).length;
    const progress = total === 0 ? 0 : (completed / total) * 100;
    
    if (total === 0) return null;
    
    return (
        <div style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f8f9fa",
            borderRadius: "10px"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
            }}>
                <span>📊 Tiến độ: {completed}/{total}</span>
                <span>{Math.round(progress)}%</span>
            </div>
            <div style={{
                width: "100%",
                height: "8px",
                background: "#e0e0e0",
                borderRadius: "4px",
                overflow: "hidden"
            }}>
                <div style={{
                    width: `${progress}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, #667eea, #764ba2)",
                    transition: "width 0.3s"
                }} />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
                fontSize: "13px",
                color: "#666"
            }}>
                <span>⏳ Còn lại: {active}</span>
                <span>✅ Đã xong: {completed}</span>
            </div>
        </div>
    );
}

export default TodoStats;