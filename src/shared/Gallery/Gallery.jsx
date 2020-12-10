import React from 'react';
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
                    {item.image? <img src={item.image} alt=""/> : item.logoURL ? <img src={item.logoURL} alt=""/> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStx4gMG-ooM9ta3v_6RJV-U30GEQsQSV4TUw&usqp=CAU" alt=""/>}
                {props.items? <figcaption>{item.name} from {item.house}</figcaption> : <figcaption>{item.name}</figcaption>}
                </figure>
                </div>
                )}
            </div>
        </SimpleBar>
        </div>
    )
}
