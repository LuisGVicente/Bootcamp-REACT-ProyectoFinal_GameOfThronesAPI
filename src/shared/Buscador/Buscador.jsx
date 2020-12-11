import React from 'react';
import { useForm } from 'react-hook-form';
import {useTranslation} from "react-i18next";


export default function Buscador(props) {
    
    const { register, handleSubmit, reset } = useForm();

    const {t, i18n} = useTranslation();

    const onSubmit = (data) => {
        props.fnFilterItems(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
                <input name="name" id="name" placeholder={t('GOT.search')}
                   ref={register}/>
            </label>
        </form>
    )
}
