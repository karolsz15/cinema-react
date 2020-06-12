import React, { Component } from "react";
import Slider from "react-slick";

class AutoPlay extends Component {
  render() {

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <h3></h3>
        <Slider {...settings}>
          <div>
            <h3><img src="/images/r11.jpg" alt=""/></h3>
          </div>
          <div>
            <h3><img src="images/r12.jpg" alt=""/></h3>
          </div>
          <div>
            <h3><img src="images/r13.jpg" alt=""/></h3>
          </div>
          <div>
            <h3><img src="images/r14.jpg" alt=""/></h3>
          </div>
          <div>
            <h3><img src="images/r15.jpg" alt=""/></h3>
          </div>
          <div>
            <h3><img src="images/r16.jpg" alt=""/></h3>
          </div>
        </Slider>
      </div>
    );
  }
};

export default AutoPlay;