import React from 'react'


export default function PortadaPage(props){
    console.log(props.values.name);
    return (
        <div>
            <figure>
                <img src={props.values.image} alt={props.values.name} />
                <figcaption>{props.values.name}</figcaption>
            </figure>            
        </div>
    )
}