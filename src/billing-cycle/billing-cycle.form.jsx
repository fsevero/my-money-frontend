import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import InputDefault from '../common/form/input.default'

class BillingCycleForm extends Component {
  render() {

    const {handleSubmit} = this.props

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component={InputDefault} label="Name" cols="12 4" placeholder="Name the billing cycle" />
          <Field name="month" component={InputDefault} label="Month" cols="12 4" placeholder="Which month?" />
          <Field name="year" component={InputDefault} label="Year" cols="12 4" placeholder="Which year?" />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({form:'billingCycleForm'})(BillingCycleForm)