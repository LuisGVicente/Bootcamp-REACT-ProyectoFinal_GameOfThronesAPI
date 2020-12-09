import React from 'react'
import Menu from '../../core/menu/Menu'
import Traductor from '../../shared/Traductor/Traductor'

import './HomePage.scss';

export default function Homepage(props) {
    return (
        <div className="c-home">
            <div>
                <img src="../../assets/img/image 1@2x.png" alt="got"/>
            </div>
            <Traductor></Traductor>
            <Menu></Menu>
        </div>
    )
}
