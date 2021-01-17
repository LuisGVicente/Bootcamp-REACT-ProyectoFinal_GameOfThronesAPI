import React from 'react';
import { useForm } from 'react-hook-form';
import {useTranslation} from "react-i18next";

import './Buscador.scss'


export default function Buscador(props) {
    
    const { register, handleSubmit, reset } = useForm();

    const {t, i18n} = useTranslation();

    const onSubmit = (data) => {
        props.fnFilterItems(data);
        reset();
    };

    return (
        <form className="c-buscador" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <input className="c-buscador__input" name="name" id="name" placeholder={t('GOT.search')} ref={register}/>
            </div>
        </form>
    )
}
