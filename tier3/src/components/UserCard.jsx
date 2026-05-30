function UserCard({ name, email, avatar, age, role = "Thành viên" }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            margin: "10px",
            width: "280px",
            textAlign: "center",
            background: "white",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
            <img 
                src={avatar} 
                alt={name} 
                style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #667eea"
                }}
            />
            <h3 style={{ margin: "10px 0 5px", color: "#2c3e50" }}>{name}</h3>
            <p style={{ color: "#7f8c8d", margin: "5px 0" }}>📧 {email}</p>
            <p style={{ color: "#7f8c8d", margin: "5px 0" }}>🎂 {age} tuổi</p>
            <span style={{
                display: "inline-block",
                background: "#667eea",
                color: "white",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                marginTop: "10px"
            }}>
                {role}
            </span>
        </div>
    );
}

export default UserCard;