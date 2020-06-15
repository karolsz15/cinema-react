import React, { Component } from "react";
import Slider from "react-slick";

class AutoPlay extends Component {
  render() {

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    
    return (
      <div style={{padding: '1em'}}>
        <Slider {...settings}>
          <div>
            <img src={this.props.poster1} alt="" />
          </div>
          <div>
            <img src={this.props.poster2} alt="" />
          </div>
          <div>
            <img src={this.props.poster3} alt="" />
          </div>
          <div>
            <img src={this.props.poster4} alt="" />
          </div>
          <div>
            <img src={this.props.poster5} alt="" />
          </div>
          <div>
            <img src={this.props.poster6} alt="" />
          </div>
          <div>
            <img src={this.props.poster7} alt="" />
          </div>
          <div>
            <img src={this.props.poster8} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
};

export default AutoPlay;