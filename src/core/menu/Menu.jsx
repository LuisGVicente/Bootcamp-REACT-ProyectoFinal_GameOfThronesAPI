import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss';

export default function Menu(props) {
    

    return (
        <nav className="c-menu">
            <ul className="c-menu__list">
                <li>
                    <NavLink className="c-menu__link" activeClassName="c-menu__link--active" to="/characters">Personajes</NavLink>
                </li>
                <li>
                    <NavLink className="c-menu__link" activeClassName="c-menu__link--active" to="/houses">Casas</NavLink>
                </li>
                <li>
                    <NavLink className="c-menu__link" activeClassName="c-menu__link--active" to="/chronology">Cronologia</NavLink>
                </li>
            </ul>
        </nav>
        
    )
}
 