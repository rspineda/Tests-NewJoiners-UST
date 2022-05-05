import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard';

const ImageList = props => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} description={image.description}/>;
  });
  return <div className='image-list'>{images}{images.description}</div>;
}; 

export default ImageList;
