import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "div",
    {id:"parent", key:1},
    [
    React.createElement(
        "div",
        {id:"child1",key:4},
        React.createElement("h1",{id:"h1hv" , key:2}, "this is child1 heading")
     ),
    React.createElement(
        "div",
        {id:"child2",key:5},
        React.createElement("h1",{id:"h2dh"},"this is child")

    )]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)

