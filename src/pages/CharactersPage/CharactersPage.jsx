import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from '../../shared/Gallery/Gallery';

export default function CharactersPage() {

    const [characters, setDataCharacters] = useState([])

   useEffect(() => {
       axios.get('https://api.got.show/api/show/characters/').then(res => {
            setDataCharacters(res.data)
       })
   }, []);

    return(
        <div>
            <Gallery items={characters}></Gallery>
        </div>
    )
}