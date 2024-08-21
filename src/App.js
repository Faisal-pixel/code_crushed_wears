import React from 'react';
import {Route, Routes} from "react-router-dom"
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Error from './pages/Error.component';
const HatsPage = () => {
  return (
    <div>
    <h1>HATS PAGE</h1>
  </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Homepage />}/> 
      <Route path="/shop/hats" element={<HatsPage />}/>
      <Route path='*' element = {<Error />} />
      </Routes>
    </div>
  );
}

export default App;
