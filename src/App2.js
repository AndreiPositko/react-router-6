// libs
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

// components
import RoutesHolder from './common/RoutesHolder/RoutesHolder';
import ScrollToTop from './common/ScrollToTop';
import Navigation from './common/Navigation';

// styles
import {css} from '@emotion/css';

const AppStyles = css`
  margin: 50px auto;
  width: 380px;
  .Container {
    background: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 6px;
    padding: 25px;
  }
`

function App() {
  return (
    <div className={AppStyles}>
        <Router>
          <ScrollToTop/>
          <div className='Container'>
            <Navigation/>
            <RoutesHolder/>
          </div>
        </Router>
    </div>
  );
}

export default App;
