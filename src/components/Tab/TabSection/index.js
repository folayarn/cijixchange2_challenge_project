import React from 'react';
import Header from './Header'
import {Col,Row} from 'react-bootstrap'
import TableContainer from './Table';

const TabSection=()=> {
  return (
    <Row>
      <Col md={12}>
      <Header/>
    </Col>

    <Col md={12}>
      <TableContainer/>
    </Col>
    </Row>
    


  );
}

export default TabSection;
