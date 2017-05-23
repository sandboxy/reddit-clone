import React from 'react'
import { connect } from 'react-redux'
import ListingItem from './ListingItem'
import { setThreadData } from '../actionCreators/actionCreators'


class Thread extends React.Component{
  componentDidMount() {
    const reactJSON = "http://www.reddit.com/r/reactjs.json"

    fetch(reactJSON)
    .then((response) => (response.json()))
    .then((data) => {
      this.props.dispatch(setThreadData(data))
    })
    .catch((err) => {
      console.error("reddit fetch error: ", err)
    })
  }

  render() {
    const mainThread = this.props.threadData.data && this.props.threadData.data.children.map((child, key) => {
      const { ups, downs, url, title, created, author, score, domain, thumbnail, permalink, num_comments, id } = child.data

      return (
        <ListingItem
          className="listingItem"
          key={key}
          id={id}
          ups={ups}
          downs={downs}
          url={url}
          title={title}
          created={created}
          author={author}
          score={score}
          domain={domain}
          thumbnail={thumbnail}
          permalink={permalink}
          num_comments={num_comments}
        />
      )
    })

    return (
      <div
        className="thread"
      >
        GT's React SubReddit Clone
        {mainThread}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  threadData: state.threadData
})


export default connect(mapStateToProps)(Thread)
