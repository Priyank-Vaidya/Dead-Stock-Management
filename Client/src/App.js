import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Histroy from './Pages/History';
import Messages from './Pages/Messages';
import Charts from './Pages/Charts';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Dashboard /> } />
      <Route path='/History' element = { <Histroy />} />
      <Route path='/Messages' element = {<Messages />}/>
      <Route path='/Charts' element = { <Charts /> }/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
