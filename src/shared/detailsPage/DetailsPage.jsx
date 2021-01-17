import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Traductor from '../../shared/Traductor/Traductor';
import './DetailsPage.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useHistory, useParams } from 'react-router-dom';
import {useTranslation} from "react-i18next";



export default function DetailsPage (props){

    const {detailsName} = useParams();

    const {t, i18n} = useTranslation();
    
    const[character, setDataCharacter] = useState({})

    const[house, setDataHouse] = useState({});

    const [dateCreate, setDataDateCreate] = useState();

    
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
                setDataDateCreate(res.data[0].createdAt);
                
            })
        }
    },[]);


    const history = useHistory();


    
    return (

        <div className="c-detail">
            <div className="c-detail__header">
                <button className="c-detail__button" onClick={() => {history.push(props.page === 'character' ? '/characters' : '/houses')}}>{t('GOT.back')}</button>
                <Traductor></Traductor>
            </div>
            <div className="c-detail__head">
                <figure className="c-detail__figure">
                    {props.page === 'character' ? <img src={character.image} alt={character.name} /> : <img src={house.logoURL ? house.logoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStx4gMG-ooM9ta3v_6RJV-U30GEQsQSV4TUw&usqp=CAU"} alt={house.name} />}
                    {props.page === 'character' ? <figcaption className="c-detail__figure--text">{character.name}</figcaption> : <figcaption className="c-detail__figure--text">{house.name}</figcaption>}
                    
                </figure> 
            </div>
            <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-2">
                    <div className="c-detail__info">
                        {props.page === 'character' ? <h3>{t('GOT.houses')}</h3> : <h3>{t('GOT.words')}</h3>}
                        {props.page === 'character' ? <img className="c-detail__info--img" src={house.logoURL} alt={house.name} /> : <p className="c-detail__info--text">{house.words}</p>}
                    </div> 
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <div className="c-detail__info">
                        {props.page === 'character' ? <h3>{t('GOT.allegiances')}</h3> : <h3>{t('GOT.seat')}</h3> } 
                        {props.page === 'character' ? <p className="c-detail__info--text">{character.allegiances}</p> : <p className="c-detail__info--text">{house.seat}</p>}
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <div className="c-detail__info">
                        {props.page === 'character' ? <h3>{t('GOT.appearances')}</h3> : <h3>Region</h3> }
                        <SimpleBar style={{ maxHeight: 150 }}>
                            {props.page === 'character' ? <p className="c-detail__info--text">{character.appearances}</p> : <p className="c-detail__info--text">{house.region}</p>}
                        </SimpleBar>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <div className="c-detail__info">
                        {props.page === 'character' ? <h3>{t('GOT.father')}</h3> : <h3>{t('GOT.allegiances')}</h3>}        
                        {props.page === 'character' ? <p className="c-detail__info--text">{character.father}</p> : <p className="c-detail__info--text">{house.allegiance}</p>}
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <div className="c-detail__info">
                        {props.page === 'character' ?  <h3>{t('GOT.siblings')}</h3> : <h3>{t('GOT.regions')}</h3>}
                        {props.page === 'character' ? <p className="c-detail__info--text">{character.siblings}</p> : <p className="c-detail__info--text">{house.region}</p> }
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <div className="c-detail__info">
                        {props.page === 'character' ? <h3>{t('GOT.titles')}</h3> : <h3>{t('GOT.establishment')}</h3> }
                        <SimpleBar style={{ maxHeight: 150 }}>
                            {props.page === 'character' ? <p className="c-detail__info--text">{character.titles}</p> : <p className="c-detail__info--text">{dateCreate}</p> }
                        </SimpleBar>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

