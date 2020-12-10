import React from 'react'
import Menu from '../../core/menu/Menu'
import Traductor from '../../shared/Traductor/Traductor'
import './HomePage.scss';

export default function Homepage(props) {
    

    return (
        <>
            <div className="home">
                <Traductor></Traductor>
                <div>GAME OF THRONES</div>
                <Menu></Menu>
            </div>
        </>
    )
}
