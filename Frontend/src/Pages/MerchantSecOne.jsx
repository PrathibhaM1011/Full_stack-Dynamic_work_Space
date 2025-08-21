import React from 'react'

const MerchantSecOne = () => {
  const styles = {
    section: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#000',
      color: '#fff',
      padding: '60px 40px',
      minHeight: '100vh',
      gap: '40px',
    },
    textWrapper: {
      flex: 1,
      paddingRight: '30px',
    },
    heading: {
      fontSize: '40px',
      marginBottom: '24px',
    },
    paragraph: {
      fontSize: '22px',
      marginBottom: '24px',
      lineHeight: 1.7,
    },
    bullets: {
      listStyle: 'disc',
      paddingLeft: '22px',
      fontSize: '18px',
      lineHeight: 2.1,
    },
    imageWrapper: {
      flex: 1,
      textAlign: 'center',
    },
    image: {
      maxWidth: '100%',
      borderRadius: '12px',
      boxShadow: '0 8px 24px rgba(255,255,255,0.1)'
    },
  }

  return (
    <>
      <div className="slide-in-left" style={styles.section}>
        <div style={styles.textWrapper}>
          <h2 style={styles.heading}>Turn Your Space into Revenue 💼</h2>
          <p style={styles.paragraph}>
            Have an idle commercial building? Join Worksy and start earning by offering it as a co-working space.
          </p>
          <ul style={styles.bullets}>
            <li>Zero cost setup</li>
            <li>Verified tenants and professionals</li>
            <li>Real-time occupancy tracking</li>
            <li>Instant payments & monthly reports</li>
          </ul>
        </div>

        <div className="slide-in-right" style={styles.imageWrapper}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D12AQHS1CtK0SoPoA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694288370720?e=2147483647&v=beta&t=O9MsKSMhVOs0kO4_JA_l-O7QBKoyP6r588Rd1qVQ-sE"
            alt="Workspace building"
            style={styles.image}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .slide-in-left {
            flex-direction: column !important;
            padding: 40px 20px !important;
          }
          .slide-in-right {
            margin-top: 30px;
          }
        }
      `}</style>
    </>
  )
}

export default MerchantSecOne
