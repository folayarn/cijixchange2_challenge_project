import {  faBell, faEnvelope,faBox } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col,Image } from 'react-bootstrap';
import Icon from '../../../shared/Icon';
import classes from './index.module.css'

const InlineIcons=() =>{
  return (
    <Col md={6}>
      <ul className={classes.icon}>
        <li><Icon size="1x" icon={faBell} /></li>
        <li><Icon size="1x" icon={faEnvelope} /></li>
        <li><Icon size="1x" icon={faBox} /></li>
        <li><Image className=" rounded img-fluid " src="/images/ss.jpg"
         height="20" width="20" /></li>
      </ul>
    </Col>
  );
}

export default InlineIcons;
