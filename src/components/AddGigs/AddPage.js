import React,{useState} from 'react'
import { Card,Form ,Button,Row,Col} from 'react-bootstrap'
import classes from './index.module.css'
import {on_track} from '../../store/actions/gigActions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'



const AddPage=()=>{
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [val, setVal] = useState("");
  
const onSubmit=()=>{
 dispatch(on_track(true))
}
const addClick = () => {
  const value = val.toUpperCase();
  if (tags.find((tag) => tag.toUpperCase() === value)) {
    return;
  }
  if (value === "") {
    return;
  }
  setTags([...tags, value]);
  setVal("");
  console.log(tags)
};

const deleteTag = (tagIndex) => {
  const newTags = [...tags];
  newTags.splice(tagIndex, 1);
  setTags(newTags);
};

const onChange = (e) => {
  setVal(e.target.value);
  console.log(val)
};


  return(
<Card className={classes.post_section}>
<Card.Body>
<Form>
<Row>
  <Col>
  <Form.Group>
    <Form.Label>Role</Form.Label>
    <Form.Control type="text" />
</Form.Group>

  </Col>
  <Col>
  <Form.Group>
    <Form.Label>Company</Form.Label>
    <Form.Control type="text" />
</Form.Group>

  </Col>
</Row>
<Row>
  <Col>
  <Form.Group>
    <Form.Label>Location</Form.Label>
    <Form.Control as="select">
      <option disabled>Country</option>
      <option>Nigeria</option>
      </Form.Control>
</Form.Group>
  </Col>
  <Col>
  <Form.Group>
  <Form.Label>{'  State/Region   '}</Form.Label>
  <Form.Control as="select">
      <option disabled>Select</option>
      </Form.Control>
</Form.Group>
  </Col>
</Row>

<Col>
<Form.Group>
<Form.Label>{'  '}</Form.Label>
    <Form.Control type="text" placeholder="Address"/>
</Form.Group>
</Col>

<Col>
  <Form.Group>
    <Form.Label>Add tags:</Form.Label>
    <Form.Control type="text" 
    value={val}
    className={classes.input}
    onChange={(e) => onChange(e)}
    disabled={tags.length === 2 ? true : false}
    onBlur={addClick}
    />
    <ul className={classes.tag}>
                  {tags.map((tag, index) => (
                    <li key={index} onClick={() => deleteTag(index)}>
                      {tag}
                    </li>
                  ))}
                </ul>
</Form.Group>
  </Col>




  <Col>
  <Form.Group style={{ marginTop:'20px',float:'right' }}>
   <Link to="/gigs"><Button variant="default">Cancel</Button></Link>
  <Link to="/addgigs/second"><Button onClick={onSubmit} className={classes.Button}>
    Continue</Button></Link>
</Form.Group>

  </Col>
</Form>


</Card.Body>

</Card>

  )
}

export default AddPage