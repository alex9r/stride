import React, { useState, useEffect } from 'react';
import { generateMockUsers, filterByProgram, getFriends } from '../utils/mockData';

function Leaderboard({ user }) {
  const [activeTab, setActiveTab] = useState('school');
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    // Generate mock rankings based on active tab
    const allUsers = generateMockUsers(user);
    
    let filteredUsers;
    switch (activeTab) {
      case 'friends':
        filteredUsers = getFriends(allUsers, user.id);
        break;
      case 'faculty':
        filteredUsers = filterByProgram(allUsers, user.program);
        break;
      case 'school':
      default:
        filteredUsers = allUsers;
        break;
    }

    setRankings(filteredUsers);
  }, [activeTab, user]);

  return (
    <div className="main-content">
      <div className="container">
        <div className="card">
          <h2>Leaderboard 🏆</h2>
          <p style={{ marginBottom: '1.5rem', color: '#666' }}>
            See how you rank against other UW students!
          </p>

          <div className="comparison-tabs">
            <button
              className={activeTab === 'school' ? 'active' : ''}
              onClick={() => setActiveTab('school')}
            >
              School-Wide
            </button>
            <button
              className={activeTab === 'faculty' ? 'active' : ''}
              onClick={() => setActiveTab('faculty')}
            >
              My Faculty
            </button>
            <button
              className={activeTab === 'friends' ? 'active' : ''}
              onClick={() => setActiveTab('friends')}
            >
              Friends
            </button>
          </div>

          <ul className="ranking-list">
            {rankings.map((rankedUser, index) => (
              <li
                key={rankedUser.id}
                className={`ranking-item ${rankedUser.isCurrentUser ? 'current-user' : ''}`}
              >
                <div className="rank">
                  {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                </div>
                <div className="user-info">
                  <div className="user-name">
                    {rankedUser.name}
                    {rankedUser.isCurrentUser && ' (You)'}
                  </div>
                  <div className="user-program">{rankedUser.program}</div>
                </div>
                <div className="steps">{rankedUser.steps.toLocaleString()} steps</div>
              </li>
            ))}
          </ul>

          {rankings.length === 0 && (
            <p style={{ textAlign: 'center', color: '#666', padding: '2rem' }}>
              No data available for this view.
            </p>
          )}
        </div>

        <div className="card">
          <h2>Your Stats</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Your Rank</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#667eea' }}>
                #{rankings.findIndex(u => u.isCurrentUser) + 1}
              </div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Total Participants</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#667eea' }}>
                {rankings.length}
              </div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Top Percentile</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#667eea' }}>
                {Math.round(((rankings.length - rankings.findIndex(u => u.isCurrentUser)) / rankings.length) * 100)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
