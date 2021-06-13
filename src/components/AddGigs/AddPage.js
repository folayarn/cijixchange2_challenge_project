import React,{useState} from 'react'
import { Card,Form ,Button,Row,Col} from 'react-bootstrap'
import classes from './index.module.css'
import {on_track} from '../../store/actions/gigActions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { WithContext as ReactTags } from 'react-tag-input';






const AddPage=()=>{

  const suggestions=[
    { id: 'USA', text: 'USA' },
    { id: 'Germany', text: 'Germany' },
    { id: 'Austria', text: 'Austria' },
    { id: 'Costa Rica', text: 'Costa Rica' },
    { id: 'Sri Lanka', text: 'Sri Lanka' },
    { id: 'Thailand', text: 'Thailand' }
  ]
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [suggestion,setSuggestion]=useState(suggestions)

  const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  const delimiters = [KeyCodes.comma, KeyCodes.enter];
  
const onSubmit=()=>{
 dispatch(on_track(true))
}

const filterTags=(value,suggested)=> {
  var query = value.toLowerCase()
  var data= suggested.filter((suggestion)=> 
  suggestion.toLowerCase().includes(query)
  )
  setSuggestion(data)
}
 const handleAddition=(tag)=> {
  setTags([...tags, tag]);
}
const handleDrag=(tag, currPos, newPos)=> {
  const tags = [...tags];
  const newTags = tags.slice();
  newTags.splice(currPos, 1);
  newTags.splice(newPos, 0, tag);
  setTags(newTags);
}
const handleDelete=(i)=>{
  const data=tags.filter((tag, index) => index !== i)
  setTags(data)
}



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

<Col md={12}>
<Form.Group>
<Form.Label>{'  '}</Form.Label>
    <Form.Control type="text" placeholder="Address"/>
</Form.Group>
</Col>

<Col md={12}>
  <Form.Group>

    <ReactTags 
    inline
                      tags={tags}
                    suggestions={suggestion}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    handleDrag={handleDrag}
                    delimiters={delimiters} 
                   
                    
                    id={'tags'}
                    />
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