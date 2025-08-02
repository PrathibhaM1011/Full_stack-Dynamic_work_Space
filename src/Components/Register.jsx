import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'User',
  })

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/users', formData)
      alert('Registered successfully!')
      navigate('/login')
    } catch (err) {
      console.error('Registration failed', err)
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      <form
        onSubmit={handleSubmit}
        style={{
          ...styles.formWrapper,
          transform: animate ? 'translateX(0)' : 'translateX(-100vw)',
          transition: 'transform 2s ease',
        }}
      >
        <h2 style={styles.heading}>Create your Account</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          style={styles.input}
        >
          <option>User</option>
          <option>Merchant</option>
        </select>
        <button type="submit" style={styles.button}>Register</button>

        <p style={styles.signinText}>
          Already registered? <span role="img" aria-label="arrow">👉</span>{' '}
          <span
            onClick={() => navigate('/login')}
            style={styles.signinLink}
            className="signin-link"
          >
            Sign in
          </span>
        </p>
      </form>

      {/* Responsive and animation styles */}
      <style>{`
        @media (max-width: 768px) {
          form {
            width: 80% !important;
            padding: 30px !important;
          }
        }
        @media (max-width: 480px) {
          form {
            width: 90% !important;
            padding: 20px !important;
          }
        }
        @media (max-width: 360px) {
          form {
            width: 95% !important;
            padding: 16px !important;
          }
        }
        .signin-link {
          color: #00e0ff;
          text-decoration: underline;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }
        .signin-link:hover {
          color: #0ff;
          text-shadow: 0 0 8px #00e0ff;
        }
      `}</style>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(4px)',
    zIndex: 1,
  },
  formWrapper: {
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(12px)',
    padding: '40px',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '400px',
    color: '#fff',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#fff',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    outline: 'none',
  },
  button: {
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '500',
  },
  signinText: {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '14px',
  },
  signinLink: {
    // Overridden in CSS for hover effects
  },
}

export default Register
