import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Histroy from './Pages/History';
import Messages from './Pages/Messages';
import Charts from './Pages/Charts';
import React from 'react';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Dashboard key = "dashboard" /> } />
      <Route path='/History' element = { <Histroy key="history" />} />
      <Route path='/Messages' element = {<Messages key="message" />}/>
      <Route path='/Charts' element = { <Charts key="charts" /> }/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
