// Import dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './ProtectedRoute';
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
          <Route path="/login" element={<SignInForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/pick-one" element={<ProtectedRoute><PickOne /></ProtectedRoute>} />
          <Route path="/color-treading" element={<ProtectedRoute><ColorTreading /></ProtectedRoute>} />
          <Route path="/withdraw" element={<ProtectedRoute><Withdraw /></ProtectedRoute>} />
          <Route path="/personal-details" element={<ProtectedRoute><PersonalDetails /></ProtectedRoute>} />
          <Route path="/add-deposit" element={<ProtectedRoute><AddDeposit /></ProtectedRoute>} />
          <Route path="/change-password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
          <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
          <Route path="/add-account" element={<ProtectedRoute><AddAccount /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
