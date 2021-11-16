import React from "react";

function HeaderMenu() {

    function call() {
        document.location.href="tel:+79102413077"
    }

    return (
        <header className="d-flex header">
            <a className="header__logo" href="/">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 1.44338C17.047 0.550211 18.953 0.550212 20.5 1.44338L31.0885 7.55662C32.6355 8.44979 33.5885 10.1004 33.5885 11.8868V24.1132C33.5885 25.8996 32.6355 27.5502 31.0885 28.4434L20.5 34.5566C18.953 35.4498 17.047 35.4498 15.5 34.5566L4.91154 28.4434C3.36454 27.5502 2.41154 25.8996 2.41154 24.1132V11.8868C2.41154 10.1004 3.36454 8.44979 4.91154 7.55662L15.5 1.44338Z" fill="#86A03A"/>
                    <path d="M16.2995 22.072C15.9635 22.072 15.6955 21.976 15.4955 21.784C15.3035 21.584 15.2075 21.316 15.2075 20.98V14.56C15.2075 14.232 15.2955 13.98 15.4715 13.804C15.6475 13.628 15.8995 13.54 16.2275 13.54H19.2995C20.2355 13.54 20.9635 13.78 21.4835 14.26C22.0035 14.732 22.2635 15.392 22.2635 16.24C22.2635 17.08 21.9995 17.74 21.4715 18.22C20.9515 18.7 20.2275 18.94 19.2995 18.94H17.4155V20.98C17.4155 21.316 17.3155 21.584 17.1155 21.784C16.9155 21.976 16.6435 22.072 16.2995 22.072ZM18.9995 17.284C19.4075 17.284 19.7075 17.2 19.8995 17.032C20.0995 16.864 20.1995 16.604 20.1995 16.252C20.1995 15.556 19.7995 15.208 18.9995 15.208H17.4155V17.284H18.9995Z" fill="white"/>
                </svg>
            </a>
            <ul className="d-flex list-reset header__list">
                <li className="header__list-item">Элемент 1</li>
                <li className="header__list-item">Элемент 2</li>
                <li className="header__list-item">Элемент 3</li>
            </ul>
            <button className="header__btn" onClick={call}>89102413077</button>
        </header>

    );
}

export default HeaderMenu;