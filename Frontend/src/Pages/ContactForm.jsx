import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/contactSubmissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert('Failed to submit. Please try again!');
      }
    } catch (error) {
      alert('Server error: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Left - Form */}
        <div style={styles.left}>
          <h2 style={styles.heading}>Send us a Message</h2>

          {isSubmitted && <p style={{ color: 'lightgreen' }}>✅ Submitted successfully!</p>}

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={styles.input} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={styles.input} />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={styles.input} />
            <select name="subject" value={formData.subject} onChange={handleChange} required style={styles.input}>
              <option value="" disabled>Select Subject</option>
              <option value="booking">Booking</option>
              <option value="workspace">Workspace Info</option>
              <option value="support">Support</option>
            </select>
            <textarea name="message" placeholder="Message" rows="3" value={formData.message} onChange={handleChange} required style={styles.input}></textarea>
            <button type="submit" disabled={isSubmitting} style={styles.button}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Right - Image */}
        <div style={styles.right}>
          <img
            src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
            alt="workspace"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

// 💅 Pure CSS in JS (normal CSS can also be used in style.css if needed)
const styles = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '40px 20px',
    width: '100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#111',
    borderRadius: '12px',
    overflow: 'hidden',
    width: '100%',
    flexWrap: 'wrap'
  },
  left: {
    flex: 1,
    padding: '20px',
    minWidth: '300px'
  },
  right: {
    flex: 1,
    minWidth: '300px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  heading: {
    marginBottom: '10px'
  },
  input: {
    width: '100%',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #444',
    backgroundColor: '#222',
    color: '#fff'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
    color: '#ccc',
    fontSize: '14px'
  }
};

export default ContactForm;
