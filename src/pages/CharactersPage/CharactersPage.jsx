import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Gallery from '../../shared/Gallery/Gallery';
import Menu from '../../core/menu/Menu';
import Traductor from '../../shared/Traductor/Traductor';
import Buscador from '../../shared/Buscador/Buscador';

let allCharacters = [];

export default function CharactersPage() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://api.got.show/api/show/characters/').then(res => {
            setCharacters(res.data);
            allCharacters = res.data;      
        })
    }, []);



    const fnFilterItems = (filterValues) => {
        const filteredChas = allCharacters.filter((cha) =>  cha.name.toLowerCase().includes(filterValues.name.toLowerCase() || filterValues.house.toLowerCase()));
        setCharacters(filteredChas);
    }    

    return (
            <>
            <Buscador fnFilterItems={fnFilterItems}></Buscador>
            <Traductor></Traductor>

            {/* <div className="lds-ring"> */}
            <Gallery items={characters}></Gallery>
            {/* </div> */}
            <Menu></Menu>
            </>
            
            
    )
}