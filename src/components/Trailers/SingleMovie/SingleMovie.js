import React, {Component} from 'react';
import MyModal from '../../UI/MyModal/MyModal';

class SingleMovie extends Component {

    state ={
        modalVisible: false
    }

    showModal =() => {
        this.setState({modalVisible: true})
    };

    hideModal = () => {
        this.setState({modalVisible: false})
    }

    render() {
        return (
            <React.Fragment>

                <MyModal show={this.state.modalVisible} onHide={this.hideModal} />

                <div className="content-grid">
                    <a className="play-icon popup-with-zoom-anim" href="#small-dialog3"><img src="images/m13.jpg" title="allbum-name" /></a>
                    <h3>When renowned crime novelist is found dead at his estate just after his 85th birthday, the detective is mysteriously enlisted to investigate.</h3>
                    <a onClick={this.showModal} className="button play-icon popup-with-zoom-anim" href="#small-dialog3">Watch trailer</a>
                    <a className="button play-icon" href="/book">Book now</a>
                </div>    
            </React.Fragment>
            
        );
    }
};

export default SingleMovie;