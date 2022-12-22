import React from "react";
import {ImageSlideshow,Slide } from "../../../../componets-universal/ImageSlideshow/ImageSlideshow";


import dimension from "../../images/dimensions.jpeg"
import layout from "../../images/Layout.jpeg"
import lotsnumber from "../../images/lotsWithNumbers.jpeg"

import "./ImageSlideshowCactusAcresRayosDeSolSur.scss"


const ImageSlideshowCactusAcresRayosDeSolSur = () => {
  return (
    <div className="image-slideshow">
      <ImageSlideshow>
      <Slide >
        <img src={dimension} alt='' className="image"/>
      </Slide>

      <Slide>
        <img src={layout} alt='' className="image"/>
      </Slide>
      <Slide>
        <img src={lotsnumber} alt='' className="image"/>
        </Slide>
      </ImageSlideshow>
    
    </div>
  );
}

export default ImageSlideshowCactusAcresRayosDeSolSur;






