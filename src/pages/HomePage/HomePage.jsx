import React from 'react'
import Menu from '../../core/menu/Menu'
import Traductor from '../../shared/Traductor/Traductor'
import './HomePage.scss';
import {useTranslation} from "react-i18next";


export default function Homepage(props) {
    const {t, i18n} = useTranslation();
    return (
        <div className="c-home">
            <Traductor></Traductor>
            <div className="c-home__bg">
                <h1 className="c-home__title">{t('GOT.title')}</h1>
            </div>
            <div className="container">
                <Menu></Menu>
            </div>
        </div>
    )
}
