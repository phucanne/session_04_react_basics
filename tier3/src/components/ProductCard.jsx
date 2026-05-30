function ProductCard({ name, price, image, inStock = true }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px",
            width: "250px",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
            background: "white"
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
        }}>
            <img 
                src={image} 
                alt={name} 
                style={{ 
                    width: "100%", 
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px"
                }} 
            />
            <h3 style={{ margin: "10px 0", fontSize: "18px" }}>{name}</h3>
            <p style={{ color: "#e74c3c", fontWeight: "bold", fontSize: "20px" }}>
                {price.toLocaleString("vi-VN")}đ
            </p>
            {!inStock && (
                <p style={{ color: "red", fontSize: "14px" }}>❌ Hết hàng</p>
            )}
            <button 
                disabled={!inStock}
                style={{
                    background: inStock ? "#3498db" : "#95a5a6",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    borderRadius: "5px",
                    cursor: inStock ? "pointer" : "not-allowed",
                    width: "100%",
                    fontSize: "14px",
                    marginTop: "10px"
                }}
            >
                {inStock ? "🛒 Thêm vào giỏ" : "⛔ Tạm hết hàng"}
            </button>
        </div>
    );
}

export default ProductCard;