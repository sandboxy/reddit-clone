import { SET_THREAD_DATA, SET_COMMENTS_DATA } from '../actions/actions'


const setThreadData = (threadData) => {
  return {
    type: SET_THREAD_DATA,
    threadData: threadData
  }
}

const setCommentsData = (commentId, commentsData) => {
  return {
    type: SET_COMMENTS_DATA,
    commentId: commentId,
    commentsData: commentsData
  }
}


export {
  setThreadData,
  setCommentsData
}
