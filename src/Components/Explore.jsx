import React from 'react'

const Explore = () => {
  return (
    <div style={{padding:'50px'}}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
      }}>
        <h1 style={{ margin: 0 }}>Explore our host of solutions</h1>
        <a href='#' style={{ fontWeight: 500, textDecoration: 'none', color: '#0057ff' }}>View all ➝</a>
      </div>
      <h3 style={{ fontWeight: 400 }}>
        From coworking spaces to private offices, you can choose from a range of solutions or even bundle our offerings to tailor solutions to suit your business
      </h3>
    </div>
  )
}

export default Explore