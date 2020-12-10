import React from 'react';
import { Link } from 'react-router-dom';


export default function Gallery(props) {
    

    return (
        <div className="container">
            <div className="row">
                {props.items && props.items.map((item,index) =>
                <div className="col-12 col-sm-4 col-lg-2" key={index}>
                    {/* {item.actor === undefined ? <Link to={"/houses/"+item.name}>: <Link to={"/characters/"+item.name}> } */}
                    <Link to={"/characters/"+item.name} >
                        <figure className="c-figure">
                            {item.image? <img src={item.image} alt={item.name}/> : <img src={item.logoURL} alt={item.name}/>}
                            {props.items? <figcaption>{item.name} from {item.house}</figcaption> : <figcaption>{item.name}</figcaption>}
                        </figure>
                    </Link>
                </div>
                )}
            </div>
        </div>
    )
}
