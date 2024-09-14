// Import dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import SignInForm from './components/SignInForm.js'; 
import RegistrationForm from './components/RegistrationForm.jsx'; 
import PickOne from './pages/PickOne.jsx'; 
import ColorTreading from './pages/ColorTreading'; 
import PersonalDetails from './pages/account/PersonalDetails'; 
import Withdraw from './pages/account/Withdraw'; 
import AddDeposit from './pages/account/AddDeposit.jsx'; 
import ChangePassword from './pages/account/ChangePassword'; 
import Orders from './pages/account/Orders'; 
import Transactions from './pages/account/Transactions'; 
import AddAccount from './pages/account/AddAccount'; 

function App() {
  return (
    <Router>
      <div>
        <Header />        
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/registration-form" element={<RegistrationForm />} />
          <Route path="/pick-one" element={<PickOne />} />
          <Route path="/color-treading" element={<ColorTreading />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/add-deposit" element={<AddDeposit />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/add-account" element={<AddAccount />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
