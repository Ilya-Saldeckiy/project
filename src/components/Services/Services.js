import React, {useState} from "react";
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
        {
            id: 4,
            text: 'Услуга 5',
            price: 600
        },
    ];

    const [isActive, setActive] = useState(true);


    return(
        <div className="services__position">
            <h2 className="services__tittle">Услуги</h2>
            <div className="d-flex align-items-start">
                <img className="services__mainImg" src="http://dummyimage.com/500" alt=""/>
                <div className={isActive ? "services__item-position" : "services__item-position active"}>
                    {items.map(items => (
                        <div className="services__item" key={items.id}>
                            <div className="services__text-block">
                                <p className="services__text">{items.text}</p>
                            </div>
                            <p className="services__price">{items.price}р</p>
                            <img className="services__img" src={icoList} alt=""/>
                        </div>
                    ))}
                    <button onClick={() => setActive(false)} className={isActive ? "services__link" : "services__link-disable"}>
                        Показать все услуги
                    </button>
                    <button onClick={() => setActive(true)} className={isActive ? "services__link-disable" : "services__link"}>
                        Скрыть все услуги
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Services;