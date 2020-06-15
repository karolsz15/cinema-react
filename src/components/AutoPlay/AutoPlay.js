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
            <h3><img src={this.props.poster1} alt=""/></h3>
          </div>
          <div>
            <h3><img src={this.props.poster2} alt=""/></h3>
          </div>
          <div>
            <h3><img src={this.props.poster3} alt=""/></h3>
          </div>
          <div>
            <h3><img src={this.props.poster4} alt=""/></h3>
          </div>
          <div>
            <h3><img src={this.props.poster5} alt=""/></h3>
          </div>
          <div>
            <h3><img src={this.props.poster6} alt=""/></h3>
          </div>
          <div>
            <h3><img src={this.props.poster7} alt=""/></h3>
          </div>
          <div>
            <h3><img src={this.props.poster8} alt=""/></h3>
          </div>
        </Slider>
      </div>
    );
  }
};

export default AutoPlay;