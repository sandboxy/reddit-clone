import React from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import Spinner from './Spinner'
import { setCommentsData } from '../actionCreators/actionCreators'


class Comments extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "upvotes"
    }
  }

  getCommentsData = (commentId) => {
    const url = `http://www.reddit.com/r/reactjs/${commentId}.json`

    fetch(url)
    .then((response) => (response.json()))
    .then((json) => {
      return json
    })
    .then((data) => {
      this.props.dispatch(setCommentsData(commentId, data))
    })
    .catch((err) => {
      console.error("getCommentsData error: ", err)
    })
  }

  sort = (e) => {
    this.setState({
      sortBy: e.target.innerText.toLowerCase()
    })
  }

  componentDidMount() {
    if (!this.props.commentsData) {
      this.getCommentsData(this.props.match.params.commentId)
    }
  }

  render() {
    let threadComments = <Spinner />

    if (this.props.commentsData) {
      if (!this.props.commentsData[1].data.children.length) {
        return threadComments = <div>no comments</div>
      }
      threadComments = this.props.commentsData[1].data.children
        .sort((a,b) => {
          switch (this.state.sortBy) {
            case "upvotes":
              return b.data.score - a.data.score
            case "time":
              return b.data.created_utc - a.data.created_utc
            case "ratio":
              return (b.data.ups / ++b.data.downs) - (a.data.ups / ++a.data.downs)
            default:
              return b.data.score - a.data.score
            }
        })
        .map((comm, key) => {
          return (
          <Comment
            key={key}
            body={comm.data.body}
            score={comm.data.score}
            author={comm.data.author}
            created_utc={comm.data.created_utc}
            ratio={comm.data.ups / comm.data.downs}
          />
        )})
    }

    return (
      <div
        className="comments"
      >
        <div>
          <ul
            className="sortOptions"
            onClick={this.sort}
          >
          Sort by:
            <li>
              Upvotes
            </li>
            <li>
              Time
            </li>
            <li>
              Ratio
            </li>
          </ul>
        </div>
        <div>
          {threadComments}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  commentsData: state.commentsData
})


export default connect(mapStateToProps)(Comments)
