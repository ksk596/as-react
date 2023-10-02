import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  - Logo
 *  - Nav items
 *  - Cart
 * Body
 *  - Search component
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Image
 *          - Name of Res
 *          - Star rating
 *          - Cuisines
 *          - Price
 *          - Delivary time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f5d51ef6af9b698ec1265b389f80b75c" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// const styleCard = {
//     backgroundColor: "#f0f0f0"
// }
const RestaurantCard = (props) => {
    console.log(props);
    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0"
        }}>
            <img className="res-logo" alt-name="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gtflfeksgaqavpwayty2" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.3 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <RestaurantCard resName="Healthy Foods" cuisine="Biryani, Dosas, Chinese"/>
          <RestaurantCard resName="KFC" cuisine="Burger, Chococake, coke"/>
        </div>
      </div>
    );
}

const AppLayout = () => { 
    return (
<div className="app">
    <Header />
    <Body />
</div>
)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
