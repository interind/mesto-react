import React from 'react';
import '../styles/index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Popups from './Popups.js';
import Template from './Template';

function App() {
  return (
    <>
      <div className='page'>
        <Header />
        <Main />
        <Footer />
        <Popups />
        <Template />
      </div>
    </>
  );
}

export default App;
