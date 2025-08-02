// MerchantFooter.jsx
import React from 'react'

const MerchantFooter = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; {new Date().getFullYear()} Workspace Finder. All rights reserved.</p>
        <div style={styles.links}>
          <a href="#" style={styles.link}>Privacy Policy</a>
          <a href="#" style={styles.link}>Terms</a>
          <a href="#" style={styles.link}>Support</a>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px 0',
    fontSize: '16px',
    marginTop: '40px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '10px'
  },
  links: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px'
  }
}

export default MerchantFooter
