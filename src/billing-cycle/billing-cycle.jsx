import React, {Component} from 'react'

import ContentHeader from "../common/template/content.header";
import Content from "../common/template/content";

class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Billing Cycles" small="v1.0" />
        <Content>
          Billing Cycles
        </Content>
      </div>
    )
  }
}

export default BillingCycle