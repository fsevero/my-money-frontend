import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import dashboardReducer from '../dashboard/dashboard.reducer'
import tabReducer from '../common/tabs/tab.reducer'
import billingCycleReducer from '../billing-cycle/billing-cycle.reducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer,
  form: reduxFormReducer,
  toastr: toastrReducer
})

export default rootReducer