import React from 'react'
import './progress-bar.css'

const ProgressBar = (props) => (
  <div className="ProgressBar">
    <input
      type="range" 
      min="0"
      max={props.max}
      value={props.value}
      onChange={props.handleChanges}
    />
  </div>
)

export default ProgressBar