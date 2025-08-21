import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaUserFriends, FaHandshake, FaChartLine, FaBolt, FaHeadset } from 'react-icons/fa'

const styles = {
  section: {
    backgroundColor: '#fff',
    padding: '60px 20px',
    color: '#000',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    flex: '1',
    minWidth: '300px',
  },
  image: {
    width: '100%',
    borderRadius: '12px',
  },
  textWrapper: {
    flex: '1',
    minWidth: '300px',
  },
  heading: {
    fontSize: '34px',
    marginBottom: '26px',
    fontWeight: '600',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    fontSize: '22px',
    marginBottom: '18px',
    display: 'flex',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: '14px',
    color: '#4CAF50',
    fontSize: '30px',
    display: 'flex',
    alignItems: 'center',
    minWidth: '32px'
  },
  icon: {
    verticalAlign: 'middle',
    fontSize: '30px',
  },
}

const points = [
  { text: 'Verified Platform', icon: <FaShieldAlt style={styles.icon} /> },
  { text: 'Trusted by Thousands', icon: <FaUserFriends style={styles.icon} /> },
  { text: 'No Middleman Hassles', icon: <FaHandshake style={styles.icon} /> },
  { text: 'Best for Business', icon: <FaChartLine style={styles.icon} /> },
  { text: 'Real-time Listing', icon: <FaBolt style={styles.icon} /> },
  { text: 'Dedicated Support', icon: <FaHeadset style={styles.icon} /> },
]

const MerchantSecTwo = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // 👈 allow triggering every time
    threshold: 0.3,
  })

  return (
    <section style={styles.section} ref={ref}>
      <div style={styles.container}>
        {/* LEFT IMAGE */}
        <div style={styles.imageWrapper}>
          <img
            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?cs=srgb&dl=pexels-hillaryfox-1595385.jpg&fm=jpg"
            alt="workspace"
            style={styles.image}
          />
        </div>

        {/* RIGHT BULLET POINTS */}
        <div style={styles.textWrapper}>
          <h2 style={styles.heading}>Why List With Us?</h2>
          <ul style={styles.list}>
            {points.map((point, index) => (
              <motion.li
                key={index}
                style={styles.listItem}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
              >
                <span style={styles.iconWrapper}>{point.icon}</span>
                {point.text}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MerchantSecTwo
