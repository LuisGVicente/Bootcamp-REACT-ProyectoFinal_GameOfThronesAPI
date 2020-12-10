import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Gallery from '../../shared/Gallery/Gallery';
import Menu from '../../core/menu/Menu';
import Traductor from '../../shared/Traductor/Traductor';
import Buscador from '../../shared/Buscador/Buscador';

let allHouses = [];

export default function HousesPage() {

    const [houses, setHouses] = useState([]);

    useEffect(() => {
        axios.get('https://api.got.show/api/show/houses/').then(res => {
            setHouses(res.data);
            allHouses = res.data;
        })      
    }, []);



    const filterItems = (filterValues) => {
        const filteredHouse = allHouses.filter((house) => house.name.toLowerCase().includes(filterValues.name.toLowerCase()));
        setHouses(filteredHouse);
    }    

    return (
            <>
            <Buscador fnFilterItems={filterItems}></Buscador>
            <Traductor></Traductor>
            {/* <div className="lds-ring"> */}
            <Gallery items={houses}></Gallery>
            {/* </div> */}
            <Menu></Menu>
            </>
            
            
    )
}