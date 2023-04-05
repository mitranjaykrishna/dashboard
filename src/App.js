
import './App.css';
import About from './components/About';
import Dashboard from './components/Dashboard';
import GoPro from './components/GoPro';
import TotalRevenue from './components/TotalRevenue';

function App() {
  return (
    <div className='appMain' >
      <About />  
      <Dashboard />  
      <GoPro /> 
      <TotalRevenue />
    </div>
  );
}

export default App;
