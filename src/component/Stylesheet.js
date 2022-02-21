import React from "react";
import './myStyles.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h3>Normal css file</h3>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>

    </div>
  )
}
export default Stylesheet