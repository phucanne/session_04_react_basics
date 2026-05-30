function Greeting({ name, age, isStudent = false }) {
    return (
        <div style={{
            background: "#f0f0f0",
            padding: "15px",
            borderRadius: "8px",
            margin: "10px",
            borderLeft: `4px solid ${isStudent ? "#3498db" : "#2ecc71"}`
        }}>
            <h3>Xin chào {name}!</h3>
            <p>Tuổi: {age}</p>
            <p>Trạng thái: {isStudent ? "🎓 Sinh viên" : "💼 Đã đi làm"}</p>
        </div>
    );
}

export default Greeting;