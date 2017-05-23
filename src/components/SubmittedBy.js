import React from 'react'
import TimeAgo from './TimeAgo'


const SubmittedBy = ({author, created}) => {
  return (
    <div 
      className="submitted-group"
    >
      <span>
        Submitted <TimeAgo created={created}/> ago by {author}
      </span>
    </div>
  )
}


export default SubmittedBy
