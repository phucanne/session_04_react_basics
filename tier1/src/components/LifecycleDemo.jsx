function LifecycleDemo() {
    console.log("1️⃣ Component được gọi!");
    
    return (
        <div style={{ 
            padding: "20px", 
            border: "2px solid #3498db",
            borderRadius: "10px",
            margin: "10px"
        }}>
            <h2>🔄 Lifecycle Demo</h2>
            <p>Mở Console (F12) để xem log</p>
            <p>Component này chỉ render <strong>MỘT lần</strong></p>
            <div style={{ 
                background: "#e8e8e8", 
                padding: "10px", 
                borderRadius: "5px",
                marginTop: "10px"
            }}>
                💡 Hướng dẫn: Refresh trang và xem Console
            </div>
        </div>
    );
}

export default LifecycleDemo;