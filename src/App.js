
import './App.css';
import About from './components/About';
import Card from './components/Card';
import Dashboard from './components/Dashboard';
import GoPro from './components/GoPro';
import Greating from './components/Greating';
import ProjectDetail from './components/ProjectDetail';
import ProjectProgress from './components/ProjectProgress';
import Slot from './components/Slot';
import TotalRevenue from './components/TotalRevenue';
import TransactionDetail from './components/TransactionDetail';

function App() {
  return (
<>
    <div className='appMain' >
      <div className='col1'>
        <div className='c1r1'>
          <About /> 
        </div>
        <div className='c1r2'> 
          <Dashboard /> 
        </div>
        <div className='c1r3'> 
          <GoPro /> 
        </div>
      </div>

      <div className='col2'>
        <TotalRevenue />
        <div className='col2TH'>      
          <Card heading="Travel" para="Mobile Application"/>
          <Card heading="Hotel" para="Dashboard"/>
        </div>
        <Slot />
      </div>
      <div className='col3'>
        <Greating /> 
        <TransactionDetail /> 
        <div className='col3TH'>
        <ProjectDetail />  
        <ProjectProgress />  
        </div> 
          
      </div>

    </div>

    {/* <ProjectProgress /> */}
   
    
    </>
  );
}

export default App;
