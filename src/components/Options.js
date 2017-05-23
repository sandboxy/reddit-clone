import React from 'react'
import { Link } from 'react-router-dom'


const Options = ({permalink, num_comments}) => {
  return (
    <ul 
      className="options-group"
    >
      <li>
        <Link
          to={permalink}
        >
          {num_comments} comments
        </Link>
      </li>
      <li>share</li>
      <li>save</li>
      <li>hide</li>
      <li>report</li>
    </ul>
  )
}


export default Options
