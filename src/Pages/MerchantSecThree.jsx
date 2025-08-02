import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MerchantSecThree = () => {
  const [merchants, setMerchants] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/merchantSubmissions")
      .then(res => setMerchants(res.data))
      .catch(err => console.error("Merchant fetch failed", err))
  }, [])

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>🏢 Trusted by These Merchants</h2>

      <div style={styles.grid}>
        {merchants.map((merchant) => (
          <div key={merchant.id} style={styles.card}>
            <img src={merchant.picture} alt={merchant.name} style={styles.image} />
            <div style={styles.info}>
              <h3 style={styles.name}>{merchant.fullName}</h3>
              <p style={styles.tagline}>{merchant.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '60px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#111',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 0 12px rgba(255, 255, 255, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  info: {
    padding: '16px',
  },
  name: {
    fontSize: '24px',
    margin: '8px 0 4px',
  },
  tagline: {
    fontSize: '18px',
    color: '#ccc',
  },
}

export default MerchantSecThree
