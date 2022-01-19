import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Content />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

