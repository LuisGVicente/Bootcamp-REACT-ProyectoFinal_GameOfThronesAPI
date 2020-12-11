import React from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


export default function Gallery(props) {
    

    return (
        
        <div className="container ">
        <SimpleBar style={{ maxHeight: 400 }}>
        <div className="row">
            {props.items && props.items.map((item,index) => 
            <div className="col-lg-2" key={index}>
           
                <figure  >
                    {item.image? <Link to={"characters/"+item.name}><img src={item.image} alt=""/></Link> :
                     item.logoURL ? <Link to={"/houses/"+item.name}><img src={item.logoURL} alt=""/></Link> : <Link to={"/houses/"+item.name}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStx4gMG-ooM9ta3v_6RJV-U30GEQsQSV4TUw&usqp=CAU" alt=""/></Link>}
                {props.items? <figcaption>{item.name}</figcaption> : <figcaption>{item.name}</figcaption>}
                </figure>
                </div>
                )}
            </div>
        </SimpleBar>
        </div>
    )
}
