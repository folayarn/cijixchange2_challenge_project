import React from 'react';
import {Col} from 'react-bootstrap'
import TabIcons from './TabIcons';
import Icon from '../../../shared/Icon'
import classes from './index.module.css'
import { faArrowDown, faBriefcase, faCheck, faFilter,faGlobe,faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';

const Header=()=> {
  return (
    <Col>
<ul className={classes.ul}>
<li><TabIcons  text="Freelance" /></li>

  <li><TabIcons icon={ <Icon size="1x" icon={faFilter} /> } text="Keywords"
  drop={<Icon size="1x" icon={faArrowDown} /> }
  /></li>

<li><TabIcons icon={ <Icon size="1x" icon={faMapMarker} /> } text="Location"
  drop={<Icon size="1x" icon={faArrowDown} /> }
  /></li>
  <li><TabIcons icon={ <Icon size="1x" icon={faGlobe} /> } text="Remote Friendly"
  
  /></li>
  <li><TabIcons icon={ <Icon size="1x" icon={faDev} /> } text="Design"
  drop={<Icon size="1x" icon={faCheck} /> }
  /></li>
  <li><TabIcons icon={ <Icon size="1x" icon={faBriefcase} /> } text="Contract"
  
  /></li>
</ul>
    </Col>
  );
}

export default Header;
