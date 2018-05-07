import React from 'react'
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'
import App from './app'

import Dashboard from '../dashboard/dashboard'
import BillinCycle from '../billing-cycle/billing-cycle'

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="billing-cycles" component={BillinCycle} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
)