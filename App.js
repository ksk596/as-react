const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "heading" }, "h1 From nested DIV"), React.createElement("h2", {}, "h2 From nested DIV"),]), React.createElement("div", { id: "child2" }, [React.createElement("h1", { id: "heading" }, "h1 From nested DIV"), React.createElement("h2", {}, "h2 From nested DIV"),])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);

//JSX