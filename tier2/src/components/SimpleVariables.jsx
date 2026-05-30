function SimpleVariables() {
    // Các biến JavaScript
    const name = "Nguyễn Văn Minh";
    const age = 20;
    const hometown = "Hà Nội";
    const isStudent = true;
    const subjects = ["HTML", "CSS", "JavaScript", "React"];
    const currentHour = new Date().getHours();
    
    // Tính BMI
    const weight = 65; // kg
    const height = 1.75; // m
    const bmi = weight / (height * height);
    
    // Lời chào theo giờ
    const getGreeting = () => {
        if (currentHour < 12) return "🌅 Chào buổi sáng";
        if (currentHour < 18) return "☀️ Chào buổi chiều";
        return "🌙 Chào buổi tối";
    };
    
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>📝 Bài 2.1: Biến trong JSX</h1>
            
            {/* Hiển thị biến */}
            <div style={{ background: "#f0f0f0", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>Thông tin cá nhân</h2>
                <p><strong>Họ tên:</strong> {name}</p>
                <p><strong>Tuổi:</strong> {age}</p>
                <p><strong>Quê quán:</strong> {hometown}</p>
                <p><strong>Trạng thái:</strong> {isStudent ? "Sinh viên" : "Đã đi làm"}</p>
                <p><strong>Lời chào:</strong> {getGreeting()}</p>
            </div>
            
            {/* Tính toán trong JSX */}
            <div style={{ background: "#e8f4f8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>🧮 Tính toán</h2>
                <p><strong>Tuổi sau 5 năm:</strong> {age + 5}</p>
                <p><strong>Năm sinh:</strong> {new Date().getFullYear() - age}</p>
                <p><strong>Tên viết hoa:</strong> {name.toUpperCase()}</p>
                <p><strong>Thời gian hiện tại:</strong> {new Date().toLocaleTimeString()}</p>
            </div>
            
            {/* Tính BMI */}
            <div style={{ background: "#e8f8e8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>⚖️ Chỉ số BMI</h2>
                <p><strong>Cân nặng:</strong> {weight} kg</p>
                <p><strong>Chiều cao:</strong> {height} m</p>
                <p><strong>BMI:</strong> {bmi.toFixed(2)}</p>
                <p><strong>Đánh giá:</strong> {
                    bmi < 18.5 ? "Gầy" :
                    bmi < 25 ? "Bình thường" :
                    bmi < 30 ? "Thừa cân" : "Béo phì"
                }</p>
            </div>
            
            {/* Hiển thị array */}
            <div style={{ background: "#fff4e8", padding: "15px", borderRadius: "8px" }}>
                <h2>📚 Môn học</h2>
                <p><strong>Số môn:</strong> {subjects.length}</p>
                <p><strong>Danh sách:</strong> {subjects.join(" → ")}</p>
                <p><strong>Môn đầu tiên:</strong> {subjects[0]}</p>
                <p><strong>Môn cuối cùng:</strong> {subjects[subjects.length - 1]}</p>
            </div>
        </div>
    );
}

export default SimpleVariables;