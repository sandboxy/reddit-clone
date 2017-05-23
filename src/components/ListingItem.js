import React from 'react'
import PropTypes from 'prop-types'
import Options from './Options'
import Title from './Title'
import VoteArrows from './VoteArrows'
import SubmittedBy from './SubmittedBy'


class ListingItem extends React.Component{
  render() {
    const { url, title, author, score, domain, permalink, num_comments, created } = this.props
    const thumbnail = (this.props.thumbnail.includes('http')) 
      ? this.props.thumbnail 
      : 'https://c1.staticflickr.com/8/7146/6767559333_054b0a3ea3.jpg'

    return (
      <div
        className="listingItems"
      >
        <VoteArrows 
          score={score}
        />
          <img 
            className="listingItems-img"
            src={thumbnail}
            alt={title}
          />
          <div 
            className='content-group'
          >
            <Title
              title={title}
              domain={domain}
              url={url}
            />
            <SubmittedBy 
              author={author}
              created={created}
            />
            <Options
              permalink={permalink}
              num_comments={num_comments}
            />
          </div>
      </div>
    )
  }
}

ListingItem.propTypes = {
  score: PropTypes.number.isRequired,
  num_comments: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
}


export default ListingItem
