import UserProfile from './components/UserProfile';   // ← Đúng đường dẫn
import ProductInfo from './components/ProductInfo';   // ← Đúng đường dẫn
import './App.css';

function App() {
    return (
        <div className="app">
            <h1>🏠 Demo React Components</h1>
            
            <div className="container">
                <UserProfile />
                <ProductInfo />
            </div>
        </div>
    );
}

export default App;