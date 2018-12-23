import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'

axios.defaults.baseURL = 'https://london-api.petar.io/api'

ReactDOM.render(<App />, document.getElementById('root'));
