import { useState } from 'react';
import NumberState from './components/NumberState';
import StringState from './components/StringState';
import BooleanState from './components/BooleanState';
import MultipleStates from './components/MultipleStates';
import ChallengeForm from './components/ChallengeForm';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('number');
    
    const tabs = [
        { id: 'number', name: '🔢 Number State', component: <NumberState /> },
        { id: 'string', name: '📝 String State', component: <StringState /> },
        { id: 'boolean', name: '🎛️ Boolean State', component: <BooleanState /> },
        { id: 'multiple', name: '📊 Multiple States', component: <MultipleStates /> },
        { id: 'challenge', name: '🏆 Challenge', component: <ChallengeForm /> }
    ];
    
    return (
        <div className="app">
            <h1>🎓 Tier 4: useState cơ bản</h1>
            <p className="subtitle">Quản lý trạng thái với số, chuỗi, boolean</p>
            
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
                <h3>📚 Tổng kết Tier 4</h3>
                <ul>
                    <li><code>const [count, setCount] = useState(0)</code> - State số</li>
                    <li><code>const [text, setText] = useState("")</code> - State chuỗi</li>
                    <li><code>const [isOn, setIsOn] = useState(false)</code> - State boolean</li>
                    <li><code>value + onChange</code> - Controlled input pattern</li>
                    <li><code>setState(!state)</code> - Toggle pattern</li>
                    <li><code>setState(e.target.value)</code> - Lấy giá trị từ input</li>
                </ul>
            </div>
        </div>
    );
}

export default App;