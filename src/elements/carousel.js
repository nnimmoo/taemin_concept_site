import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../style/carousel.css"
import youtube from "../assets/imgs/logos/youtube.png"


export default function Slideshow({props}) {

    return (
        <Carousel showArrows={true} showStatus={false} showThumbs={false} showIndicators={false} dynamicHeight={true} swipeable={true} autoplay={true} className='carousel'>
            <div>
                <img src={props && props.images[0] ? props.images[0] : "" } />

            </div>
            <div>
                <img src={props && props.images[1] ? props.images[1] : ""} />
            </div>

            <div>
                <img src={props && props.images[1] ? props.images[2] : ""} />
            </div>
            <div>
                <h1>{props && props.release ? props.release : ""}</h1>
                <p>{props && props.info ? props.info : ""}</p>
                <a href={props && props.link ? props.link : ""}>link</a>
            </div>
        </Carousel>
    );

}