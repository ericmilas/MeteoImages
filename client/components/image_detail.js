//Create our image list component
//Import React
import React from 'react';

//Create the component
const ImageDetail = (props) => {
    return (
        <li>
            <img src={props.image.link}/>
            {props.image.title}
        </li>
    );
};

export default ImageDetail;