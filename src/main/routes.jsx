import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillinCycle from '../billing-cycle/billing-cycle'

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard} />
    <Route path="/billing-cycles" component={BillinCycle} />
    <Redirect from="*" to="/" />
  </Router>
)