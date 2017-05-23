import React from 'react'
import TimeAgo from './TimeAgo'
import Options from './Options'


const Comment = ({author, score, created_utc, body}) => {
  return (
    <div
      className="comment"
    >

      <ul
        className="stats"
      >
        <li>{author}</li>
        <li>{score} points</li>
        <li>
          <TimeAgo created_utc={created_utc}/> ago
        </li>
      </ul>

      <div
        className="comment-body"
      >
        {body}
      </div>

      <Options
        permalink={"/handleExpansion"}
        num_comments={0}
      />
    </div>
  )
}


export default Comment
