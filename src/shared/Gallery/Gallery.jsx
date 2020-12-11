import React from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import './Gallery.scss';


export default function Gallery(props) {
    

    return (
        <div className="c-gallery ">
            <SimpleBar style={{ maxHeight: 500 }}>
            <div className="row">
                {props.items && props.items.map((item,index) => 
                <div className="col-12 col-sm-4 col-lg-2" key={index}>
                    <figure className="c-gallery__figure">
                        {item.image? <Link to={"characters/"+item.name}><img src={item.image} alt={item.name}/></Link> :
                        item.logoURL ? <Link to={"/houses/"+item.name}><img src={item.logoURL} alt={item.name}/></Link> : <Link to={"/houses/"+item.name}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStx4gMG-ooM9ta3v_6RJV-U30GEQsQSV4TUw&usqp=CAU" alt=""/></Link>}
                        {props.items? <figcaption>{item.name} from {item.house}</figcaption> : <figcaption>{item.name}</figcaption>}
                    </figure>
                </div>
                    )}
                </div>
            </SimpleBar>
        </div>
    )
}
