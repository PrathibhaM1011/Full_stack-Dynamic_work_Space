import React from 'react'
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/explore");
  };

  return (
    <div style={{ padding: '50px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
      }}>
        <h1 style={{ margin: 0 }}>Explore our host of solutions</h1>
        <button
          onClick={handleViewAll}
          style={{
            fontWeight: 500,
            background: 'none',
            border: 'none',
            color: '#0057ff',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          View all ➝
        </button>
      </div>

      <h3 style={{ fontWeight: 400 }}>
        From coworking spaces to private offices, you can choose from a range of solutions or even bundle our offerings to tailor solutions to suit your business
      </h3>
    </div>
  )
};

export default Explore;
