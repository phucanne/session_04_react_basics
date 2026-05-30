import { useState } from 'react';
import LifecycleDemo from './components/LifecycleDemo';
import BadCounter from './components/BadCounter';
import GoodCounter from './components/GoodCounter';
import FlowDemo from './components/FlowDemo';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('good-counter');
    
    const tabs = [
        { id: 'lifecycle', name: '🔄 Lifecycle', component: <LifecycleDemo /> },
        { id: 'bad-counter', name: '❌ Bad Counter', component: <BadCounter /> },
        { id: 'good-counter', name: '✅ Good Counter', component: <GoodCounter /> },
        { id: 'flow', name: '🎯 Flow Demo', component: <FlowDemo /> }
    ];
    
    return (
        <div className="app">
            <h1>🎓 Tier 1: Hiểu luồng hoạt động của React</h1>
            
            {/* Tab navigation */}
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
            
            {/* Tab content */}
            <div className="tab-content">
                {tabs.find(tab => tab.id === activeTab)?.component}
            </div>
            
            {/* Summary section */}
            <div className="summary">
                <h3>📚 Tổng kết Tier 1</h3>
                <ul>
                    <li>✅ Component mount = render lần đầu</li>
                    <li>✅ Biến thường KHÔNG gây re-render</li>
                    <li>✅ useState + setState = re-render</li>
                    <li>✅ Luồng: User action → setState → Re-render → UI cập nhật</li>
                </ul>
            </div>
        </div>
    );
}

export default App;