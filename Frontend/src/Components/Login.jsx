import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.get('http://localhost:5000/users')
      const users = res.data

      const user = users.find(
        (u) =>
          u.email === loginData.email && u.password === loginData.password
      )

      if (user) {
        if (user.role === 'Admin') {
          navigate('/admin/workspaces')
        } else if (user.role === 'Merchant') {
          navigate('/merchant-home')
        } else {
          navigate('/user-home')
        }
      } else {
        alert('Invalid credentials')
      }
    } catch (error) {
      console.error('Login error', error)
      alert('Login failed')
    }
  }

  
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div style={styles.container}>
      <form
        onSubmit={handleSubmit}
        style={{
          ...styles.form,
          transform: animate ? 'translateY(0)' : 'translateY(-100vh)',
          transition: 'transform 1s ease',
        }}
      >
        <h2 style={styles.heading}>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>

      {/* Media query styling */}
      <style>{`
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
      `}</style>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    backgroundImage:
      'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  form: {
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
    zIndex: 2,
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
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '500',
  },
}

export default Login
