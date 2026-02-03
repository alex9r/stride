import React, { useState, useEffect } from 'react';
import { calculateProgress, DAILY_STEP_GOAL } from '../utils/mockData';

function Dashboard({ user, onUpdateSteps }) {
  const [steps, setSteps] = useState(user.steps || 0);

  useEffect(() => {
    // Simulate step counting - in a real app, this would connect to a fitness API
    const interval = setInterval(() => {
      setSteps(prev => {
        const newSteps = prev + Math.floor(Math.random() * 50);
        onUpdateSteps(newSteps);
        return newSteps;
      });
    }, 5000); // Update every 5 seconds for demo

    return () => clearInterval(interval);
  }, [onUpdateSteps]);

  const progress = calculateProgress(steps);

  return (
    <div className="main-content">
      <div className="container">
        <div className="welcome-message">
          <h2>Welcome back, {user.name}! 👋</h2>
          <p>{user.program}</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Today's Steps</h3>
            <div className="stat-value">{steps.toLocaleString()}</div>
            <div className="stat-label">steps</div>
          </div>

          <div className="stat-card">
            <h3>Daily Goal</h3>
            <div className="stat-value">{DAILY_STEP_GOAL.toLocaleString()}</div>
            <div className="stat-label">steps</div>
          </div>

          <div className="stat-card">
            <h3>Progress</h3>
            <div className="stat-value">{progress}%</div>
            <div className="stat-label">of daily goal</div>
          </div>
        </div>

        <div className="card">
          <h2>Daily Progress</h2>
          <div style={{ 
            height: '40px', 
            backgroundColor: '#e0e0e0', 
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              transition: 'width 0.5s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}>
              {progress > 10 && `${progress}%`}
            </div>
          </div>
          <p style={{ marginTop: '1rem', color: '#666', textAlign: 'center' }}>
            {steps >= DAILY_STEP_GOAL 
              ? '🎉 Congratulations! You\'ve reached your daily goal!' 
              : `${(DAILY_STEP_GOAL - steps).toLocaleString()} steps to go!`}
          </p>
        </div>

        <div className="card">
          <h2>Quick Stats</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Avg Steps/Day</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                {Math.floor(steps * 0.9).toLocaleString()}
              </div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Total Distance</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                {(steps * 0.0008).toFixed(1)} km
              </div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Calories Burned</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                {Math.floor(steps * 0.04)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
