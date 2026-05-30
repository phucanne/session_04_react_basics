import { useState } from "react";

function FlowDemo() {
    console.log("🔄 FlowDemo re-render!");
    
    const [step, setStep] = useState(1);
    
    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };
    
    const handlePrev = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };
    
    const handleReset = () => {
        setStep(1);
    };
    
    // Nội dung theo từng bước
    const getStepContent = () => {
        switch(step) {
            case 1:
                return {
                    icon: "👋",
                    title: "Bước 1: Mount lần đầu",
                    content: "Component được tạo và hiển thị lên màn hình",
                    color: "#3498db"
                };
            case 2:
                return {
                    icon: "📖",
                    title: "Bước 2: User tương tác",
                    content: "Người dùng click nút → gọi setState",
                    color: "#e67e22"
                };
            case 3:
                return {
                    icon: "🎯",
                    title: "Bước 3: Re-render",
                    content: "React gọi lại component → cập nhật UI",
                    color: "#9b59b6"
                };
            case 4:
                return {
                    icon: "🎉",
                    title: "Bước 4: Hoàn thành!",
                    content: "Bạn đã hiểu luồng hoạt động của React",
                    color: "#27ae60"
                };
            default:
                return {
                    icon: "❓",
                    title: "Unknown",
                    content: "",
                    color: "#95a5a6"
                };
        }
    };
    
    const stepInfo = getStepContent();
    
    return (
        <div style={{ 
            padding: "20px", 
            border: `2px solid ${stepInfo.color}`,
            borderRadius: "10px",
            margin: "10px",
            background: "white"
        }}>
            <h2>🔄 Luồng hoạt động của React</h2>
            
            {/* Progress bar */}
            <div style={{ 
                margin: "20px 0",
                background: "#ecf0f1",
                borderRadius: "10px",
                height: "10px"
            }}>
                <div style={{
                    width: `${(step / 4) * 100}%`,
                    background: stepInfo.color,
                    height: "10px",
                    borderRadius: "10px",
                    transition: "width 0.3s"
                }}></div>
            </div>
            
            {/* Step indicator */}
            <div style={{ 
                display: "flex", 
                justifyContent: "space-between",
                marginBottom: "20px"
            }}>
                {[1, 2, 3, 4].map(s => (
                    <div key={s} style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: s <= step ? stepInfo.color : "#ecf0f1",
                        color: s <= step ? "white" : "#95a5a6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold"
                    }}>
                        {s}
                    </div>
                ))}
            </div>
            
            {/* Step content */}
            <div style={{
                padding: "20px",
                background: `rgba(${stepInfo.color === "#3498db" ? "52,152,219" : 
                              stepInfo.color === "#e67e22" ? "230,126,34" :
                              stepInfo.color === "#9b59b6" ? "155,89,182" :
                              "39,174,96"}, 0.1)`,
                borderRadius: "10px",
                textAlign: "center"
            }}>
                <div style={{ fontSize: "48px" }}>{stepInfo.icon}</div>
                <h3 style={{ color: stepInfo.color }}>{stepInfo.title}</h3>
                <p>{stepInfo.content}</p>
            </div>
            
            {/* Buttons */}
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <button 
                    onClick={handlePrev}
                    disabled={step === 1}
                    style={{
                        background: step === 1 ? "#bdc3c7" : "#3498db",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: step === 1 ? "not-allowed" : "pointer",
                        marginRight: "10px"
                    }}
                >
                    ← Quay lại
                </button>
                <button 
                    onClick={handleNext}
                    disabled={step === 4}
                    style={{
                        background: step === 4 ? "#bdc3c7" : "#3498db",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: step === 4 ? "not-allowed" : "pointer",
                        marginRight: "10px"
                    }}
                >
                    Bước tiếp theo →
                </button>
                <button 
                    onClick={handleReset}
                    style={{
                        background: "#e74c3c",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    Quay lại đầu
                </button>
            </div>
            
            {/* Console提示 */}
            <div style={{ 
                marginTop: "20px", 
                padding: "10px", 
                background: "#2c3e50",
                color: "#ecf0f1",
                borderRadius: "5px",
                fontSize: "12px",
                fontFamily: "monospace"
            }}>
                🔍 Console log: Mỗi lần setStep đều gây re-render
            </div>
        </div>
    );
}

export default FlowDemo;