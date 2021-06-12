
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Row,Col,Button} from 'react-bootstrap'
import Icon from '../../shared/Icon'
import classes from './index.module.css'
import TabContent from '../Tab'
import {Link} from 'react-router-dom'

const Gigs=()=> {


  return (
    <Row>
      <Col md={12}>
      <Row style={{ padding:'10px' }}>
        <Col><h3>Gigs</h3></Col>
        <Col>
        <Link to="/addgigs"><Button size="sm" className={classes.Button}>
        <span>Add Gig</span> 
        <Icon size="1x" icon={faPlus} />
        </Button>
        </Link>
        </Col>
      </Row>
      </Col>

      
    <TabContent/>
    </Row>
  );
}

export default Gigs;
