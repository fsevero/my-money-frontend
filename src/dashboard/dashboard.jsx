import React, {Component} from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSummary } from "./dashboard.actions";
import ContentHeader from '../common/template/content.header'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import ValueBox from '../common/widgets/value.box'

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary()
  }

  render() {
    const {credit, debt} = this.props.summary
    return (
      <div>
        <ContentHeader title="Dashboard" small="v1.0" />
        <Content>
          <Row>
            <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`} text="Créditos" />
            <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`} text="Débitos" />
            <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit - debt}`} text="Consolidado" />
          </Row>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)