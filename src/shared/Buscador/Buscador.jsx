import React from 'react';
import { useForm } from 'react-hook-form';


export default function Buscador(props) {
    
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
        props.fnFilterItems(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
                <input name="name" id="name"
                   ref={register}/>
            </label>
        </form>
    )
}
