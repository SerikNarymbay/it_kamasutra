import React from "react";
import classes from "./Header.module.css";
import logo from '../../images/IMAGE.svg'


const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="gh" /> 
      <h1>Uspace</h1>
    </header>
    
  );
};

export default Header;
