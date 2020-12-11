import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Traductor from '../../shared/Traductor/Traductor';


import './DetailsPage.scss';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useHistory, useParams } from 'react-router-dom';

export default function DetailsPage (props){

    const {detailsName} = useParams();

   
    
    const[character, setDataCharacter] = useState({})

    const[house, setDataHouse] = useState({});

    
    useEffect(() => {
        if(props.page === 'character'){
            axios.get('https://api.got.show/api/show/characters/'+detailsName).then(res => {
                setDataCharacter(res.data)
                axios.get('https://api.got.show/api/show/houses/'+res.data.house).then(res => {
                        setDataHouse(res.data[0])
                })
                
            })
        }else{
            axios.get('https://api.got.show/api/show/houses/'+detailsName).then(res => {
                setDataHouse(res.data[0])
            })
        }
    },[]);


    const history = useHistory();


    
    return (

        <div className="c-detail">
            <div className="c-detail__header">
                <button className="c-detail__button" onClick={() => {history.push(props.page === 'character' ? '/characters' : '/houses')}}>Volver</button>
                <Traductor></Traductor>
            </div>
            <div className="c-detail__head">
                <figure className="c-detail__figure">
                    <img src={character.image} alt={character.name} />
                    <figcaption className="c-detail__figure--text">{character.name}</figcaption>
                </figure> 
            </div>
            <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-2">
                    <div className="c-detail__info">
                        {props.page === 'character' ? <h3>Casa</h3> : <h3>Lema</h3>}
                        {props.page === 'character' ? <img className="c-detail__info--img" src={house.logoURL} alt={house.name} /> : <p className="c-detail__info--text">{house.words}</p>}
                    </div> 
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <div className="c-detail__info">
                        {props.page === 'character' ? <h3>Alianzas</h3> : <h3>Sede</h3> } 
                        {props.page === 'character' ? <p className="c-detail__info--text">{character.allegiances}</p> : <p className="c-detail__info--text">{house.seat}</p>}
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <div className="c-detail__info">
                        {props.page === 'character' ? <h3>Apariciones</h3> : <h3>Region</h3> }
                        <SimpleBar style={{ maxHeight: 150 }}>
                            {props.page === 'character' ? <p className="c-detail__info--text">{character.appearances}</p> : <p className="c-detail__info--text">{house.region}</p>}
                        </SimpleBar>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <div className="c-detail__info">
                        {props.page === 'character' ? <h3>Padre</h3> : <h3>Alianzas</h3>}        
                        {props.page === 'character' ? <p className="c-detail__info--text">{character.father}</p> : <p className="c-detail__info--text">{house.allegiance}</p>}
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <div className="c-detail__info">
                        {props.page === 'character' ?  <h3>Descendientes</h3> : <h3>Regiones</h3>}
                        {props.page === 'character' ? <p className="c-detail__info--text">{character.siblings}</p> : <p className="c-detail__info--text">{house.region}</p> }
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <div className="c-detail__info">
                        {props.page === 'character' ? <h3>Titulos</h3> : <h3>Fundacion</h3> }
                        <SimpleBar style={{ maxHeight: 150 }}>
                            {props.page === 'character' ? <p className="c-detail__info--text">{character.titles}</p> : <p className="c-detail__info--text">Poner la fecha parametro .createAt</p> }
                        </SimpleBar>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

