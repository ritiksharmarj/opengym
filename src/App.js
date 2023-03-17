import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SingleWorkoutDetail from './pages/SingleWorkoutDetail';

const App = () => (
  <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/workout/:id' element={<SingleWorkoutDetail />}></Route>
    </Routes>

    <Footer />
  </>
);

export default App;
