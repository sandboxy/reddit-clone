import { SET_THREAD_DATA, SET_COMMENTS_DATA } from '../actions/actions'


const DEFAULT_STATE = {
  threadData: "",
  listingItem: "",
  commentsData: ""
}

const setThreadData = (state, action) => {
  return Object.assign({}, state, {threadData: action.threadData})
}

const setCommentsData = (state, action) => {
  return Object.assign({}, state, {commentsData: action.commentsData})
}

const rootReducer = (state=DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_THREAD_DATA:
      return setThreadData(state, action)
    case SET_COMMENTS_DATA:
      return setCommentsData(state, action)
    default:
      return state
  }
}


export default rootReducer
