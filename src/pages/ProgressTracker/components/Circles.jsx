import React from "react"

function Circles() {
    const numbers = Array.from({ length: 15}, (_, index) => index + 1);

    return (
        <div style={container}>
            {numbers.map((number) => (
                <div key={number} style={circleStyle}>
                    {number}
                </div>
            ))}
        </div>
    )
}

const circleStyle = {
    display: 'inline-block',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.25)',
    border: '1px solid rgba(162, 160, 160, 1)',
    textAlign: 'center',
    lineHeight: '40px',
    margin: '5px',
    color: 'rgba(108, 108, 108, 1)',
  };

  const container = {
    width: '100%', /* Or a larger fixed width */
    display: 'flex',
    flexWrap: 'wrap', /* Allows items to wrap to the next line */
    justifyContent: 'flexStart',
    
  }

  export default Circles;