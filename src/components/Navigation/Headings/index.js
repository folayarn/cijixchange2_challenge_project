import React from 'react';
import {Col,Row} from 'react-bootstrap'
import InlineIcons from '../InlineIcons';
import SearchBox from '../SearchBox';
import classes from './index.module.css'

const Headings =()=> {
  return (
    
    <Col md={12} className={classes.header}>
      <Row style={{ margin:'0px 25px ' }}>

      <SearchBox/>
      <InlineIcons/>
      </Row>
    </Col>
  );
}

export default Headings;
