import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
