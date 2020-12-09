import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PortadaPage from '../PortadaPage/PortadaPage';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useHistory, useParams } from 'react-router-dom';

export default function DetailsPage (props){

    const {detailsName} = useParams();

   
    
    const[character, setDataCharacter] = useState({})

    const[house, setDataHouse] = useState({});


    useEffect(() => {
        axios.get('https://api.got.show/api/show/characters/'+detailsName).then(res => {
            setDataCharacter(res.data)
        })
    }, []);


    useEffect(() => {
        axios.get('https://api.got.show/api/show/houses/'+detailsName).then(res => {
            setDataHouse(res.data[0])
        })
    }, []);
    
    console.log(house)
    return (

        <div className="">
            <button onClick={useHistory().goBack}>Volver</button>
            {/* <PortadaPage values={house}></PortadaPage> */}
            {props.page === 'character' ? <PortadaPage values={character}></PortadaPage> : <PortadaPage values={house}></PortadaPage>}
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-2">
                    {props.page === 'character' ? <h3>Casa</h3> : <h3>Lema</h3>}
                    {props.page === 'character' ? <img src={house.logoURL} alt={house.house} /> : <p>{house.words}</p>}
                    
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    {props.page === 'character' ? <h3>Alianzas</h3> : <h3>Sede</h3> } 
                    {props.page === 'character' ? <p>{character.allegiances}</p> : <p>{house.seat}</p>}
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    {props.page === 'character' ? <h3>Apariciones</h3> : <h3>Region</h3> }
                    <SimpleBar style={{ maxHeight: 200 }}>
                        {props.page === 'character' ? <p>{character.appearances}</p> : <p>{house.region}</p>}
                    </SimpleBar>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    {props.page === 'character' ? <h3>Padre</h3> : <h3>Alianzas</h3>}        
                    {props.page === 'character' ? <p>{character.father}</p> : <p>{house.allegiance}</p>}
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    {props.page === 'character' ?  <h3>Descendientes</h3> : <h3>Regiones</h3>}
                    {props.page === 'character' ? <p>{character.siblings}</p> : <p>{house.region}</p> }
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    {props.page === 'character' ? <h3>Titulos</h3> : <h3>Fundacion</h3> }
                    <SimpleBar style={{ maxHeight: 200 }}>
                    {props.page === 'character' ? <p>{character.titles}</p> : <p>Poner la fecha parametro .createAt</p> }
                    </SimpleBar>
                </div>
            </div>
        </div>
    )
}

