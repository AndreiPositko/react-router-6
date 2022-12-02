// libs
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// components
import Admin from './components/Admin';
import Products from './components/Products';
import ScrollToTop from './common/ScrollToTop';
import Navigation from './common/Navigation';
import ProtectedRoute from './common/ProtectedRoute';

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

function App1() {
  const [authenticated] = useState(true);
  return (
    <div className={AppStyles}>
        <Router>
          <ScrollToTop/>
          <div className='Container'>
            <Navigation/>
            <Routes>
              {/* 1st option - to use Outlet placeholder for children Routes */}
              {/* <Route path='/' element={<Products/>}>
                <Route path='/' element={<ProductsIndex/>}/>
                <Route path='/:id' element={<Product/>}/>
              </Route> */}

              {/* 2st option - to move child Routes to their parent location */}
              <Route path='/*' element={<Products/>}/>
              <Route
                path='/admin*'
                element={
                  <ProtectedRoute
                    authenticated={authenticated}
                    replaceTo='/'
                  >
                    <Admin/>
                  </ProtectedRoute>
                }
                >
              </Route>
              <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App1;
