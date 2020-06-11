import React from 'react';

const homepage = props => (

    <div class="main">
        <div class="header">
            <div class="top-header">
                <div class="logo">
                    <a href="/"><img src="images/logo4.png" alt="" /></a>
                    <p>Ticket booking app</p>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="header-info">
                <h1>FROZEN II</h1>
                <p class="age"><a href="#">All Age</a> Jennifer Lee, Chris Buck </p>
                <p class="review">Rating	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;  8,5/10</p>
                <p class="review reviewgo">Genre	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp; Adventure, Animation, Family </p>
                <p class="review">Release &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; 22 November 2019</p>
                <p class="special">What truths about the past await Elsa as she ventures into the unknown to the enchanted forests and dark seas beyond Arendelle? Together with Anna, Kristoff, Olaf and Sven, she'll face a dangerous but remarkable journey.</p>
                <a class="video" href="#video"><i class="video1"></i>WATCH TRAILER</a>
                <a class="book" href="/book"><i class="book1"></i>BOOK TICKET</a>
            </div>
        </div>
        <div>EMPTY DIV FOR SOME SPACING (PICTURES ANIMATION HERE)</div>
    {/* <div class="review-slider">
        <li><img src="/images/r11.jpg" alt=""/></li>
        <li><img src="images/r12.jpg" alt=""/></li>
        <li><img src="images/r13.jpg" alt=""/></li>
        <li><img src="images/r14.jpg" alt=""/></li>
        <li><img src="images/r15.jpg" alt=""/></li>
        <li><img src="images/r16.jpg" alt=""/></li>
    </div> */}
    <div class="video" id="video">
        <iframe  src="https://www.youtube.com/embed/bwzLiQZDw2I" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="news">
        <div class="col-md-6 news-left-grid">
            <h3>Book your ticket now!</h3>
            <h2>Book your ticket now!</h2>
            <h4>Book your ticket now!</h4>
            <a href="/book"><i class="book"></i>BOOK TICKET</a>
        </div>
        <div class="col-md-6 news-right-grid">
            <h3>News</h3>
            <div class="news-grid">
                <h5>Lorem Ipsum Dolor Sit Amet</h5>
                <label>Jan 05 2020</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            </div>
            <div class="news-grid">
                <h5>Lorem Ipsum Dolor Sit Amet</h5>
                <label>Jan 01 2020</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            </div>
            <a class="more" href="#">MORE</a>
        </div>
        <div class="clearfix"></div>
    </div>
    <div>EMPTY DIV FOR SOME SPACING (PICTURES ANIMATION HERE)</div>
    {/* <div class="more-reviews">
        <li><img src="images/m11.jpg" alt=""/></li>
        <li><img src="images/m12.jpg" alt=""/></li>
        <li><img src="images/m13.jpg" alt=""/></li>
        <li><img src="images/m14.jpg" alt=""/></li>
        <li><img src="images/m15.jpg" alt=""/></li>
        <li><img src="images/m16.jpg" alt=""/></li>
    </div>	 */}
    </div>
);

export default homepage;