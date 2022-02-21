import React from 'react'
const heading = {
  fontSize: '72px',
  color: 'yellow'
}

function Inline() {
  return (
    <div>
      <h4>Inline Style</h4>
      <h1 style={heading}>Inline styling</h1>
    </div>
  )
}

export default Inline
