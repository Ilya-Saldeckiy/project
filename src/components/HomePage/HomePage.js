import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Slider from "../Slider/Slider";
import Cards from "../Cards/Cards"
import About from "../About/About"
import Services from "../Services/Services";

function HomePage(props) {

    const { history } = props.history;

    return(
        <div>
            <HeaderMenu history={history}/>
            <Slider />
            <Cards />
            <About />
            <Services />
        </div>
    )
}

export default HomePage;