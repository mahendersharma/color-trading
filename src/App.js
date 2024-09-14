// Import dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import  SinginForm from './components/singin'; 
import  RegistartionForm from './components/RegistartionForm'; 
import  PickOne from './pages/pickOne'; 
import  ColorTreading from './pages/ColorTreading'; 

function App() {
  return (
    <Router>
      <div>
        <Header />        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign-in" element={<SinginForm />} />
          <Route path="/registartion-Form" element={<RegistartionForm />} />
          <Route path="/pick-one" element={<PickOne />} />
          <Route path="/color-treading" element={<ColorTreading />} />

          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
