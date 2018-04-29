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
  return submit(values, 'post');
}

export function update(values) {
  return submit(values, 'put');
}

export function remove(values) {
  return submit(values, 'delete');
}

function submit(values, method) {
  return dispatch => {
    const id = values._id || ''
    axios[method](`${BASE_URL}/billing-cycles/${id}`, values)
      .then(resp => {
        toastr.success('Success', 'Operation succeded')
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

export function showDelete(billingCycle) {
  return [
    showTabs('tabdelete'),
    selectTab('tabdelete'),
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