import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <div className='main'>
    <div>
      <Sidebar/>
    </div>
    <div className='content'>
      <Header/>
      <Content/>
    </div>
    </div>
  );
}

export default App;
