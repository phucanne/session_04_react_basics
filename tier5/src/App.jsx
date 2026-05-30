import { useState } from 'react';
import ClickEvents from './components/ClickEvents';
import InputEvents from './components/InputEvents';
import KeyboardEvents from './components/KeyboardEvents';
import FormEvents from './components/FormEvents';
import ChallengeGames from './components/ChallengeGames';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('click');
    
    const tabs = [
        { id: 'click', name: '🖱️ Click Events', component: <ClickEvents /> },
        { id: 'input', name: '📝 Input Events', component: <InputEvents /> },
        { id: 'keyboard', name: '⌨️ Keyboard Events', component: <KeyboardEvents /> },
        { id: 'form', name: '📋 Form Events', component: <FormEvents /> },
        { id: 'todo', name: '✅ Todo List', component: <TodoList /> },
        { id: 'game', name: '🎮 Challenge Game', component: <ChallengeGames /> }
    ];
    
    // Helper để render nội dung tab
    const renderContent = () => {
        const currentTab = tabs.find(tab => tab.id === activeTab);
        return currentTab ? currentTab.component : <ClickEvents />;
    };
    
    return (
        <div className="app">
            <h1>🎓 Tier 5: Events cơ bản</h1>
            <p className="subtitle">Xử lý click, input, keyboard, form events</p>
            
            <div className="tabs">
                {tabs.map((tab) => (
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
                {renderContent()}
            </div>
            
            <div className="summary">
                <h3>📚 Tổng kết Tier 5</h3>
                <ul>
                    <li><strong>onClick</strong> - Xử lý click</li>
                    <li><strong>onChange</strong> - Xử lý input</li>
                    <li><strong>onKeyDown</strong> - Xử lý phím (Enter, Escape...)</li>
                    <li><strong>onSubmit</strong> - Xử lý form</li>
                    <li><strong>event.preventDefault()</strong> - Ngăn reload trang</li>
                    <li><strong>event.target.value</strong> - Lấy giá trị input</li>
                </ul>
            </div>
        </div>
    );
}

export default App;