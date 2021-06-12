import React from 'react';
import {Row,Col,Tab,Nav} from 'react-bootstrap'
import classes from './index.module.css'
import TabSection from './TabSection';

const TabContent=()=>{

  return (
    <Col md={12}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
  <Col sm={12}>
      <Nav variant="pills" className="flex-row">
        <Nav.Item className={classes.item}>
          <Nav.Link eventKey="first">All Gigs 
          <span className={classes.badge}>244</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">My Gigs 
          <span className={classes.badge}>194</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Rejected Gigs 
          <span className={classes.badge}>6453</span></Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={12}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <TabSection/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          
        </Tab.Pane>
      </Tab.Content>
    </Col>
    </Row>
</Tab.Container>
      </Col>
  );
}

export default TabContent;
