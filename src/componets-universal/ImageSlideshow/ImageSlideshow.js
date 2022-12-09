import React, {useRef,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAnglesRight,faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';







library.add(faAnglesRight,faAnglesLeft)


const ImageSlideshow = (props) => {

const Slideshow = useRef(null);
const next = () => {
 if(Slideshow.current.children.length > 0){

  console.log("next -->")
    const OneElement = Slideshow.current.children[0];

    Slideshow.current.style.transition= '500ms ease-out all';

    const sizeSlide = Slideshow.current.children[0].offsetWidth;

    Slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

    const transition = () => {
      
      Slideshow.current.style.transition = 'none';
      Slideshow.current.style.transform = `translateX(0)`

      Slideshow.current.appendChild(OneElement);

       Slideshow.current.removeEventListener('transitionend',transition)
    }

    Slideshow.current.addEventListener('transitionend',transition)
 }
}

const previous = () => {
  if (Slideshow.current.children.length > 0){
    console.log("previous <--")

    const index = Slideshow.current.children.length -1;
    const PreviousElement = Slideshow.current.children[index];

    Slideshow.current.insertBefore(PreviousElement,Slideshow.current.firstChild)
  
    Slideshow.current.style.transition = 'none';

    const size = Slideshow.current.children[0].offsetWidth;


    Slideshow.current.style.transform = `translateX(-${size}px)`;


    setTimeout ( () => {
      Slideshow.current.style.transition = '500ms ease-out all'

      Slideshow.current.style.transform = `translateX(0)`

 
    },30)


  }
 
}

useEffect (() => {
  const stopSladeshow = setInterval ( () => {
    next();
  },6000);

  Slideshow.current.addEventListener('mouseenter', () => {
    clearInterval(stopSladeshow);
  });
  

},[]);

  return (

    <SlideshowContainer>
      
        <SlideshowElement ref={Slideshow}>
          {/* props.children ermite haceder ala clase padre a children */}
             {props.children} 
        </SlideshowElement>

        <SlideshowButton>

          <Button onClick={previous} className='btn btn-left'>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </Button>
          
          <Button right onClick={next} >
            <FontAwesomeIcon icon={faAnglesRight} />
          </Button>

        </SlideshowButton>

    </SlideshowContainer>
  );

  
}

const SlideshowContainer = styled.div`
      position: relative;
`;

const SlideshowElement  = styled.div`
  display: flex;
	flex-wrap: nowrap;
`;


const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: .3s ease all;
	z-index: 10;
	/* max-height: 500px; */
	position: relative;

	img {
		width: 100%;
		vertical-align: top;
    border-radius:10px;
	}
`;

const SlideshowButton = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;

`;

const Button = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: .3s ease all;

	 @media screen and (min-width:768px){
    &:hover {
      background: rgba(0,0,0,.2);
      path {
        fill: #fff;
      }
   }
	} 

	path {
		filter: ${props => props.right ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
	}

	${props => props.right ? 'right: 0' : 'left: 0'}
`;


export {ImageSlideshow,Slide}


