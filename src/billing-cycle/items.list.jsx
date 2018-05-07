import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from "../common/layout/grid"
import { Field, arrayInsert, arrayRemove } from "redux-form"

import InputSimple from "../common/form/input.simple"
import If from "../common/operators/if"

class ItemsList extends Component {

  add(index, item = {}) {
    if ( this.props.readOnly ) {
      return
    }

    this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
  }

  remove(index) {
    if ( this.props.readOnly ) {
      return
    }
    if ( this.props.list.length == 1 ) {
      return
    }

    this.props.arrayRemove('billingCycleForm', this.props.field, index)
  }

  renderRows() {

    const list = this.props.list || []

    return list.map((item, index) => (
      <tr key={index}>
        <td><Field name={`${this.props.field}.${index}.name`} component={InputSimple} placeholder="Description" readOnly={this.props.readOnly} /></td>
        <td><Field name={`${this.props.field}.${index}.value`} component={InputSimple} placeholder="Value" readOnly={this.props.readOnly} /></td>
        <If test={this.props.showStatus}>
          <td><Field name={`${this.props.field}.${index}.status`} component={InputSimple} placeholder="Status" readOnly={this.props.readOnly} /></td>
        </If>
        <td>
          <button type="button" className="btn btn-success" onClick={() => this.add(index + 1)}>
            <i className="fa fa-plus"></i>
          </button>
          <button type="button" className="btn btn-warning" onClick={() => this.add(index + 1, item)}>
            <i className="fa fa-clone"></i>
          </button>
          <button type="button" className="btn btn-danger" onClick={() => this.remove(index)}>
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.legend}</legend>
          <table className="table">
            <thead>
              <tr>
                <td>Name</td>
                <td>Value</td>
                <If test={this.props.showStatus}>
                  <td>Status</td>
                </If>
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

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)

export default connect(null, mapDispatchToProps)(ItemsList)