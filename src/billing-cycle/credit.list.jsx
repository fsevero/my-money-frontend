import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from "../common/layout/grid"
import { Field, arrayInsert } from "redux-form"

import InputSimple from "../common/form/input.simple"

class CreditList extends Component {

  add(index, item = {}) {
    if ( this.props.readOnly ) {
      return
    }

    this.props.arrayInsert('billingCycleForm', 'credits', index, item)
  }

  renderRows() {

    const list = this.props.list || []

    return list.map((item, index) => (
      <tr key={index}>
        <td><Field name={`credits.${index}.name`} component={InputSimple} placeholder="Description" readOnly={this.props.readOnly} /></td>
        <td><Field name={`credits.${index}.value`} component={InputSimple} placeholder="Value" readOnly={this.props.readOnly} /></td>
        <td>
          <button type="button" className="btn btn-success" onClick={() => this.add(index + 1)}>
            <i className="fa fa-plus"></i>
          </button>
          <button type="button" className="btn btn-warning" onClick={() => this.add(index + 1, item)}>
            <i className="fa fa-clone"></i>
          </button>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Credits</legend>
          <table className="table">
            <thead>
              <tr>
                <td>Name</td>
                <td>Value</td>
                <td className="table-actions">Actions</td>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert}, dispatch)

export default connect(null, mapDispatchToProps)(CreditList)