import React from 'react';

import MyModal from '../UI/MyModal/MyModal';

const trailers = () => (
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

				<div className="content-grids">
					<div className="content-grid">
						<a className="play-icon popup-with-zoom-anim" href="#small-dialog1"><img src="images/m11.jpg" title="allbum-name" /></a>
						<h3>What truths about the past await Elsa as she ventures into the unknown to the enchanted forests and dark seas beyond Arendelle? </h3>
						<a className="button play-icon popup-with-zoom-anim" href="#small-dialog1">Watch trailer</a>
						<a className="button play-icon" href="/book">Book now</a>
					</div>

                    <MyModal show={true} />

					<div id="small-dialog1" className="mfp-hide">
						<iframe  src="https://www.youtube.com/embed/bwzLiQZDw2I" frameborder="0" allowfullscreen></iframe>
					</div>

					<div className="content-grid">
						<a className="play-icon popup-with-zoom-anim" href="#small-dialog2"><img src="images/m12.jpg" title="allbum-name" /></a>
						<h3>"Joker" centers around the iconic arch nemesis and is an original, standalone fictional story not seen before on the big screen. </h3>
						<a className="button play-icon popup-with-zoom-anim" href="#small-dialog2">Watch trailer</a>
						<a className="button play-icon" href="/book">Book now</a>
					</div>
					<div id="small-dialog2" className="mfp-hide">
						<iframe  src="https://www.youtube.com/embed/zAGVQLHvwOY" frameborder="0" allowfullscreen></iframe>
					</div>
					<div className="content-grid">
						<a className="play-icon popup-with-zoom-anim" href="#small-dialog3"><img src="images/m13.jpg" title="allbum-name" /></a>
						<h3>When renowned crime novelist is found dead at his estate just after his 85th birthday, the detective is mysteriously enlisted to investigate.</h3>
						<a className="button play-icon popup-with-zoom-anim" href="#small-dialog3">Watch trailer</a>
						<a className="button play-icon" href="/book">Book now</a>
					</div>
					<div id="small-dialog3" className="mfp-hide">
						<iframe  src="https://www.youtube.com/embed/xi-1NchUqMA" frameborder="0" allowfullscreen></iframe>
					</div>
					<div className="content-grid last-grid">
						<a className="play-icon popup-with-zoom-anim" href="#small-dialog4"><img src="images/m14.jpg" title="allbum-name" /></a>
						<h3>As the gang returns to Jumanji to rescue one of their own, they discover that nothing is as they expected.</h3>
						<a className="button play-icon popup-with-zoom-anim" href="#small-dialog4">Watch trailer</a>
						<a className="button play-icon" href="/book">Book now</a>
					</div>
					<div id="small-dialog4" className="mfp-hide">
						<iframe  src="https://www.youtube.com/embed/2QKg5SZ_35I" frameborder="0" allowfullscreen></iframe>
					</div>
					<div className="content-grid">
						<a className="play-icon popup-with-zoom-anim" href="#small-dialog5"><img src="images/m15.jpg" title="allbum-name" /></a>
						<h3>Following a threat of revenge by the revived Emperor Palpatine, Kylo Ren obtains a Sith wayfinder, leading him to the uncharted planet Exegol. </h3>
						<a className="button play-icon popup-with-zoom-anim" href="#small-dialog5">Watch trailer</a>
						<a className="button play-icon" href="/book">Book now</a>
					</div>
					<div id="small-dialog5" className="mfp-hide">
						<iframe  src="https://www.youtube.com/embed/8Qn_spdM5Zg" frameborder="0" allowfullscreen></iframe>
					</div>
					<div className="content-grid">
						<a className="play-icon popup-with-zoom-anim" href="#small-dialog6"><img src="images/m16.jpg" title="allbum-name" /></a>
						<h3>Universal Pictures and Working Title's Cats is a most-unexpected film adaptation of Andrew Lloyd Webber's beloved smash musical "Cats".</h3>
						<a className="button play-icon popup-with-zoom-anim" href="#small-dialog6">Watch trailer</a>
						<a className="button play-icon" href="/book">Book now</a>
					</div>
					<div id="small-dialog6" className="mfp-hide">
						<iframe  src="https://www.youtube.com/embed/FtSd844cI7U" frameborder="0" allowfullscreen></iframe>
					</div>

            </div>
            </div>
            </div>
 




            </React.Fragment>
);

export default trailers;