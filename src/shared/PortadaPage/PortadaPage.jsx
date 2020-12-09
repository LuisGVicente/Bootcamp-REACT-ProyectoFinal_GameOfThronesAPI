import React from 'react'


export default function PortadaPage(props){
    console.log(props.values);
    return (
        <div>
            <figure>
                <img src={props.values.logoURL} alt={props.values.name} />
                <figcaption>{props.values.name}</figcaption>
            </figure>            
        </div>
    )
}