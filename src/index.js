import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'


ReactDOM.render(
  <React.StrictMode>
    <div style={{"marginLeft": "0", "marginTop": "0", "display": "flex", "flexDirection": "column", "width": "100.5%", "height": "100%"}}> 
        <Header />
        <Content />
        <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

