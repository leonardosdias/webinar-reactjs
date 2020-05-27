import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import SideBar from './components/SideBar/SideBar';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex" id="wrapper">
      <BrowserRouter>
        <SideBar />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
