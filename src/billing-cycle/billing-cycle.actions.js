import axios from 'axios'
import { toastr } from "react-redux-toastr"
import { reset as resetForm } from "redux-form"

import { showTabs, selectTab } from "../common/tabs/tab.actions";

const BASE_URL = 'http://localhost:3003/api'

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
        dispatch([
          resetForm('billingCycleForm'),
          getList(),
          selectTab('tablist'),
          showTabs('tablist', 'tabcreate')
        ])
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Error', error))
      })
  }
}