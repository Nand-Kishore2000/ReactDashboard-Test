
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Createads from './pages/Createads';
import Formpage from './pages/Formpage';


function App() {
  return (
    <div className="bg-gray-100">
     
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/createads' element={<Createads/>}/>
        <Route path='/formpage' element={<Formpage/>}/>
        


      </Routes>
      
      
    </div>
  );
}

export default App;
