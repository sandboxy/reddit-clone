import React from 'react'
import { Link } from 'react-router-dom'


const Title = ({title, domain, url}) => {
  return (
    <div 
      className="title-group"
    >
      <Link 
        className="title-head"
        to={url}
      >
        {title}
      </Link>

      <span 
        className="title-domain"
      >
        <a 
          href={"https://" + domain}
        >
          {domain}
        </a>
      </span>
    </div>
  )
}


export default Title
