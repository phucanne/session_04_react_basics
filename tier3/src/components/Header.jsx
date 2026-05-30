function Header() {
    return (
        <header style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "20px 0",
            textAlign: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
                <h1 style={{ margin: 0, fontSize: "28px" }}>🏪 React Shop</h1>
                <nav style={{ marginTop: "15px" }}>
                    <a href="#" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Trang chủ</a>
                    <a href="#" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Sản phẩm</a>
                    <a href="#" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Giới thiệu</a>
                    <a href="#" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Liên hệ</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;