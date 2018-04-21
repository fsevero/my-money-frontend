import React, {Component} from 'react'
import { connect } from "react-redux";

import ContentHeader from '../common/template/content.header'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import ValueBox from '../common/widgets/value.box'

class Dashboard extends Component {
  render() {
    const {credits, debits} = this.props.summary
    const consolidated = credits - debits
    return (
      <div>
        <ContentHeader title="Dashboard" small="v1.0" />
        <Content>
          <Row>
            <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credits}`} text="Créditos" />
            <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debits}`} text="Débitos" />
            <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${consolidated}`} text="Consolidado" />
          </Row>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})

export default connect(mapStateToProps)(Dashboard)