import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import StatesIndexContainer from '../container/StatesIndexContainer'
import StateShowContainer from '../container/StateShowContainer'
import ParkShowContainer from '../container/ParkShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StatesIndexContainer} />
        <Route exact path="/states/:id" component={StateShowContainer} />
        <Route exact path="/states/:id/parks/:id" component={ParkShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

// <Route exact path="/states/:id/park/:id" component={ParksShowContainer} />
