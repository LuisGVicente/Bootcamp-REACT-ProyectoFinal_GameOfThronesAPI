import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Gallery from '../../shared/Gallery/Gallery';
import Menu from '../../core/menu/Menu';
import Traductor from '../../shared/Traductor/Traductor';
import Buscador from '../../shared/Buscador/Buscador';
import LoadingContext from '../../shared/contexts/LoadingContext';
import Loading from '../../core/Loading/Loading';

let allHouses = [];

export default function HousesPage() {

    const [houses, setHouses] = useState([]);

    const {setIsLoading} = useContext(LoadingContext);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://api.got.show/api/show/houses/').then(res => {
            setHouses(res.data);
            allHouses = res.data;
            setIsLoading(false);
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
            <Loading></Loading>
            <Gallery items={houses}></Gallery>
            <Menu></Menu>
            </>
            
            
    )
}