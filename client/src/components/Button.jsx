import React from "react";
import { Link } from "react-router-dom";

const Button = ({ type, text, link, action }) => {
  return (
    <>
      {link !== null ? (
        <Link className={"btn " + type} to={link}>
          {text}
        </Link>
      ) : (
        <button className={"btn " + type} onClick={action} >{text}</button>
      )}
    </>
  );
};

export default Button;
