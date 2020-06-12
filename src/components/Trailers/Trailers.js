import React, {Component} from 'react';
import SingleMovie from './SingleMovie/SingleMovie';

class Trailers extends Component {

    state ={
        showModal: false
    };

    renderModal = () => {
        this.setState({showModal: true})
    }

    render() {
        return(

            <React.Fragment>
    
            <div className="main">
                <div className="video-content">
                    <div className="top-header span_top">
                        <div className="logo">
                            <a href="/"><img src="images/logo4.png" alt="" /></a>
                            <p>Ticket booking app</p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="right-content">
                        <div className="right-content-heading">
                            <div className="right-content-heading-left">
                                <h3 className="head">Trailers of latest movies</h3>
                            </div>
                        </div>
                    </div>
        
                        {/* <div className="content-grids">
                            <div className="content-grid">
                                <a className="play-icon popup-with-zoom-anim" href="#small-dialog1"><img src="images/m11.jpg" title="allbum-name" /></a>
                                <h3>What truths about the past await Elsa as she ventures into the unknown to the enchanted forests and dark seas beyond Arendelle? </h3>
                                <a className="button play-icon popup-with-zoom-anim" href="#small-dialog1">Watch trailer</a>
                                <a className="button play-icon" href="/book">Book now</a>
                            </div>
                            <div id="small-dialog1" className="mfp-hide">
                                <iframe  src="https://www.youtube.com/embed/bwzLiQZDw2I" frameborder="0" allowfullscreen></iframe>
                            </div> */}

                    <SingleMovie />
                    <SingleMovie />
                    <SingleMovie />
                    <SingleMovie />
                    <SingleMovie />
        
                    </div>
                    </div>
                 
                    </React.Fragment>

        );
    };
};

export default Trailers;