import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'

export default (
  <Route path="/">
    <IndexRoute component={App}/> 
  </Route>
)