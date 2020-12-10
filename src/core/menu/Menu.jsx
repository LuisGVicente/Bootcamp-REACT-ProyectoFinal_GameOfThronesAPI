import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss';

export default function Menu(props) {
    

    return (
        <div className="c-menu">
            <div className="row">
                <Link className="col-12 col-sm-6 col-lg-4 col-xl-3" to="/characters">Personajes</Link>
                <Link className="col-12 col-sm-6 col-lg-4 col-xl-3" to="/houses">Casas</Link>
                <Link className="col-12 col-sm-6 col-lg-4 col-xl-3" to="/chronologies">Cronología</Link>
            </div>
        </div>
    )
}
 