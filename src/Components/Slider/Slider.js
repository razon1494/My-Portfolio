import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Slider.css';

//react-bootstrap carousel
const Slider=({img}) => {
    return (
        <div className='container mb-5 mt-0'>
        <Carousel>
          {
            img.map(i =>
               <Carousel.Item>
    <img
      className="d-block w-100"
      src={i}
      alt="First slide"
    />

  </Carousel.Item>
              )
          }

</Carousel>

        </div>
    );
};

export default Slider;