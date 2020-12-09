import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PortadaPage from '../PortadaPage/PortadaPage';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export default function DetailsPage (){
    
    const[house, setDataHouse] = useState([]);

    useEffect(() => {
        axios.get('https://api.got.show/api/show/characters/').then(res => {
            setDataHouse(res.data[5])
        })
    }, []);

    // console.log(house.house);
    return (

        <div className="">
            <PortadaPage values={house}></PortadaPage>
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-2">
                    <h3>Casa</h3>
                    <img src='https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101103142' alt={house.house} />
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <h3>Alianzas</h3>
                    <p>{house.allegiances}</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <h3>Apariciones</h3>
                    <SimpleBar style={{ maxHeight: 200 }}>
                        <p>{house.appearances}</p>
                    </SimpleBar>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <h3>Padre</h3>
                    <p>{house.father}</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <h3>Descendientes</h3>
                    <p>{house.siblings}</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <h3>Titulos</h3>
                    <p>{house.titles}</p>
                </div>
            </div>
        </div>
    )
}

