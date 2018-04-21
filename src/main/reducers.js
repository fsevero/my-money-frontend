import { combineReducers } from "redux";

import dashboardReducer from '../dashboard/dashboard.reducer'
import tabReducer from '../common/tabs/tab.reducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
})

export default rootReducer