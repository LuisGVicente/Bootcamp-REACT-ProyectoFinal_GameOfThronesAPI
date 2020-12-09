import React from 'react'
import Menu from '../../core/menu/Menu'
import Traductor from '../../shared/Traductor/Traductor'

import './HomePage.scss';

export default function Homepage(props) {
    return (
        <div className="c-home">
            <div className="c-home__bg">
                <h1 className="c-home__title">Games of Thrones</h1>
            </div>
            <Traductor></Traductor>
            <div className="c-home__menu">
                <Menu></Menu>
            </div>
        </div>
    )
}
