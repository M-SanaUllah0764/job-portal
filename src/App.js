import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import JobForm from './components/JobForm';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import NotFound from './NotFound';
import Footer from './components/Footer';
import { Container } from '@mui/material';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        <NavBar />
        <Container component="main" sx={{ flex: '1' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/create-job" element={<PrivateRoute><JobForm /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
