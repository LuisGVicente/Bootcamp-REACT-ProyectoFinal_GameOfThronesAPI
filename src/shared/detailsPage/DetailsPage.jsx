import React, { useEffect } from 'react';
import axios from 'axios';
import PortadaPage from '../PortadaPage/PortadaPage';

export default function DetailsPage (){

    useEffect(() => {
        axios.get('https://api.got.show/api/show/characters/').then(res => {
            const house = res.data[0]
        })
    }, []);

    return (

        <div>
            <PortadaPage values={house}></PortadaPage>
        </div>
    )
}

