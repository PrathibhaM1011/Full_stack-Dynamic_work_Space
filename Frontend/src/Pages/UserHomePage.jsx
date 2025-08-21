import React from 'react'
import { useNavigate } from 'react-router-dom'
import VideoBanner from '../Components/VideoBanner'
import Navbar from '../Components/Navbar'
import Explore from '../Components/Explore'
import UserType from './UserType'
import UserCarousel from './UserCarousel'
import TopCities from './TopCities'
import ContactForm from './ContactForm'
import AwardsSection from './AwardsSection'
import UserPageFooter from './UserPageFooter'

const UserHomepage = () => {

  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    paddingBottom: '40px',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center',
  }

  return (
    <div style={pageStyle}>
      <Navbar />
      <VideoBanner />
      <Explore />
      <UserType />
      <UserCarousel />
      <TopCities/>
      <ContactForm/>
      <AwardsSection/>
      <UserPageFooter/>

    </div>
  )
}

const buttonStyle = {
  padding: '12px 25px',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '20px',
}

export default UserHomepage
