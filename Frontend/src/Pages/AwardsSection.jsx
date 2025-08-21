import React, { useEffect, useState } from 'react';

const AwardsSection = () => {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/certificationsAndAwards')
      .then((res) => res.json())
      .then((data) => setAwards(data))
      .catch((err) => console.error('Failed to fetch awards:', err));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🏆 Certifications & Awards</h2>
      <div style={styles.grid}>
        {awards.map((award) => (
          <div key={award.id} style={styles.card}>
            <img src={award.image} alt={award.title} style={styles.image} />
            <h3 style={styles.title}>{award.title}</h3>
            <p style={styles.description}>{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '60px 20px',
    backgroundColor: '#f4f4f4',
    color: '#222',
    textAlign: 'center'
  },
  heading: {
    fontSize: '30px',
    marginBottom: '40px',
    fontWeight: 'bold',
    color: '#1a1a1a'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '28px',
    justifyContent: 'center',
    maxWidth: '1100px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: '#fff',
    padding: '18px',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    textAlign: 'left'
  },
  image: {
    width: '100%',
    height: '140px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '12px'
  },
  title: {
    fontSize: '17px',
    fontWeight: '600',
    marginBottom: '6px',
    color: '#111'
  },
  description: {
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.5'
  }
};

export default AwardsSection;
