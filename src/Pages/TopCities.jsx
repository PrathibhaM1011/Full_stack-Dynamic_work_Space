import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TopCities = () => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/locations')
      .then(res => setLocations(res.data))
      .catch(err => console.error("Locations fetch failed", err))
  }, [])

  const totalCities = locations.length
  const totalSubcities = locations.reduce((acc, city) => acc + city.subcities.length, 0)

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        Choose from <span style={styles.highlight}>{totalSubcities}</span> centres across{' '}
        <span style={styles.highlight}>{totalCities}</span> cities in India
      </h2>

      <div style={styles.grid}>
        {locations.map((location, idx) => (
          <div key={idx} style={styles.card}>
            <img
              src={location.image}
              alt={location.city}
              style={styles.image}
            />
            <h3 style={styles.cityText}>Centres in {location.city}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '40px',
    fontWeight: '600',
  },
  highlight: {
    color: '#007bff',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
  },
  card: {
    width: '280px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, border 0.3s ease',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  cityText: {
    padding: '16px',
    fontSize: '18px',
    fontWeight: '500',
  },
}

export default TopCities
