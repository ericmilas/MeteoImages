//Create our image list component
//Import React
import React from 'react';
import ImageDetail from "./image_detail";

const IMAGES = [
    {
        title: 'Pen',
        link: 'https://dummyimage.com/600x400'
    },
    {
        title: 'Pine Tree',
        link: 'https://dummyimage.com/600x400'
    },
    {
        title: 'Mug',
        link: 'https://dummyimage.com/600x400'
    }
];

//Create the component
const ImageList = () => {
    const RenderedImages = IMAGES.map((image) => {
        return <ImageDetail image={image}/>
    });

    return (
        <ul>
            {RenderedImages}
        </ul>
    );
};

//Export the component
export default ImageList;