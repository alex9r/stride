import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already signed in (from localStorage)
    const savedUser = localStorage.getItem('strideUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Error parsing saved user:', e);
      }
    }
    setIsLoading(false);
  }, []);

  const handleSignIn = (userData) => {
    const newUser = {
      ...userData,
      steps: Math.floor(Math.random() * 8000) + 2000, // Initial random steps for demo
      id: Date.now()
    };
    setUser(newUser);
    localStorage.setItem('strideUser', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('strideUser');
  };

  const handleUpdateSteps = (newSteps) => {
    if (user) {
      const updatedUser = { ...user, steps: newSteps };
      setUser(updatedUser);
      localStorage.setItem('strideUser', JSON.stringify(updatedUser));
    }
  };

  if (isLoading) {
    return (
      <div className="app" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ color: 'white' }}>Loading...</h2>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Header user={user} onLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <SignIn onSignIn={handleSignIn} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              user ? (
                <Dashboard user={user} onUpdateSteps={handleUpdateSteps} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/leaderboard"
            element={
              user ? (
                <Leaderboard user={user} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
