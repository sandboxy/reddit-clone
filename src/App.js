import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Thread from './components/Thread'
import Comments from './components/Comments'
import store from './stores/store'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Route
              exact
              path="/"
              component={Thread}
            />
            <Route
              path='/r/reactjs/comments/:commentId'
              component={Comments}
            />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}


export default App;
