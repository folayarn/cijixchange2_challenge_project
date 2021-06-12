import React from 'react';
import Icon from '../../shared/Icon';
import {Col,Image} from 'react-bootstrap'
import classes from './index.module.css'
import {Link}from 'react-router-dom'
import { faHome,faGift,faUser,faAddressBook } from "@fortawesome/free-solid-svg-icons";

const Navigation=()=> {
  return (
    <Col md={3} className={classes.sideNavigation}>

<h4 className={classes.header}>
  <Image src="/images/logo.png" height="90" width="90"/>
       <span> Test</span>
        </h4>

      <ul className={classes.list}>
        <li ><Link to="/" className={classes.a}><span><Icon size='1x' icon={faHome} /> </span>DashBoard</Link> </li>
        <li ><Link to="/gigs" className={classes.a}><span><Icon size='1x' icon={faGift} /> </span>Gigs</Link></li>
        <li ><Link className={classes.a}><span><Icon size='1x' icon={faAddressBook} /> </span>Company</Link></li>
        <li ><Link className={classes.a}><span><Icon size='1x' icon={faUser} /> </span>Account</Link></li>
      </ul>
    </Col>
  );
}

export default Navigation;
