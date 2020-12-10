import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Gallery from '../../shared/Gallery/Gallery';
import Menu from '../../core/menu/Menu';
import Traductor from '../../shared/Traductor/Traductor';
import Buscador from '../../shared/Buscador/Buscador';

let allCharacters = [];
let allHouses = [];

let allCharacters = [];
let allHouses = [];

export default function GalleryPage(props) {

    const [characters, setCharacters] = useState([]);
    const [houses, setHouses] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.got.show/api/show/characters/').then(res => {
            setCharacters(res.data);
            allCharacters = res.data;
        axios.get('https://api.got.show/api/show/houses/').then(res => {
            setHouses(res.data);
            allHouses = res.data;
        })      
        })
    }, []);



    const filterItems = (filterValues) => {
        const filteredChas = allCharacters.filter((cha) =>  cha.name.toLowerCase().includes(filterValues.name.toLowerCase() || filterValues.house.toLowerCase()));
        setCharacters(filteredChas);
        const filteredHouse = allHouses.filter((house) => house.name.toLowerCase().includes(filterValues.name.toLowerCase()));
        setHouses(filteredHouse);
    }    

    return (
            <>
            <Buscador fnFilterItems={filterItems}></Buscador>
            <Traductor></Traductor>
            {/* {props.item === 'characters' ? <Buscador items={characters}></Buscador> : <Buscador items={houses}></Buscador>} */}
            {/* <div className="lds-ring"> */}
            {props.item === 'characters' ? <Gallery items={characters}></Gallery> : <Gallery items={houses}></Gallery>}
            {/* </div> */}
            <Menu></Menu>
            </>
            
            
    )
}
