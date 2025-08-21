import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserType = () => {
  const [types, setTypes] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/workspaceTypes")
      .then((res) => setTypes(res.data))
      .catch((err) => console.error("Failed to fetch workspace types", err))
  }, [])

  return (
    <section style={styles.section}>
      <div style={styles.wrapper}>
        {types.map((type) => (
          <div key={type.id} style={styles.card} className="user-type-card">
            <div style={styles.iconBox}>
              <img src={type.icon} alt={type.title} style={styles.icon} />
            </div>
            <div style={styles.textBox}>
              <h3 style={styles.title}>{type.title}</h3>
              <p style={styles.desc}>{type.description}</p>
            </div>
          </div>
        ))}
      </div>

      
      <style>
        {`
          .user-type-card {
            transition: all 0.3s ease;
          }
          .user-type-card:hover {
            transform: scale(1.03);
            border: 2px solid #4CAF50;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          }
        `}
      </style>
    </section>
  )
}

const styles = {
  section: {
    padding: '40px 20px',
    backgroundColor: '#fff',
  },
  wrapper: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    width: '400px',
    padding: '16px 20px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    cursor: 'pointer',
  },
  iconBox: {
    minWidth: '60px',
    height: '60px',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: '60px',
    width: '60px',
    objectFit: 'contain',
    borderRadius: '8px',
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '6px',
  },
  desc: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.4',
  },
}

export default UserType
