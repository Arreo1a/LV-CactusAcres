import React from "react";
import {ImageSlideshow,Slide } from "../../../../componets-universal/ImageSlideshow/ImageSlideshow";

import imgcero from "../../images/c-1.jpg"
import imgone from  "../../images/c-2.jpg"
import imgtwo from "../../images/c-3.jpg"
import imgthree from  "../../images/c-4.jpg"
import imgfour from  "../../images/c-5.jpg"
import imgsfive from  "../../images/c-6.jpg"
import imgsix from  "../../images/c-7.jpg"


import "./ImageSlideshow.scss"


const ImageSlideshowCactusAcres = () => {
  return (
    <div className="image-slideshow">
      <ImageSlideshow>
      <Slide >
        <img src={imgcero} alt=''/>
      </Slide>

      <Slide>
        <img src={imgone} alt=''/>
      </Slide>
      <Slide>
        <img src={imgtwo} alt=''/>
        </Slide>

      <Slide>
        <img src={imgthree} alt=''/>
      </Slide>

      <Slide>
        <img src={imgfour} alt=''/>
      </Slide>

      <Slide>
        <img src={imgsfive} alt=''/>
      </Slide>

      <Slide>
        <img src={imgsix} alt=''/>
      </Slide>
      </ImageSlideshow>
    
    </div>
  );
}

export default ImageSlideshowCactusAcres;



