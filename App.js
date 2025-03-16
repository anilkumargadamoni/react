import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",{id : "parent"},[
    React.createElement("div",{id :"child"},[
        React.createElement("h1",{},"This is h1 tag"),
        React.createElement("h2",{},"This is h2 tag")
    ]),
    React.createElement("div",{id : "child2"},[
        React.createElement("h1",{},"This is h1 tag"),
        React.createElement("h2",{},"This is h2 tag")
    ]),
    React.createElement("div",{},[
        React.createElement("h3",{},"Numbers from 1- 10"),
        React.createElement("p",{},"1,2,3,4,5,6,7,8,9,10")
    ])
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);