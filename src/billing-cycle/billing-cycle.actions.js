import axios from 'axios'
import { toastr } from "react-redux-toastr"
import { reset as resetForm, initialize } from "redux-form"

import { showTabs, selectTab } from "../common/tabs/tab.actions";

const BASE_URL = 'http://localhost:3003/api'

const INITIAL_VALUES = {}

export function getList() {
  const request = axios.get(`${BASE_URL}/billing-cycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {

  return dispatch => {
    axios.post(`${BASE_URL}/billing-cycles`, values)
      .then(resp => {
        toastr.success('Success', 'Billing cycle registered')
        dispatch(init())
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Error', error))
      })
  }
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabupdate'),
    selectTab('tabupdate'),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init() {
  return [
    showTabs('tablist', 'tabcreate'),
    selectTab('tablist'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}