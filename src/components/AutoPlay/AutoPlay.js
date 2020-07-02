import React, { Component } from "react";
import Slider from "react-slick";

class AutoPlay extends Component {
  
  render() {

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
    
    let posters = this.props.postersArray.map(el => (
      <div>
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
  }
};

export default AutoPlay;