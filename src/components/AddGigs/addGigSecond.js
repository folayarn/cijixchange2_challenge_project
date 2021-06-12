import React from 'react'
import { Card,Form ,Button,Row,Col} from 'react-bootstrap'
import classes from './index.module.css'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {on_track} from '../../store/actions/gigActions'




const AddGigSecond=()=>{

  const dispatch = useDispatch();
const onBack=()=>{
 dispatch(on_track(false))
}

  return(
<Card className={classes.post_section}>
<Card.Body>
<Form>
<Row>

  <span className={classes.salary}>Salary</span>
  <Col>
  <Form.Group>
    <Form.Control type="number" placeholder="Minimum" />
</Form.Group>

  </Col>
  <Col>
  <Form.Group>
    <Form.Control type="number" placeholder="Maximum" />
</Form.Group>

  </Col>
</Row>

  <Col>
  <Form.Group style={{ marginTop:'20px',float:'right' }}>
  <Link to="/addgigs"> 
  <Button onClick={onBack} variant="default">Back</Button></Link>  
   <Button className={classes.Button}>Add gig</Button>
</Form.Group>

  </Col>
</Form>


</Card.Body>

</Card>

  )
}

export default AddGigSecond