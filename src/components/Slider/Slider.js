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
            caption: 'Kembang Flower Mantap1',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            link: '/product-1'
        },
        {
            id: 1,
            img: slide1,
            caption: 'Kembang Flower Mantap',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            link: '/product-2'
        },
        ];

    const ArrowLeft = (props) => (
        <button {...props} className={'slider__prev'}>
            <svg width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3331 8.66665H4.51982L9.35982 2.85331C9.58614 2.58103 9.69502 2.22998 9.66251 1.87742C9.63001 1.52485 9.45877 1.19963 9.18649 0.973314C8.9142 0.746996 8.56316 0.638114 8.21059 0.67062C7.85802 0.703126 7.5328 0.874359 7.30648 1.14665L0.639819 9.14665C0.594967 9.21028 0.554858 9.27713 0.519819 9.34665C0.519819 9.41331 0.51982 9.45331 0.426486 9.51998C0.366051 9.67286 0.334408 9.8356 0.333153 9.99998C0.334408 10.1644 0.366051 10.3271 0.426486 10.48C0.426486 10.5466 0.426486 10.5866 0.519819 10.6533C0.554858 10.7228 0.594967 10.7897 0.639819 10.8533L7.30648 18.8533C7.43185 19.0038 7.58883 19.1249 7.76628 19.2078C7.94373 19.2908 8.13727 19.3336 8.33315 19.3333C8.64469 19.3339 8.9466 19.2254 9.18649 19.0266C9.3215 18.9147 9.4331 18.7772 9.5149 18.6221C9.5967 18.467 9.6471 18.2972 9.6632 18.1226C9.6793 17.948 9.66079 17.7719 9.60873 17.6044C9.55667 17.4369 9.47209 17.2814 9.35982 17.1466L4.51982 11.3333H20.3331C20.6868 11.3333 21.0259 11.1928 21.276 10.9428C21.526 10.6927 21.6665 10.3536 21.6665 9.99998C21.6665 9.64636 21.526 9.30722 21.276 9.05717C21.0259 8.80712 20.6868 8.66665 20.3331 8.66665Z"/>
            </svg>
            Previous
        </button>
    );
    const ArrowRight = (props) => (
        <button {...props} className={'slider__next'}>
            Next
            <svg width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3331 8.66665H4.51982L9.35982 2.85331C9.58614 2.58103 9.69502 2.22998 9.66251 1.87742C9.63001 1.52485 9.45877 1.19963 9.18649 0.973314C8.9142 0.746996 8.56316 0.638114 8.21059 0.67062C7.85802 0.703126 7.5328 0.874359 7.30648 1.14665L0.639819 9.14665C0.594967 9.21028 0.554858 9.27713 0.519819 9.34665C0.519819 9.41331 0.51982 9.45331 0.426486 9.51998C0.366051 9.67286 0.334408 9.8356 0.333153 9.99998C0.334408 10.1644 0.366051 10.3271 0.426486 10.48C0.426486 10.5466 0.426486 10.5866 0.519819 10.6533C0.554858 10.7228 0.594967 10.7897 0.639819 10.8533L7.30648 18.8533C7.43185 19.0038 7.58883 19.1249 7.76628 19.2078C7.94373 19.2908 8.13727 19.3336 8.33315 19.3333C8.64469 19.3339 8.9466 19.2254 9.18649 19.0266C9.3215 18.9147 9.4331 18.7772 9.5149 18.6221C9.5967 18.467 9.6471 18.2972 9.6632 18.1226C9.6793 17.948 9.66079 17.7719 9.60873 17.6044C9.55667 17.4369 9.47209 17.2814 9.35982 17.1466L4.51982 11.3333H20.3331C20.6868 11.3333 21.0259 11.1928 21.276 10.9428C21.526 10.6927 21.6665 10.3536 21.6665 9.99998C21.6665 9.64636 21.526 9.30722 21.276 9.05717C21.0259 8.80712 20.6868 8.66665 20.3331 8.66665Z"/>
            </svg>
        </button>
    );

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        className: "slider__header"
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
                        <a className="slider__link" href={slider.link}>Узнать больше</a>
                    </div>
                </div>
            ))}
        </Slider>

    )
}

export default Slider1;