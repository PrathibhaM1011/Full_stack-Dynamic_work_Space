import React, { useState } from 'react'

const MerchantNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navStyles = {
    container: {
      width: '100%',
      backgroundColor: '#000',
      color: '#fff',
      padding: '16px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: '20px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    links: {
      display: 'flex',
      gap: '24px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      cursor: 'pointer',
    },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      gap: '4px',
      cursor: 'pointer',
    },
    bar: {
      width: '25px',
      height: '3px',
      backgroundColor: '#fff',
    },
    mobileMenu: {
      display: menuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      backgroundColor: '#000',
      position: 'absolute',
      top: '64px',
      right: '32px',
      padding: '16px',
      borderRadius: '8px',
      gap: '12px',
    },
  }

  return (
    <nav style={navStyles.container}>
      <div style={navStyles.logo}>Worksy</div>

      {/* Desktop Links */}
      <div className="nav-links" style={{ ...navStyles.links }}>
        <div style={navStyles.link}>Home</div>
        <div style={navStyles.link}>Workspaces</div>
        <div style={navStyles.link}>About</div>
        <div style={navStyles.link}>Contact</div>
      </div>

      {/* Hamburger */}
      <div className="hamburger" style={navStyles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <div style={navStyles.bar}></div>
        <div style={navStyles.bar}></div>
        <div style={navStyles.bar}></div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu" style={navStyles.mobileMenu}>
          <div style={navStyles.link}>Home</div>
          <div style={navStyles.link}>Workspaces</div>
          <div style={navStyles.link}>About</div>
          <div style={navStyles.link}>Contact</div>
        </div>
      )}

      
      <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  )
}

export default MerchantNavbar
