import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Slider from "../Slider/Slider";
import Cards from "../Cards/Cards"

function HomePage(props) {

    const { history } = props.history;

    return(
        <div>
            <HeaderMenu history={history}/>
            <Slider />
            <Cards />
        </div>
    )
}

export default HomePage;