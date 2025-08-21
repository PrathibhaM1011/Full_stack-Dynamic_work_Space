import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserCarousel = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/carouselPromotions")
      .then(res => setPromotions(res.data))
      .catch(err => console.error("Failed to fetch promotions:", err));
  }, []);

  return (
    <div id="promoCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" style={styles.carousel}>
      <div className="carousel-inner">
        {promotions.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div style={styles.slide}>
              <img src={item.image} alt={item.title} style={styles.image} />
              <div style={styles.textBox}>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.desc}>{item.text}</p>
                <a href={item.link} style={styles.link}>Learn More →</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#promoCarousel" data-bs-slide="prev" style={styles.navBtn}>
        <FaChevronLeft style={styles.navIcon} />
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#promoCarousel" data-bs-slide="next" style={styles.navBtn}>
        <FaChevronRight style={styles.navIcon} />
      </button>
    </div>
  );
};

const styles = {
  carousel: {
    backgroundColor: '#000',
    padding: '50px 0',
    position: 'relative',
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
    maxWidth: '1100px',
    margin: '0 auto',
    flexWrap: 'wrap',
    color: '#fff',
    padding: '20px',
  },
  image: {
    width: '480px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '14px',
    boxShadow: '0 10px 25px rgba(255,255,255,0.1)',
  },
  textBox: {
    maxWidth: '480px',
  },
  title: {
    fontSize: '30px',
    fontWeight: '700',
    marginBottom: '14px',
    lineHeight: '1.3',
  },
  desc: {
    fontSize: '16px',
    color: '#ccc',
    marginBottom: '16px',
    lineHeight: '1.6',
  },
  link: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#fff',
    textDecoration: 'underline',
  },
  navBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    padding: '12px',
    borderRadius: '50%',
    zIndex: 10,
    cursor: 'pointer',
  },
  navIcon: {
    fontSize: '20px',
    color: '#fff',
  },
};

export default UserCarousel;
