import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Slider from "../Slider/Slider";

function HomePage(props) {

    const { history } = props.history;

    return(
        <div>
            <HeaderMenu history={history}/>
            <Slider />
            <div className="container">

            </div>
        </div>
    )
}

export default HomePage;