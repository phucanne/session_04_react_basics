function TodoFilter({ filter, setFilter }) {
    const filters = [
        { key: "all", label: "📋 Tất cả", count: null },
        { key: "active", label: "⏳ Chưa xong", count: null },
        { key: "completed", label: "✅ Hoàn thành", count: null }
    ];
    
    return (
        <div style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
            padding: "10px",
            background: "#f8f9fa",
            borderRadius: "10px"
        }}>
            {filters.map(f => (
                <button 
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    style={{
                        flex: 1,
                        padding: "10px",
                        background: filter === f.key 
                            ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                            : "white",
                        color: filter === f.key ? "white" : "#666",
                        border: filter === f.key ? "none" : "1px solid #ddd",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.3s",
                        fontWeight: filter === f.key ? "bold" : "normal"
                    }}
                >
                    {f.label}
                </button>
            ))}
        </div>
    );
}

export default TodoFilter;