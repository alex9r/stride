import React from 'react';
import { NavLink } from 'react-router-dom';

function Header({ user, onLogout }) {
  return (
    <header className="header">
      <h1>Stride 🚶</h1>
      {user && (
        <>
          <nav>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
              Dashboard
            </NavLink>
            <NavLink to="/leaderboard" className={({ isActive }) => isActive ? 'active' : ''}>
              Leaderboard
            </NavLink>
          </nav>
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
