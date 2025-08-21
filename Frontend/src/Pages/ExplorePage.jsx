import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import UserNavbar from '../Components/Navbar';

const ExplorePage = () => {
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/workspaces')
      .then(res => setWorkspaces(res.data))
      .catch(err => console.error('Error fetching workspaces:', err));
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      {/* <UserNavbar/> */}
      <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '30px' }}>All Workspaces</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {workspaces.length > 0 ? (
          workspaces.map(ws => (
            <div
              key={ws.id}
              style={{
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={ws.images?.[0] || 'https://via.placeholder.com/300x200?text=No+Image'}
                alt={ws.name}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '16px' }}>
                <h3 style={{ margin: 0, fontSize: '20px' }}>{ws.name}</h3>
                <p style={{ margin: '8px 0', color: '#555' }}>{ws.subcity} – {ws.tagline}</p>
                <p style={{ fontSize: '14px', color: '#777' }}>{ws.description?.slice(0, 80)}...</p>
              </div>
            </div>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
