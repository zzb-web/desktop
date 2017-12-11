import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import DeskTop from './Component/Desktop/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DeskTop />, document.getElementById('root'));
registerServiceWorker();
