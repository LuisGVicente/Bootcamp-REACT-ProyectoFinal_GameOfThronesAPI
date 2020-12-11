import React from 'react';
import { useForm } from 'react-hook-form';

import './Buscador.scss'


export default function Buscador(props) {
    
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
        props.fnFilterItems(data);
        reset();
    };

    return (
        <form className="c-buscador" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <input className="c-buscador__input" name="name" id="name" placeholder="Buscar..." ref={register}/>
            </div>
        </form>
    )
}
