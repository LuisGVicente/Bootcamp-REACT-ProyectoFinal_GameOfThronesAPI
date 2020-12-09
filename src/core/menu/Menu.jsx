import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu(props) {
    

    return (
        <div className="container">
            <div className="row">
                <Link className="col-lg-4" to="/characters">Personajes</Link>
                <Link className="col-lg-4" to="/houses">Casas</Link>
                <Link className="col-lg-4" to="/chronologies">Cronología</Link>
            </div>
        </div>
    )
}
 