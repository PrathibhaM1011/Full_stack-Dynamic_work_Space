import React, { useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';

const UserNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <style>{`
        .navbar {
          width: 100%;
          padding: 12px 30px;
          background: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 999; /* 👈 High enough to stay on top */
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .navbar-left {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #111;
        }

        .nav-links {
          display: flex;
          gap: 20px;
        }

        .nav-item {
          position: relative;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          color: #222;
        }

        .nav-item:hover {
          color: #0057ff;
        }

        .dropdown-menu {
          position: absolute;
          top: 35px;
          left: 0;
          background: #fff;
          border: 1px solid #ddd;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          padding: 10px 0;
          min-width: 160px;
          z-index: 1000;
          border-radius: 6px;
        }

        .dropdown-menu div {
          padding: 10px 16px;
          font-size: 14px;
          color: #222;
          cursor: pointer;
          transition: background 0.2s;
        }

        .dropdown-menu div:hover {
          background: #f2f2f2;
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .phone {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #333;
        }

        .login {
          font-size: 14px;
          cursor: pointer;
          color: #333;
        }

        .touch-btn {
          background: #0057ff;
          color: white;
          border: none;
          padding: 8px 16px;
          font-size: 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .touch-btn:hover {
          background: #003daa;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .touch-btn {
            padding: 6px 12px;
          }
        }
      `}</style>

      <header className="navbar">
        <div className="navbar-left">
          <div className="logo">worksy</div>

          <nav className="nav-links">
            <div className="nav-item" onClick={() => handleDropdown('about')}>
              About us
            </div>

            <div className="nav-item" onClick={() => handleDropdown('centres')}>
              Centres ▾
              {openDropdown === 'centres' && (
                <div className="dropdown-menu">
                  <div>Bangalore</div>
                  <div>Hyderabad</div>
                  <div>Chennai</div>
                </div>
              )}
            </div>

            <div className="nav-item" onClick={() => handleDropdown('workspaces')}>
              Workspaces ▾
              {openDropdown === 'workspaces' && (
                <div className="dropdown-menu">
                  <div>Hot Desk</div>
                  <div>Dedicated Desk</div>
                  <div>Private Cabin</div>
                </div>
              )}
            </div>

            <div className="nav-item" onClick={() => handleDropdown('enterprise')}>
              Enterprise
            </div>

            <div className="nav-item" onClick={() => handleDropdown('investors')}>
              Investors Relations
            </div>

            <div className="nav-item" onClick={() => handleDropdown('referrals')}>
              Referrals ▾
              {openDropdown === 'referrals' && (
                <div className="dropdown-menu">
                  <div>Refer a friend</div>
                  <div>Affiliate Program</div>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="navbar-right">
          <div className="phone">
            <FiPhoneCall size={16} />
            <span>18001237788</span>
          </div>
          <div className="login">Log in</div>
          <button className="touch-btn">Get in touch</button>
        </div>
      </header>
    </>
  );
};

export default UserNavbar;
