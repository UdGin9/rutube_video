import React from 'react';
import {Link} from "react-router-dom";
import s from "./Header.module.scss"
const Header = () => {


    return (
        <header className={s.header}>
            <img src="/logo_rutube.png" alt="" className={s.img}/>
            <navbar>
                <Link to="/">
                    <button className={s.buttonBack}>Вернуться к выбору видео</button>
                </Link>
            </navbar>
        </header>
    );
};

export default Header;