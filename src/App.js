// @ts-check

import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout-index';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
    </>
  )
}

export default App;
