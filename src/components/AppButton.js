import React from "react";

const AddButton = (props,context) => {
  const themeClass = context=== "light" ? "is-light" : "is-dark";
  return (
    <div>
      <a className={`button ${themeClass}`}> {props.text} </a>
    </div>
  );
};

export default AddButton;
