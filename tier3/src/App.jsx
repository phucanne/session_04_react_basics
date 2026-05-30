import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import ProductGrid from "./components/ProductGrid";
import UserCard from "./components/UserCard";
import PriceTag from "./components/PriceTag";
import "./App.css";

function App() {
    // Dữ liệu mẫu
    const products = [
        { id: 1, name: "iPhone 15 Pro Max", price: 29900000, image: "https://picsum.photos/id/0/200/200", inStock: true },
        { id: 2, name: "Samsung Galaxy S24 Ultra", price: 28900000, image: "https://picsum.photos/id/1/200/200", inStock: true },
        { id: 3, name: "Xiaomi 14 Pro", price: 18900000, image: "https://picsum.photos/id/2/200/200", inStock: false },
        { id: 4, name: "Google Pixel 8 Pro", price: 22900000, image: "https://picsum.photos/id/3/200/200", inStock: true },
        { id: 5, name: "OnePlus 12", price: 19900000, image: "https://picsum.photos/id/4/200/200", inStock: true },
        { id: 6, name: "Nothing Phone 2", price: 15900000, image: "https://picsum.photos/id/5/200/200", inStock: false }
    ];

    const users = [
        { id: 1, name: "Nguyễn Văn Minh", email: "minh@example.com", age: 20, avatar: "https://randomuser.me/api/portraits/men/1.jpg", role: "Admin" },
        { id: 2, name: "Trần Thị An", email: "an@example.com", age: 21, avatar: "https://randomuser.me/api/portraits/women/2.jpg", role: "Thành viên" },
        { id: 3, name: "Lê Hoàng Linh", email: "linh@example.com", age: 19, avatar: "https://randomuser.me/api/portraits/men/3.jpg", role: "Thành viên" }
    ];

    return (
        <div className="app">
            <Header />
            
            <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
                {/* Bài 3.1 & 3.2: Product Grid */}
                <section style={{ marginBottom: "40px" }}>
                    <ProductGrid products={products} title="🛍️ Sản phẩm nổi bật" />
                </section>

                {/* Bài 3.3: Props Demo */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📞 Props Demo - Component Greeting</h2>
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        <Greeting name="Minh" age={20} isStudent={true} />
                        <Greeting name="An" age={21} isStudent={false} />
                        <Greeting name="Linh" age={19} isStudent={true} />
                    </div>
                </section>

                {/* Thử thách 1: User Cards */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>👥 Thành viên</h2>
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        {users.map(user => (
                            <UserCard
                                key={user.id}
                                name={user.name}
                                email={user.email}
                                age={user.age}
                                avatar={user.avatar}
                                role={user.role}
                            />
                        ))}
                    </div>
                </section>

                {/* Thử thách 2: Price Tags */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>💰 Khuyến mãi đặc biệt</h2>
                    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                        <PriceTag originalPrice={29900000} salePrice={24900000} />
                        <PriceTag originalPrice={18900000} salePrice={15900000} />
                        <PriceTag originalPrice={15900000} salePrice={15900000} />
                    </div>
                </section>

                {/* Tổng kết lợi ích của việc chia component */}
                <section style={{
                    background: "#f8f9fa",
                    padding: "20px",
                    borderRadius: "10px",
                    marginTop: "40px"
                }}>
                    <h2>✨ Lợi ích của việc chia Component</h2>
                    <ul>
                        <li>✅ File nhỏ gọn, dễ đọc (mỗi file chỉ 20-30 dòng)</li>
                        <li>✅ Tái sử dụng component nhiều lần (ProductCard dùng 6 lần)</li>
                        <li>✅ Dễ bảo trì, sửa lỗi (sửa 1 chỗ là tất cả thay đổi)</li>
                        <li>✅ Làm việc nhóm dễ dàng (mỗi người 1 component)</li>
                        <li>✅ Dễ test và debug</li>
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;