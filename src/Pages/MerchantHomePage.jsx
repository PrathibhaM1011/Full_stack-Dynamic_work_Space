import React, { useEffect } from 'react'
import MerchantNavbar from './MerchantNavbar'
import MerchantSecOne from './MerchantSecOne'
import MerchantSecTwo from './MerchantSecTwo'
import MerchantSecThree from './MerchantSecThree'
import MerchantSecFour from './MerchantSecFour'
import MerchantFooter from './MerchantFooter'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const MerchantHomePage = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".fade-in").forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });

    gsap.utils.toArray(".slide-in-left").forEach((el) => {
      gsap.fromTo(el,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      );
    });

    gsap.utils.toArray(".slide-in-right").forEach((el) => {
      gsap.fromTo(el,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <div style={{
      fontFamily: 'Segoe UI, Roboto, sans-serif',
      backgroundColor: '#000',
      color: '#fff',
      overflowX: 'hidden'
    }}>
      <MerchantNavbar />
      <MerchantSecOne />
      <MerchantSecTwo />
      <MerchantSecThree />
      <MerchantSecFour />
      <MerchantFooter />
    </div>
  )
}

export default MerchantHomePage
