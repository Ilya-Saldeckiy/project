import React from "react";

function About() {
    return(
        <div className="d-flex about__position" id="about">
            <div className="about__block">
                <h2 className="about__caption">О нас</h2>
                <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum praesentium provident quisquam voluptatem. Ab aliquam aut cumque doloremque et natus nisi, omnis optio saepe sapiente sit velit, vitae voluptates?</p>
            </div>
            <img src="http://dummyimage.com/500" alt="Картинка"/>
        </div>
    )
}

export default About;