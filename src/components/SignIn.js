import React, { useState } from 'react';
import { programs } from '../utils/mockData';

function SignIn({ onSignIn }) {
  const [formData, setFormData] = useState({
    name: '',
    program: '',
    fitnessPermission: false
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!formData.program) {
      setError('Please select your program');
      return;
    }

    if (!formData.fitnessPermission) {
      setError('Please grant permission to access your fitness data');
      return;
    }

    // Sign in
    onSignIn(formData);
  };

  return (
    <div className="main-content">
      <div className="container" style={{ maxWidth: '500px' }}>
        <div className="card">
          <h2>Welcome to Stride</h2>
          <p style={{ marginBottom: '2rem', color: '#666' }}>
            Track your steps, compete with friends, and see how you rank among UW students!
          </p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="program">Program / Faculty</label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
              >
                <option value="">Select your program</option>
                {programs.map(program => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="fitnessPermission"
                  name="fitnessPermission"
                  checked={formData.fitnessPermission}
                  onChange={handleChange}
                />
                <label htmlFor="fitnessPermission">
                  I grant permission for Stride to access my fitness data
                </label>
              </div>
            </div>

            <button type="submit" className="btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
