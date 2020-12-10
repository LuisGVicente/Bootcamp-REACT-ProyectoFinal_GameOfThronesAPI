import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from '../../shared/Gallery/Gallery';


export default function HousesPage() {

    const [houses, setDataHouses] = useState([])

   useEffect(() => {
       axios.get('https://api.got.show/api/show/houses/').then(res => {
            setDataHouses(res.data)
       })
   }, []);

    return(
        <div>
            <Gallery items={houses}></Gallery>
        </div>
    )
}