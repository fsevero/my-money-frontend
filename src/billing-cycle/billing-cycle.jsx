import React, {Component} from 'react'

import ContentHeader from "../common/template/content.header";
import Content from "../common/template/content";

import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabs.header'
import TabHeader from '../common/tabs/tab.header'
import TabsContent from '../common/tabs/tabs.content'
import TabContent from '../common/tabs/tab.content'

class BillingCycle extends Component {
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
              <TabContent id="tablist">TabList</TabContent>
              <TabContent id="tabcreate">TabCreate</TabContent>
              <TabContent id="tabupdate">TabUpdate</TabContent>
              <TabContent id="tabdelete">TabDelete</TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default BillingCycle