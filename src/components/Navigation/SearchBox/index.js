import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Col} from "react-bootstrap";
import classes from "./index.module.css";
import Icon from "../../../shared/Icon";

const SearchBox = () => {

  return (
  
<Col md={6}>
<div className={classes.input_icons}>
        <i>
          {" "}
          <Icon icon={faSearch} />{" "}
        </i>
        <input placeholder="search" className={classes.input_field}
          type="text"
          
        />
      </div>
    </Col>
  )
}
export default SearchBox;
