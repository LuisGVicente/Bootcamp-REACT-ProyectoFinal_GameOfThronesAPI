import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss';
import {useTranslation} from "react-i18next";


export default function Menu(props) {
    
    const {t, i18n} = useTranslation();

    return (
        <nav className="c-menu">
            <ul className="c-menu__list">
                <li>
                    <NavLink className="c-menu__link" activeClassName="c-menu__link--active" to="/characters">{t('GOT.characters')}</NavLink>
                </li>
                <li>
                    <NavLink className="c-menu__link" activeClassName="c-menu__link--active" to="/houses">{t('GOT.houses')}</NavLink>
                </li>
                <li>
                    <NavLink className="c-menu__link" activeClassName="c-menu__link--active" to="/chronology">{t('GOT.chronology')}</NavLink>
                </li>
            </ul>
        </nav>
        
    )
}
 