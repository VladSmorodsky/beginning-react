import NavigationBar from "../components/NavigationBar";
import React from "react";

export default function Layout(props) {
  return (
    <>
      <NavigationBar/>
      <div className="todo-app-container">
        <div className="container">
          {props.children}
        </div>
      </div>
    </>
  );
}