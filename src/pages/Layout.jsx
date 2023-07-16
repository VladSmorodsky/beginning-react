import NavigationBar from "../components/NavigationBar";
import React from "react";

export default function Layout(props) {
  return (
    <div className="todo-app-container">
      <NavigationBar />
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}