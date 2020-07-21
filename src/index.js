import React from 'react';
import App from './components/App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import './style.css';

// ReactDOM.render(<App />, document.querySelector('#root'));

render(
    (<BrowserRouter>
      <App />
    </BrowserRouter>), document.getElementById('root'));