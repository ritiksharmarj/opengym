import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SingleWorkoutDetail from './pages/SingleWorkoutDetail';

const App = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/workout/:id' element={<SingleWorkoutDetail />}></Route>
    </Routes>

    <Footer />
  </BrowserRouter>
);

export default App;
