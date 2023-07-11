import React from 'react'

const Wave = () => {
  return (
    <div className='wave' style={{ height: "200px", overflow: "hidden" }} >
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: " 100%", width: "100%" }}>
        <path d="M0.23,23.13 C197.17,28.05 232.16,223.90 502.48,-3.44 L516.02,162.88 L-0.00,149.60 Z" style={{stroke: "none", fill: "#F8FAFC"}}></path>
      </svg>
    </div>
  )
}

export default Wave
