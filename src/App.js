import React from 'react'
import classes from './App.module.css';
import {Container,Col,Row} from 'react-bootstrap'
import Headings from './components/Navigation/Headings';
import Navigation from './components/Navigation';
import DashBoard from './components/DashBoard'
import Gigs from './components/Gigs'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import AddGigs from './components/AddGigs';



function App(){
const routes = (
<Switch>
<Route exact path="/"  component={DashBoard} />
<Route path="/gigs" component={Gigs} />
<Route path="/addgigs" component={AddGigs} />
</Switch>

)

  return (
    <Container fluid className={classes.Wrapper}>
<Row>
<Navigation/>

<Col md={9}>
  <Row>
  <Headings/>

<Col md={12} className={classes.Container}>
{routes}
</Col>


  </Row>
  


</Col>
</Row>
      </Container>
  );
}

export default App;
