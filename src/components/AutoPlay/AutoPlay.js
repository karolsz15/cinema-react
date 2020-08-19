import React from "react";
import Slider from "react-slick";
import PropTypes from 'prop-types';

const AutoPlay = props => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
    
  const posters = props.postersArray.map(el => (
    <div key={el}>
      <img src={el} alt="movie poster" className="sliderImage" />
    </div>
  ));

  return (
    <div className="sliderContainer" style={{padding: '1em'}}>
      <Slider {...settings}>
        {posters}
      </Slider>
    </div>
  );
};

AutoPlay.propTypes = {
  postersArray: PropTypes.arrayOf(PropTypes.string)
}

export default AutoPlay;