import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from '@containers/Layout';
import Login from '@containers/Login';
import RecoveryPassword from '@containers/RecoveryPassword';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';

import '@styles/global.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={ <Home />}  />
            <Route path="/login" element={<Login/>} />
            <Route path="/recovery-password" element={<RecoveryPassword/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;