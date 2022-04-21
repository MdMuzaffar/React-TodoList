import React, { Component } from "react";

const ToDoList = (props) => {
  const Styles = {
    margin: "40px",
    display: "flex",
  };

  return (
    <>
      <div style={Styles}>
        <button
        onClick={()=> {
            props.onSelect(props.id);
        }}
        > x </button>

        <li> {props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
