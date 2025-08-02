import React, { useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const MerchantSecFour = () => {
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    picture: '',
    building: '',
    workspaceCount: '',
    workspaceTypes: [],
    tagline: '',
    images: [],
    city: '',
    subcity: '',
    customSubcity: '',
    location: { lat: '', lng: '' },
  })

  const handleChange = (e) => {
    const { name, value, files, type, multiple } = e.target
    if (type === 'file') {
      if (multiple) {
        setFormData((prev) => ({ ...prev, [name]: Array.from(files) }))
      } else {
        setFormData((prev) => ({ ...prev, [name]: files[0] }))
      }
    } else if (multiple) {
      const selected = Array.from(e.target.selectedOptions).map((opt) => opt.value)
      setFormData((prev) => ({ ...prev, [name]: selected }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      ...formData,
      subcity:
        formData.subcity === 'Other' && formData.customSubcity
          ? formData.customSubcity
          : formData.subcity,
    }

    try {
      const res = await fetch('http://localhost:5000/merchantSubmissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        alert('Form submitted!')
        setShowForm(false)
      }
    } catch (err) {
      console.error('Submission error:', err)
    }
  }

  const styles = {
    section: {
      backgroundColor: '#fff',
      padding: '60px 20px',
      color: '#000',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      gap: '40px',
      alignItems: 'center',
      flexWrap: 'wrap',
      filter: showForm ? 'blur(6px)' : 'none',
      transition: 'filter 0.4s ease',
    },
    left: {
      flex: '1',
      minWidth: '300px',
    },
    heading: {
      fontSize: '32px',
      marginBottom: '20px',
      fontWeight: '600',
    },
    button: {
      padding: '12px 24px',
      backgroundColor: '#000',
      color: '#fff',
      fontWeight: '600',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    right: {
      flex: '1',
      minWidth: '300px',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      borderRadius: '16px',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    },
    formOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: showForm ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    },
    formContainer: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '12px',
      width: '90%',
      maxWidth: '600px',
      maxHeight: '90vh',
      overflowY: 'auto',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '8px 0',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '15px',
    },
    textarea: {
      width: '100%',
      padding: '12px',
      margin: '8px 0',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '15px',
      resize: 'vertical',
    },
    closeBtn: {
      background: '#f00',
      color: '#fff',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      float: 'right',
    },
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h2 style={styles.heading}>Ready to Start Business With Us?</h2>
          <button style={styles.button} onClick={() => setShowForm(true)}>
            Fill the Form
          </button>
        </div>

        <div style={styles.right}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/619/989/large_2x/business-person-put-their-hands-together-concept-of-teamwork-agreement-and-partnership-double-exposure-photo.jpg"
            alt="Partnership"
            style={styles.image}
          />
        </div>
      </div>

      {/* Form Popup Overlay */}
      <div style={styles.formOverlay}>
        <div style={styles.formContainer}>
          <button style={styles.closeBtn} onClick={() => setShowForm(false)}>X</button>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Merchant Submission</h2>
          <form onSubmit={handleSubmit}>
            <input name="fullName" type="text" placeholder="Full Name" value={formData.fullName} onChange={handleChange} style={styles.input} />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} style={styles.input} />
            <input name="phone" type="text" placeholder="Phone Number" value={formData.phone} onChange={handleChange} style={styles.input} />
            <input name="picture" type="file" accept="image/*" onChange={handleChange} style={styles.input} />
            <input name="building" type="text" placeholder="Building Name / Address" value={formData.building} onChange={handleChange} style={styles.input} />
            <input name="workspaceCount" type="number" placeholder="Number of Workspaces" value={formData.workspaceCount} onChange={handleChange} style={styles.input} />
            <select name="workspaceTypes" multiple onChange={handleChange} style={styles.input}>
              <option value="Coworking">Coworking</option>
              <option value="Event Space">Event Space</option>
              <option value="Ad Spaces">Advertisement Space</option>
            </select>
            <input name="tagline" type="text" placeholder="Tagline" value={formData.tagline} onChange={handleChange} style={styles.input} />
            <input name="images" type="file" accept="image/*" multiple onChange={handleChange} style={styles.input} />
            <select name="city" value={formData.city} onChange={handleChange} style={styles.input}>
              <option value="">Select City</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            <select name="subcity" value={formData.subcity} onChange={handleChange} style={styles.input}>
              <option value="">Select Subcity</option>
              <option value="Jubilee Hills">Jubilee Hills</option>
              <option value="Madhapur">Madhapur</option>
              <option value="Other">Other</option>
            </select>
            {formData.subcity === 'Other' && (
              <input
                name="customSubcity"
                type="text"
                placeholder="Enter Subcity"
                value={formData.customSubcity}
                onChange={handleChange}
                style={styles.input}
              />
            )}
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default MerchantSecFour
