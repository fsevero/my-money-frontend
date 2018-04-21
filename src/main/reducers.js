import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dashboard: () => ({summary: {credits: 100, debits: 50}})
})

export default rootReducer