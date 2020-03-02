import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// import App from './main/app';
import Dashboard from './components/dashboard/dashboard';

ReactDom.render(<Dashboard />, document.getElementById('root'));
