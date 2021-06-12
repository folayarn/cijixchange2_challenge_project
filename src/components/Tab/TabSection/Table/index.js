import React from 'react';
import {Table,Form,Button,Row,Col} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import classes from './index.module.css'

const TableContainer=()=> {
  const gig =useSelector(state=>state.gig.gig)
  console.log(gig)
  return (
    <Row>
      <Col md={1}></Col>
      <Col>
    <Table responsive className={classes.table}>
      <thead className={classes.head}>
      <tr>
        <th></th>
      <th>Role</th>
      <th>Company</th>
      <th>Date</th>
      <th>Salary</th>
      <th></th>
      </tr>
      </thead>
      <tbody className={classes.body}>
{gig.map((gi)=>



<tr>
<td>
    <Form.Check type="checkbox" />
  </td>
  <td>
    {gi.Role}
  </td>
  <td>
    {gi.Company}
  </td>
  <td>
    {gi.Date}
  </td>
  <td>
    {gi.Salary}
  </td>
  <td>
    <Button className={classes.btn}>Delete</Button>
  </td>
</tr>









)}
      
      

</tbody>
    </Table>
    </Col>
    <Col md={1}></Col>
    </Row>
  );
}

export default TableContainer;
