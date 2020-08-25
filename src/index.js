import React from 'react';
import  ReactDOM  from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import ImageUpload from './components/ImageUpload';

ReactDOM.render(
  <BrowserRouter>
      <ImageUpload />
  </BrowserRouter>, 
  document.getElementById('root')
)