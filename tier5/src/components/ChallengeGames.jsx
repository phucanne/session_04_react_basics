import { useState, useEffect } from "react";

function ChallengeGames() {
    const [targetKey, setTargetKey] = useState("");
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameActive, setGameActive] = useState(false);
    const [message, setMessage] = useState("");
    
    // Danh sách phím
    const keys = ["a", "s", "d", "f", "j", "k", "l", ";"];
    
    useEffect(() => {
        if (gameActive && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && gameActive) {
            setGameActive(false);
            setMessage(`Game over! Điểm của bạn: ${score}`);
        }
    }, [gameActive, timeLeft, score]);
    
    const startGame = () => {
        setScore(0);
        setTimeLeft(30);
        setGameActive(true);
        setMessage("");
        generateRandomKey();
    };
    
    const generateRandomKey = () => {
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        setTargetKey(randomKey);
    };
    
    const handleKeyPress = (event) => {
        if (!gameActive) return;
        
        const pressedKey = event.key.toLowerCase();
        if (pressedKey === targetKey) {
            setScore(score + 10);
            generateRandomKey();
            setMessage("✅ Chính xác! +10 điểm");
            setTimeout(() => setMessage(""), 500);
        } else if (keys.includes(pressedKey)) {
            setMessage(`❌ Sai rồi! Cần nhấn "${targetKey}"`);
            setTimeout(() => setMessage(""), 500);
        }
    };
    
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [gameActive, targetKey, score]);
    
    return (
        <div style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            textAlign: "center"
        }}>
            <h2>🎮 Challenge: Game luyện gõ phím</h2>
            
            {!gameActive ? (
                <div>
                    <p>Nhấn đúng phím hiển thị để ghi điểm!</p>
                    <p>Phím cần gõ: <strong>{keys.join(", ")}</strong></p>
                    <button onClick={startGame} style={buttonStyle}>Bắt đầu chơi!</button>
                    {message && <p style={{ color: "#3498db", marginTop: "10px" }}>{message}</p>}
                </div>
            ) : (
                <div>
                    <div style={{
                        background: "#2c3e50",
                        padding: "40px",
                        borderRadius: "15px",
                        marginBottom: "20px"
                    }}>
                        <p style={{ color: "white", marginBottom: "10px" }}>Nhấn phím:</p>
                        <p style={{
                            fontSize: "80px",
                            fontWeight: "bold",
                            color: "#f1c40f",
                            letterSpacing: "20px"
                        }}>
                            {targetKey.toUpperCase()}
                        </p>
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
                        <div>
                            <p>⏱️ Thời gian</p>
                            <p style={{ fontSize: "32px", fontWeight: "bold", color: timeLeft < 10 ? "#e74c3c" : "#2ecc71" }}>
                                {timeLeft}s
                            </p>
                        </div>
                        <div>
                            <p>🏆 Điểm</p>
                            <p style={{ fontSize: "32px", fontWeight: "bold", color: "#3498db" }}>
                                {score}
                            </p>
                        </div>
                    </div>
                    
                    {message && <p style={{ color: "#2ecc71" }}>{message}</p>}
                    
                    <button onClick={startGame} style={{...buttonStyle, background: "#e74c3c"}}>Chơi lại</button>
                </div>
            )}
        </div>
    );
}

const buttonStyle = {
    padding: "15px 30px",
    fontSize: "18px",
    background: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px"
};

export default ChallengeGames;