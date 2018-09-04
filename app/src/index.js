import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List from './List';
import Switch from './switch';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
    <App />
    <List />
    <Switch />
    </div>, document.getElementById('root'));
registerServiceWorker();
