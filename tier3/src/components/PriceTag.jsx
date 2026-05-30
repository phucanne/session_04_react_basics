function PriceTag({ originalPrice, salePrice, currency = "đ" }) {
    const discount = ((originalPrice - salePrice) / originalPrice * 100).toFixed(0);
    const isOnSale = salePrice < originalPrice;
    
    return (
        <div style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "15px",
            borderRadius: "10px",
            color: "white",
            textAlign: "center",
            minWidth: "200px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
        }}>
            {isOnSale ? (
                <>
                    <p style={{ 
                        textDecoration: "line-through", 
                        fontSize: "14px",
                        opacity: 0.8
                    }}>
                        {originalPrice.toLocaleString("vi-VN")}{currency}
                    </p>
                    <p style={{ fontSize: "28px", fontWeight: "bold", margin: "5px 0" }}>
                        {salePrice.toLocaleString("vi-VN")}{currency}
                    </p>
                    <span style={{
                        background: "#e74c3c",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "bold"
                    }}>
                        🔥 Giảm {discount}%
                    </span>
                </>
            ) : (
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                    {originalPrice.toLocaleString("vi-VN")}{currency}
                </p>
            )}
        </div>
    );
}

export default PriceTag;