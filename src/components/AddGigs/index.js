import React,{useState} from 'react';
import { Col,Row,Card } from 'react-bootstrap';
import AddGigSecond from './addGigSecond';
import AddPage from './AddPage';
import classes from './index.module.css'
import {useSelector,shallowEqual} from 'react-redux'
import Icon from '../../shared/Icon'
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import {Switch,Route} from 'react-router-dom'

const AddGigs=()=> {
const tracker=useSelector(state=>state.gig.track,shallowEqual)

const color={
  color:'rgb(240, 188, 17)'
}
  return (
    <Row>
      <Col md={12}>
      <Row style={{ padding:'10px',borderBottom:'1px solid rgb(243, 242, 242)' }}>
        <Col><h3>Gigs</h3></Col>
        <Col>
        </Col>
      </Row>
<Row>
<Col md={3}>
<h6 style={{ padding:'5px',margin:'7% 20%' }}>New gig</h6>

<Card className={classes.card}>
<Card.Body>

<ul>
<li style={!tracker?color:null}> 
{
!tracker
?
<Icon className={classes.icon} size="xs" icon={faCircle} />
:
null
} 
{'   '}
 Basic Data</li>
<li style={tracker?color:null}>
{
tracker
?
<Icon className="icon" size="xs" icon={faCircle} />
:
null
}
 {'   '}
  Renumeration</li>

</ul>

</Card.Body>

</Card>


</Col>

<Col md={7}>

<Switch>
  <Route exact path="/addgigs/"  component={AddPage} />
  <Route path="/addgigs/second" component={AddGigSecond} />
</Switch>
</Col>
<Col md={2}>


</Col>
</Row>

      </Col>
    </Row>

  );
}

export default AddGigs;
