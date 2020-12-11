import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss';
import {useTranslation} from "react-i18next";


export default function Menu(props) {
    
    const {t, i18n} = useTranslation();

    return (
        <div className="c-menu">
            <div className="row">
                <Link className="col-12 col-sm-6 col-lg-4 col-xl-3" to="/characters">{t('GOT.characters')}</Link>
                <Link className="col-12 col-sm-6 col-lg-4 col-xl-3" to="/houses">{t('GOT.houses')}</Link>
                <Link className="col-12 col-sm-6 col-lg-4 col-xl-3" to="/chronologies">{t('GOT.chronology')}</Link>
            </div>
        </div>
    )
}
 