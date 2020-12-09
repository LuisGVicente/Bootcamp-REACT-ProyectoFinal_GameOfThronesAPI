import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './Gallery.scss';


export default function Gallery(props) {
    

    return (

        
        <div className="container">
        <SimpleBar style={{ maxHeight: 600 }}>
        <div className="row">
            {props.items && props.items.map((item,index) => 
            <div className="col-lg-2" key={index}>
                <figure  >
                    {item.image? <img src={item.image} alt=""/> : <img src={item.logoURL} alt=""/>}
                {props.items? <figcaption>{item.name} from {item.house}</figcaption> : <figcaption>{item.name}</figcaption>}
                </figure>
                </div>
            )}
            </div>
            </SimpleBar>
        </div>
    )
}
