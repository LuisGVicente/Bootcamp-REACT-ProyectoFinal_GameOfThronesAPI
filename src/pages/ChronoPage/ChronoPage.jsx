import React, { useEffect, useState } from 'react'
import Menu from '../../core/menu/Menu'
import Traductor from '../../shared/Traductor/Traductor'
import LoadingContext from '../../shared/contexts/LoadingContext';
import Loading from '../../core/Loading/Loading';
import axios from 'axios';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


export default function ChronoPage(props) {
    
    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        axios.get('https://api.got.show/api/show/characters/').then(res => {
            setCharacters(res.data);
            console.log(res.data);
       
        })
    },[]);

    return (
        <>
            <Traductor></Traductor>
            <div className="container ">
        <SimpleBar style={{ maxHeight: 400 }}>
        <div className="row">
            {characters.map((item,index) => 
            <div className="col-lg-2" key={index}>
            {item.age ? <p>{item.age.age}</p> : <p>?</p>}
            <figcaption>{item.name}</figcaption>
                <figure  >
                    {item.image? <img src={item.image} alt={item.name}/> :
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStx4gMG-ooM9ta3v_6RJV-U30GEQsQSV4TUw&usqp=CAU" alt=""/>}
                    
                </figure>
                </div>
                )}
            </div>
        </SimpleBar>
        </div>
            <Menu></Menu>
        </>
    )
}
