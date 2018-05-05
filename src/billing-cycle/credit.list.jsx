import React, { Component } from "react";
import Grid from "../common/layout/grid";
import { Field } from "redux-form";

import InputSimple from "../common/form/input.simple"

class CreditList extends Component {

  renderRows() {

    const list = this.props.list || []

    return list.map((item, index) => (
      <tr key={index}>
        <td><Field name={`credits.${index}.name`} component={InputSimple} placeholder="Description" readOnly={this.props.readOnly} /></td>
        <td><Field name={`credits.${index}.value`} component={InputSimple} placeholder="Value" readOnly={this.props.readOnly} /></td>
        <td>...</td>
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
                <td>Actions</td>
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

export default CreditList