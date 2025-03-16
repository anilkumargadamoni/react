const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "This is h1 tag"),
        React.createElement("h2", {}, "This is h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "This is h1 tag"),
        React.createElement("h2", {}, "This is h2 tag")
    ]),
    React.createElement("div", {}, [
        React.createElement("h3", {}, "Numbers from 1- 10"),
        React.createElement("p", {}, "1,2,3,4,5,6,7,8,9,10")
    ])
]);
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello Gadamoni Anil Kumar");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const parent1 = ReactDOM.createRoot(document.getElementById("root"));
parent1.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
