import React,{useState} from 'react';
import classes from './index.module.css'

function TabIcons(props) {
const [style, setStyle]= useState({})
 


  const onClick=()=>{
    const divStyle={
      border:'1px solid rgb(240, 188, 17)',
  color:'rgb(240, 188, 17)',
    }
setStyle(divStyle)
  }

  return (
    <div style={style}  className={classes.Wrapper} onClick={onClick}>
<span>{props.icon||null}</span> <span>{props.text}</span> <span>{props.drop||null}</span>
    </div>
  );
}

export default TabIcons;
