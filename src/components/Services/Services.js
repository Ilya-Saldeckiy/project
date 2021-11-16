import React from "react";
import icoList from "../../images/list-ico.svg";

function Services() {

    const items = [
        {
            id: 0,
            text: 'Отделка квартиры внутри',
            price: 100
        },
        {
            id: 1,
            text: 'Отделка дома снаружи',
            price: 200
        },
        {
            id: 2,
            text: 'Услуга 3',
            price: 300
        },
        {
            id: 3,
            text: 'Услуга 4',
            price: 500
        },
    ];



    return(
        <div className="services__position">
            <h2 className="services__tittle">Услуги</h2>
            <div className="d-flex">
                <img className="services__mainImg" src="http://dummyimage.com/500" alt=""/>
                <div className="services__item-position">
                    {items.map(items => (
                        <div className="d-flex services__item" key={items.id}>
                            <div className="services__text-block">
                                <p className="services__text">{items.text}</p>
                            </div>
                            <p className="services__price">{items.price}р</p>
                            <img className="services__img" src={icoList} alt=""/>
                        </div>
                    ))}
                    <a className="services__link" href="/services">Показать все услуги</a>
                </div>
            </div>
        </div>
    )
}

export default Services;