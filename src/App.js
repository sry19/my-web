import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
        <Router>
          <Page />
        </Router>         
      </div>
  );
}

export default App;
