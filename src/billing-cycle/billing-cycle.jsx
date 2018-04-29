import React, {Component} from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../common/template/content.header";
import Content from "../common/template/content";

import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabs.header'
import TabHeader from '../common/tabs/tab.header'
import TabsContent from '../common/tabs/tabs.content'
import TabContent from '../common/tabs/tab.content'

import { selectTab, showTabs } from "../common/tabs/tab.actions";

import BillingCycleList from './billing-cycle.list'
import BillingCycleForm from "./billing-cycle.form";

import { create, update } from "./billing-cycle.actions";

class BillingCycle extends Component {
  componentWillMount() {
    this.props.selectTab('tablist')
    this.props.showTabs('tablist', 'tabcreate')
  }

  render() {
    return (
      <div>
        <ContentHeader title="Billing Cycles" small="v1.0" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="List" icon="bars" target="tablist" />
              <TabHeader label="Add" icon="plus" target="tabcreate" />
              <TabHeader label="Edit" icon="pencil" target="tabupdate" />
              <TabHeader label="Delete" icon="trash-o" target="tabdelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tablist">
                <BillingCycleList />
              </TabContent>
              <TabContent id="tabcreate">
                <BillingCycleForm onSubmit={this.props.create} />
              </TabContent>
              <TabContent id="tabupdate">
                <BillingCycleForm onSubmit={this.props.update} />
              </TabContent>
              <TabContent id="tabdelete">TabDelete</TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create, update}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)