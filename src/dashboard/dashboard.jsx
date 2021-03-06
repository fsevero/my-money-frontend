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
            <ValueBox cols="12 4" color="green" icon="bank" value={`$ ${credit}`} text="Income" />
            <ValueBox cols="12 4" color="red" icon="credit-card" value={`$ ${debt}`} text="Outcome" />
            <ValueBox cols="12 4" color="blue" icon="money" value={`$ ${credit - debt}`} text="Result" />
          </Row>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)