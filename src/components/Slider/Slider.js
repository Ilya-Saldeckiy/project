import React from "react";
import Slider from "react-slick";

import slide1 from "../../images/slider-1.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slider1() {

    const slider = [
        {
            id: 0,
            img: slide1,
            caption: 'Kembang Flower Mantap',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
        },
        {
            id: 1,
            img: slide1,
            caption: 'Kembang Flower Mantap',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
        },
        ];

    // const ArrowLeft = (props) => (
    //     <button {...props} className={'prev'}>
    //         prev
    //     </button>
    // );
    // const ArrowRight = (props) => (
    //     <button {...props} className={'prev'}>
    //         next
    //     </button>
    // );

    var settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: <ArrowLeft />,
        // nextArrow: <ArrowRight />,
        className: "header__slider"
    };
    return(
        <Slider {...settings}>
            {slider.map(slider => (
                <div className="d-flex slider__slide" key={slider.id}>
                    <div className="slider__img-block">
                        <img className="slider__img"  src={slider.img} alt=""/>
                    </div>
                    <div className="slider__text-block">
                        <h2 className="slider__caption">{slider.caption}</h2>
                        <p className="slider__text">{slider.text}</p>
                    </div>
                </div>
            ))}
        </Slider>

    )
}

export default Slider1;