import React from 'react'


const VoteArrows = ({score}) => {
  return (
    <div 
      className="arrow-group">
      <i 
        className="fa fa-arrow-up"
        aria-hidden="true"
      >
      </i>
      <span 
        className="votes"
      >
        {score}
      </span>
      <i 
        className="fa fa-arrow-down"
        aria-hidden="true"
      >
      </i>
    </div>
  )
}


export default VoteArrows
