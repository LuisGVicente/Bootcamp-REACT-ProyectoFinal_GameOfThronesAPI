import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Gallery from '../../shared/Gallery/Gallery';
import Menu from '../../core/menu/Menu';
import Traductor from '../../shared/Traductor/Traductor';

export default function GalleryPage(props) {

    const [characters, setCharacters] = useState([]);
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        axios.get('https://api.got.show/api/show/characters/').then(res => {
            setCharacters(res.data);
        })
    }, []);

    useEffect(() => {
        axios.get('https://api.got.show/api/show/houses/').then(res => {
            setHouses(res.data);
        })
    }, []);

    return (
            <>
            
            <Traductor></Traductor>
            {props.item === 'characters' ? <Gallery items={characters}></Gallery> : <Gallery items={houses}></Gallery>}
            <Menu></Menu>
            
            </>
    )
}
