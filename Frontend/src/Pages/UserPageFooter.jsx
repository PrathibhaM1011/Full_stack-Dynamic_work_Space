import React from 'react';

const UserPageFooter = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.column}>
          <h2 style={styles.logo}>Worksy</h2>
          <p style={styles.text}>
            Discover flexible workspaces near you. Whether you're escaping home distractions or collaborating with a team — Worksy is your go-to.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/workspaces" style={styles.link}>Workspaces</a></li>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.text}><strong>Phone:</strong> +91 98765 43210</p>
          <p style={styles.text}><strong>Email:</strong> support@worksy.com</p>
          <p style={styles.text}><strong>Address:</strong> Hyderabad, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>© {new Date().getFullYear()} Worksy. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#111',
    color: '#ddd',
    paddingTop: '50px',
    fontFamily: 'sans-serif',
    borderTop: '1px solid #222'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '40px'
  },
  column: {
    flex: '1',
    minWidth: '240px'
  },
  logo: {
    color: '#fff',
    fontSize: '28px',
    marginBottom: '12px'
  },
  heading: {
    fontSize: '16px',
    color: '#fff',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#ccc',
    marginBottom: '10px'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  link: {
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '14px',
    display: 'block',
    marginBottom: '8px',
    transition: 'color 0.3s ease'
  },
  bottomBar: {
    marginTop: '40px',
    padding: '20px 0',
    borderTop: '1px solid #222',
    textAlign: 'center'
  },
  bottomText: {
    fontSize: '13px',
    color: '#777'
  }
};

export default UserPageFooter;
