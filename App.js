import React from "react";
import ReactDOM from "react-dom/client";
//Create Nested header element using React.createElement(h1,h2,h3 inside div with class title)
// const header = React.createElement("div",{class: "title"},[
// React.createElement("h1", {},"I'm H1 tag"),
// React.createElement("h2", {},"I'm H2 tag"),
// React.createElement("h3", {},"I'm H3 tag"),]);

//Create same with JSX
// const header = (
//     <div className="title">
//         <h1>I'm H1 tag</h1>
//         <h2>I'm H2 tag</h2>
//         <h3>I'm H3 tag</h3>
//     </div>
// )


// Functional Component of the same JSX
// const TitleComponent = () => {
//     return (
//         <div className="title">
//             <h1>I'm H1 tag</h1>
//             <h2>I'm H2 tag</h2>
//             <h3>I'm H3 tag</h3>
//         </div>
//     );
// };

//Composition of Components
// const HeadingCompo = () => (
//     <div id="container">
//         <h1 className="heading">Fuctional Component </h1>
//         <TitleComponent />
//         {TitleComponent()}
//         {<TitleComponent></TitleComponent>}
//     </div>
//);

//Create Header component from scratch using fuctional component in Jsx

const Header = () => (
  <div id="container">
    <img
      className="logo"
      src="https://img.icons8.com/?size=2x&id=bzf0DqjXFHIW&format=png"
    />
    <div className="search">
        <input style={{width:150, height:40}} placeholder='Search' />
    </div>
    <img className='user' src='https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg' />
  </div>
);
// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h1 className="heading">React functional component!</h1>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);
//root.render(title);
//root.render(<HeadingCompo />);
root.render(<Header />);
