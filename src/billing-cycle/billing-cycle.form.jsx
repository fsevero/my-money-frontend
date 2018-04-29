import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import InputDefault from '../common/form/input.default'
import { init } from "../billing-cycle/billing-cycle.actions";

class BillingCycleForm extends Component {
  render() {

    const {handleSubmit, readOnly} = this.props

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component={InputDefault} label="Name" cols="12 4" placeholder="Name the billing cycle" readOnly={readOnly} />
          <Field name="month" component={InputDefault} label="Month" cols="12 4" placeholder="Which month?" readOnly={readOnly} />
          <Field name="year" component={InputDefault} label="Year" cols="12 4" placeholder="Which year?" readOnly={readOnly} />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
          <button type="button" className="btn btn-default" onClick={this.props.init}>Cancel</button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({form:'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)