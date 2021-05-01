import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const name = "Nikolas";

const myName = <div>Hello, Nikolas!</div>;

const user = {
  name: "Nikolas",
  age: 40,
  getFullName: function () {
    return `${this.name} ${this.age}`;
  },
};

ReactDOM.render(
  //  myName,
  <div>Hello, {user.getFullName()}!</div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
