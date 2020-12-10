import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Gallery from '../../shared/Gallery/Gallery';
import Menu from '../../core/menu/Menu';
import Traductor from '../../shared/Traductor/Traductor';
import Buscador from '../../shared/Buscador/Buscador';
import LoadingContext from '../../shared/contexts/LoadingContext';
import Loading from '../../core/Loading/Loading';

let allCharacters = [];

export default function CharactersPage() {

    const [characters, setCharacters] = useState([]);

    const {setIsLoading} = useContext(LoadingContext);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://api.got.show/api/show/characters/').then(res => {
            setCharacters(res.data);
            allCharacters = res.data; 
            setIsLoading(false);     
        })
    },[]);



    const fnFilterItems = (filterValues) => {
        const filteredChas = allCharacters.filter((cha) =>  cha.name.toLowerCase().includes(filterValues.name.toLowerCase() || filterValues.house.toLowerCase()));
        setCharacters(filteredChas);
    }    

    return (
            <>
            <Buscador fnFilterItems={fnFilterItems}></Buscador>
            <Traductor></Traductor>
            <Loading></Loading>
            <Gallery items={characters}></Gallery>
            <Menu></Menu>
            </>
            
            
    )
}