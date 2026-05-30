import { useState } from 'react';
import ListBasics from './components/ListBasics';
import CreateItem from './components/CreateItem';
import DeleteItem from './components/DeleteItem';
import UpdateItem from './components/UpdateItem';
import FullCRUD from './components/FullCRUD';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('list');
    
    const tabs = [
        { id: 'list', name: '📋 List Basics', component: <ListBasics /> },
        { id: 'create', name: '➕ CREATE', component: <CreateItem /> },
        { id: 'delete', name: '🗑 DELETE', component: <DeleteItem /> },
        { id: 'update', name: '✏️ UPDATE', component: <UpdateItem /> },
        { id: 'crud', name: '🎯 Full CRUD', component: <FullCRUD /> }
    ];
    
    const currentComponent = tabs.find(tab => tab.id === activeTab)?.component;
    
    return (
        <div className="app">
            <h1>🎓 Tier 6: Lists &amp; CRUD</h1>
            <p className="subtitle">Thêm, Sửa, Xóa, Đọc danh sách</p>
            
            <div className="tabs">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            
            <div className="tab-content">
                {currentComponent}
            </div>
            
            <div className="summary">
                <h3>📚 Tổng kết Tier 6 - CRUD Operations</h3>
                <ul>
                    <li><strong>CREATE:</strong> Spread operator (...) - Thêm phần tử</li>
                    <li><strong>READ:</strong> map() - Hiển thị danh sách</li>
                    <li><strong>UPDATE:</strong> map() + conditional - Sửa phần tử</li>
                    <li><strong>DELETE:</strong> filter() - Xóa phần tử</li>
                    <li><strong>Key:</strong> Luôn dùng key khi render danh sách</li>
                </ul>
            </div>
        </div>
    );
}

export default App;