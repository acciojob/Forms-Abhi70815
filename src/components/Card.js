import React from 'react'

const Card = ({children}) => {
    const cardStyle={
        border: "1px solid #ccc",
        borderRadius :"8px",
        padding:"16px",
        maxWidth:"400px",
        margin:"20px auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    };

  return <div style={cardStyle}>{children}</div>
}

export default Card