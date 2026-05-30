import { useState } from 'react';
import SimpleVariables from './components/SimpleVariables';
import TernaryDemo from './components/TernaryDemo';
import AndDemo from './components/AndDemo';
import ListRendering from './components/ListRendering';
import ChallengeExercises from './components/ChallengeExercises';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('variables');
    
    const tabs = [
        { id: 'variables', name: '📝 Biến trong JSX', component: <SimpleVariables /> },
        { id: 'ternary', name: '🔀 Ternary ( ? : )', component: <TernaryDemo /> },
        { id: 'and', name: '🔗 And ( && )', component: <AndDemo /> },
        { id: 'list', name: '📋 Render list', component: <ListRendering /> },
        { id: 'challenge', name: '🏆 Thử thách', component: <ChallengeExercises /> }
    ];
    
    return (
        <div className="app">
            <h1>🎓 Tier 2: Biến trong JSX</h1>
            <p className="subtitle">Dùng {"{}"} để nhúng JavaScript vào giao diện</p>
            
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
                {tabs.find(tab => tab.id === activeTab)?.component}
            </div>
            
            <div className="summary">
                <h3>📚 Tổng kết Tier 2</h3>
                <ul>
                    <li>✅ <code>{"{variable}"}</code> - Hiển thị biến</li>
                    <li>✅ <code>{"{condition ? 'A' : 'B'}"}</code> - Hiển thị có điều kiện</li>
                    <li>✅ <code>{"{condition && <div>Hello</div>}"}</code> - Hiện/ẩn component</li>
                    <li>✅ <code>{"{array.map(item => <div key={item.id}>{item.name}</div>)}"}</code> - Render danh sách</li>
                    <li>✅ <strong>key</strong> - Bắt buộc khi render danh sách</li>
                </ul>
            </div>
        </div>
    );
}

export default App;