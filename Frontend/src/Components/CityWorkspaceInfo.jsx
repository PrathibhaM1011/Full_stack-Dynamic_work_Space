import React, { useState } from 'react';

const cityData = {
  Hyderabad: {
    heading: "Elevate your work environment with private office spaces in Hyderabad",
    description: `Discover personalised private office space in Hyderabad, tailored for entrepreneurs, startups, and established businesses. 
    Choose from dedicated desks, fully-furnished offices, or office suites to fit your hybrid work strategies. Enjoy move-in ready spaces 
    with access to shared amenities and conference rooms. Elevate your workspace experience in Hyderabad's vibrant ecosystem.`,
  },
  Bangalore: {
    heading: "Boost your productivity with premium office spaces in Bangalore",
    description: `Explore a variety of private office spaces in Bangalore, ideal for tech startups, freelancers, and large teams. Choose from 
    plug-and-play setups to custom office suites. Located in the heart of India's Silicon Valley, enjoy seamless connectivity and innovative 
    work culture.`,
  },
  Mumbai: {
    heading: "Find your business home with private offices in Mumbai",
    description: `Get access to fully equipped office spaces in Mumbai, tailored for enterprises and growing teams. Flexible plans, modern 
    amenities, and prime locations ensure your business thrives in the financial capital of India.`,
  }
};

const CityWorkspaceInfo = () => {
  const [selectedCity, setSelectedCity] = useState('Hyderabad');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.dropdownWrapper}>
        <label htmlFor="citySelect" style={styles.label}>Choose a city:</label>
        <select id="citySelect" value={selectedCity} onChange={handleCityChange} style={styles.select}>
          {Object.keys(cityData).map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div style={styles.contentBox}>
        <h2 style={styles.heading}>{cityData[selectedCity].heading}</h2>
        <p style={styles.description}>{cityData[selectedCity].description}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '3rem 1.5rem',
    background: 'linear-gradient(to right, #f0f4f8, #e6ecf1)',
    borderRadius: '12px',
    boxSizing: 'border-box',
    fontFamily: 'Segoe UI, sans-serif',
  },
  dropdownWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  label: {
    fontSize: '1.1rem',
    marginRight: '10px',
    color: '#333',
  },
  select: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    width:'500px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    color: '#333',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    justifyContent:'center',
    alignItems:'center',
  },
  contentBox: {
    maxWidth: '900px',
    margin: 'auto',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  },
  heading: {
    fontSize: '1.6rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#222',
  },
  description: {
    fontSize: '1.05rem',
    lineHeight: '1.75',
    color: '#555',
    whiteSpace: 'pre-line',
  }
};

export default CityWorkspaceInfo;
