import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './common/main';
import registerServiceWorker from './common/registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
