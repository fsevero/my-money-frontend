import React, {Component} from 'react'

import ContentHeader from '../common/template/content.header'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import ValueBox from '../common/widgets/value.box'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" small="v1.0" />
        <Content>
          <Row>
            <ValueBox cols="12 4" color="green" icon="bank" value="R$ 10,00" text="Créditos" />
            <ValueBox cols="12 4" color="red" icon="credit-card" value="R$ 10,00" text="Débitos" />
            <ValueBox cols="12 4" color="blue" icon="money" value="R$ 0,00" text="Consolidado" />
          </Row>
        </Content>
      </div>
    )
  }
}

export default Dashboard