import React from 'react';

const booking = props => (
<div class="full">
    <div class="main">
		<div class="error-content">
			<div class="top-header span_top">
				<div class="logo">
					<a href="index.html"><img src="images/logo4.png" alt="" /></a>
					<p>Ticket booking app</p>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="container">
					{/* <!-- BOOKING SEATS --> */}
					<main>
						<div id="selection" class="selection">
							{/* <%= include parts/selection.ejs %>                     */}
						</div>
						<div id="ticket" class="ticket">
							{/* <%= include parts/ticket.ejs %> */}
						</div>
						<div id="hall" class="hall"></div>
						<div id="detail" class="detail">
							{/* <%= include parts/detail.ejs %>                     */}
						</div>
						<div id="summation" class="summation">Summary</div>
						<div id="summationList" class="summationList"></div>
						<div id="finishReservation" class="finishReservation">Book!</div>
					</main>
				{/* <!-- END OF BOOKING SEATS --> */}

				{/* <!-- MOVIES POSTERS AND HOURS --> */}
				  <div class="media">
					<img src="images/r11.jpg" class="mr-3" alt="..."></img>
					<div class="media-body">
					  <h5 class="mt-0">Frozen II</h5>
					  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					  <br />
					  <div class="mt-5">
					  <a class="btn btn-secondary" href="#selection">10:00</a>
					  <a class="btn btn-secondary" href="#selection">13:00</a>
					  </div>
					</div>
				  </div>
				  <hr/>

				  <div class="media">
					<img src="images/r12.jpg" class="mr-3" alt="..." />
					<div class="media-body">
					  <h5 class="mt-0">Joker</h5>
					  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					  <br />
					  <div class="mt-5">
					  <a class="btn btn-secondary" href="#selection">20:00</a>
					  <a class="btn btn-secondary" href="#selection">22:00</a>
					  </div>
					</div>
				  </div>
				  <hr/>

				  <div class="media">
					<img src="images/r13.jpg" class="mr-3" alt="..." />
					<div class="media-body">
					  <h5 class="mt-0">Knives Out</h5>
					  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					  <br />
					  <div class="mt-5">
					  <a class="btn btn-secondary" href="#selection">16:00</a>
					  <a class="btn btn-secondary" href="#selection">21:00</a>
					  </div>
					</div>
				  </div>
				  <hr/>

				  <div class="media">
					<img src="images/r14.jpg" class="mr-3" alt="..." />
					<div class="media-body">
					  <h5 class="mt-0">Jumanji: The next level</h5>
					  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					  <br />
					  <div class="mt-5">
                        <a class="btn btn-secondary" href="#selection">12:00</a>
                        <a class="btn btn-secondary" href="#selection">16:00</a>
                        <a class="btn btn-secondary" href="#selection">20:00</a>
                      </div>
                    </div>

				  <div class="media">
					<img src="images/r15.jpg" class="mr-3" alt="..." />
					<div class="media-body">
					  <h5 class="mt-0">Star Wars: The Rise of Skywalker</h5>
					  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					  <br />
					  <div class="mt-5">
                        <a class="btn btn-secondary" href="#selection">10:00</a>
                        <a class="btn btn-secondary" href="#selection">16:00</a>
                        <a class="btn btn-secondary" href="#selection">20:00</a>
					  </div>
					</div>
				  </div>
				  <hr/>

				  <div class="media">
					<img src="images/r16.jpg" class="mr-3" alt="..." />
					<div class="media-body">
					  <h5 class="mt-0">Cats</h5>
					  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					  <br />
					  <div class="mt-5">
                        <a class="btn btn-secondary" href="#selection">19:00</a>
                        <a class="btn btn-secondary" href="#selection">21:00</a>
					  </div>
					</div>
				  </div>
                </div>
            </div>
        </div>
    </div>    
</div>
);

export default booking;