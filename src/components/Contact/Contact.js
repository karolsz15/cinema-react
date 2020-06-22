import React from 'react';

const contact = props => (

    <div class="main">

        <div class="contact-content">
			<div class="logo">
				<a href="/"><img src="images/logo4.png" alt="" /></a>
				<p>Ticket booking app</p>
			</div>
			<div class="clearfix"></div>
		</div>

        <div class="contact-content">
            <div class="main-contact">
                <h3 class="head">CONTACT</h3>
                <p>feel free to ask questions about reservations and the cinema</p>
                <div class="contact_info">
                    <form>
                        <div class="col-md-6 contact-left">
                            <input type="text" placeholder="Name" required/>
                            <input type="text" placeholder="E-mail" required/>
                            <input type="text" placeholder="Phone" required/>
                        </div>
                        <div class="col-md-6 contact-right">
                            <textarea placeholder="Message"></textarea>
                            <input type="submit" value="SEND"/>
                        </div>
                        <div class="clearfix"></div>
                    </form>
                </div>
                <div class="contact_info">
                    <h3>Find Us Here</h3>
                    <div class="map">
                        <iframe 
                            title="map" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.321380879272!2d19.935162715717375!3d50.061542629423606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0e0789882b%3A0x3d71c4eb22dfdb51!2zUnluZWsgR8WCw7N3bnksIEtyYWvDs3c!5e0!3m2!1spl!2spl!4v1578239272803!5m2!1spl!2spl"
                            width="600" 
                            height="450" 
                            frameborder="0" 
                            allowfullscreen="">
                         </iframe>
                    </div>
            </div>
        </div>
    </div>
</div>

);

export default contact;