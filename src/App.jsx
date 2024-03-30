import './App.css';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import About from './components/About';
import Claim from './components/Claim';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Sec6Cards from './components/Sec6Cards';
import Footer from './components/Footer';
import Doctor from './components/Doctor1';
import Doctor2 from './components/Doctor2 ';
import Doctor3 from './components/Doctor3';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Router>

        <Navbar />


     


        <Section1 />
        <About />
        <Claim />
        <Section4 />
        <Section5 />
        <Sec6Cards />
     
    
      
        <Routes>
          
          <Route path='doctor1' element={<Doctor/> } />
          <Route path='doctor2' element={<Doctor2 />} />
          <Route path='doctor3' element={<Doctor3 />} />
        </Routes>



        <Footer />

      </Router>





    </div>
  );
}

export default App;
