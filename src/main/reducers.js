import { combineReducers } from "redux";

import dashboardReducer from '../dashboard/dashboard.reducer'
import tabReducer from '../common/tabs/tab.reducer'
import billingCycleReducer from '../billing-cycle/billing-cycle.reducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer
})

export default rootReducer