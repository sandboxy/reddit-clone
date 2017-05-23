import React from 'react'
import Moment from 'react-moment'


const TimeAgo = ({created_utc}) => {
  return (
    <Moment unix fromNow ago>
      {created_utc}
    </Moment>
  )
}


export default TimeAgo
