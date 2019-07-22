import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import StatesIndexContainer from '../container/StatesIndexContainer'
import StateShowContainer from '../container/StateShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StatesIndexContainer} />
        <Route exact path="/states/:id" component={StateShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
