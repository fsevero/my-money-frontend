import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import InputDefault from '../common/form/input.default'
import { init } from "../billing-cycle/billing-cycle.actions";

import ItemsList from "./items.list";
import Summary from './summary'

class BillingCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v

    return {
      creditSum: this.props.credits.map(c => +c.value || 0).reduce(sum),
      debtSum: this.props.debts.map(d => +d.value || 0).reduce(sum),
    }
  }

  render() {

    const {handleSubmit, readOnly, credits, debts} = this.props

    const { creditSum, debtSum } = this.calculateSummary()

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component={InputDefault} label="Name" cols="12 4" placeholder="Name the billing cycle" readOnly={readOnly} />
          <Field name="month" component={InputDefault} label="Month" cols="12 4" placeholder="Which month?" readOnly={readOnly} />
          <Field name="year" component={InputDefault} label="Year" cols="12 4" placeholder="Which year?" readOnly={readOnly} />

          <Summary credit={creditSum} debt={debtSum} />

          <ItemsList cols="12 6" list={credits} readOnly={readOnly} field='credits' legend='Credits' />
          <ItemsList cols="12 6" list={debts} readOnly={readOnly} field='debts' legend='Debts' showStatus={true} />
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
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)