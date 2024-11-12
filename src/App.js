// @ts-check

import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<layout />} />
    </Routes>
    </>
  )
}

export default App;
