(this.webpackJsonpcinemareact=this.webpackJsonpcinemareact||[]).push([[0],{39:function(e,t,a){e.exports={Lds:"Spinner_Lds__1UU7j","lds-ripple":"Spinner_lds-ripple__Hg51U"}},41:function(e,t,a){e.exports=a(85)},46:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(17),i=a.n(n),l=(a(46),a(7)),o=a(8),c=a(10),m=a(9),u=a(5),h=a(13),d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header",style:{background:"no-repeat top url(".concat(e.bigImage,")")}},r.a.createElement("div",{className:"top-header"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"images/logo4.png",alt:""})),r.a.createElement("p",null,"Ticket booking app")),r.a.createElement("div",{className:"clearfix"})),r.a.createElement("div",{className:"header-info"},r.a.createElement("h1",null,e.title),r.a.createElement("p",{className:"age"},e.cast),r.a.createElement("p",{className:"review reviewgo"},"Genre: ",e.genres," "),r.a.createElement("p",{className:"review"},"Release: ",e.release," "),r.a.createElement("p",{className:"special"}," ",e.summary," "),r.a.createElement("div",{className:"headerButtons"},r.a.createElement("div",{onClick:e.trailerClicked,className:"videoButton"},r.a.createElement("i",{className:"video1"}),"TRAILER"),r.a.createElement(h.b,{to:"/booking",className:"bookButton"},r.a.createElement("i",{className:"book1"}),"TICKET")))))},v=a(38),p=a.n(v),E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e={dots:!1,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,speed:2e3,autoplaySpeed:2e3,cssEase:"linear"};return r.a.createElement("div",{className:"sliderContainer",style:{padding:"1em"}},r.a.createElement(p.a,e,r.a.createElement("div",null,r.a.createElement("img",{src:this.props.poster1,alt:"",className:"sliderImage"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.poster2,alt:"",className:"sliderImage"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.poster3,alt:"",className:"sliderImage"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.poster4,alt:"",className:"sliderImage"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.poster5,alt:"",className:"sliderImage"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.poster6,alt:"",className:"sliderImage"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.poster7,alt:"",className:"sliderImage"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.poster8,alt:"",className:"sliderImage"}))))}}]),a}(s.Component),f=a(39),g=a.n(f),y=function(e){return r.a.createElement("div",{className:g.a.Lds},r.a.createElement("div",null),r.a.createElement("div",null))},b=a(14),k=a(21),w=function(e){return r.a.createElement(b.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement(b.a.Title,{id:"contained-modal-title-vcenter"},e.title)),r.a.createElement(b.a.Body,null,r.a.createElement("iframe",{src:e.trailer,title:e.title,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement(b.a.Footer,null,r.a.createElement(k.a,{onClick:e.onHide},"Close")))},N=(a(66),a(67),a(16)),S=a.n(N),j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={modalVisible:!1,error:!1,movies:null},e.showModal=function(){e.setState({modalVisible:!0})},e.hideModal=function(){e.setState({modalVisible:!1})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://karol-cinema.firebaseio.com/test.json").then((function(t){e.setState({movies:t.data}),console.log(t.data)})).catch((function(t){return e.setState({error:!0})}))}},{key:"render",value:function(){var e=this.state.error?r.a.createElement("p",null,"Movies can't be loaded"):r.a.createElement(y,null),t=this.state.error?r.a.createElement("p",null,"Posters can't be loaded"):r.a.createElement(y,null),a=this.state.error?r.a.createElement("p",null,"Trailer can't be loaded"):r.a.createElement(y,null);return this.state.movies&&(e=r.a.createElement(d,{bigImage:this.state.movies.two.bigImageUrl,title:this.state.movies.two.title,cast:this.state.movies.two.cast,release:this.state.movies.two.release,genres:this.state.movies.two.genres,summary:this.state.movies.two.summary,trailer:this.state.movies.two.trailerUrl,trailerClicked:this.showModal,hideModal:this.hideModal,showModal:this.state.showModal}),t=r.a.createElement(E,{poster1:this.state.movies.one.posterUrl,poster2:this.state.movies.two.posterUrl,poster3:this.state.movies.three.posterUrl,poster4:this.state.movies.four.posterUrl,poster5:this.state.movies.five.posterUrl,poster6:this.state.movies.six.posterUrl,poster7:this.state.movies.seven.posterUrl,poster8:this.state.movies.eight.posterUrl}),a=r.a.createElement(w,{show:this.state.modalVisible,title:this.state.movies.two.title,trailer:this.state.movies.two.trailerUrl,onHide:this.hideModal})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main"},a,e,t,r.a.createElement("div",{className:"news"},r.a.createElement("div",{className:"col-md-6 news-left-grid"},r.a.createElement("h3",null,"Book your ticket now!"),r.a.createElement("h2",null,"Book your ticket now!"),r.a.createElement("h4",null,"Book your ticket now!"),r.a.createElement(h.b,{to:"/booking"},r.a.createElement("i",{className:"book"}),"BOOK TICKET")),r.a.createElement("div",{className:"col-md-6 news-right-grid"},r.a.createElement("h3",null,"News"),r.a.createElement("div",{className:"news-grid"},r.a.createElement("h5",null,"Lorem Ipsum Dolor Sit Amet"),r.a.createElement("label",null,"June 15 2020"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.")),r.a.createElement("div",{className:"news-grid"},r.a.createElement("h5",null,"Lorem Ipsum Dolor Sit Amet"),r.a.createElement("label",null,"June 10 2020"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."))),r.a.createElement("div",{className:"clearfix"}))))}}]),a}(s.Component),U=function(e){return r.a.createElement("div",{className:"menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.c,{to:"/",exact:!0},r.a.createElement("div",{className:"home"},r.a.createElement("i",{className:"home"})))),r.a.createElement("li",null,r.a.createElement(h.c,{to:"/trailers"},r.a.createElement("div",{className:"video"},r.a.createElement("i",{className:"videos"}),r.a.createElement("i",{className:"videos1"})))),r.a.createElement("li",null,r.a.createElement(h.c,{to:"/booking"},r.a.createElement("div",{className:"bk"},r.a.createElement("i",{className:"booking"}),r.a.createElement("i",{className:"booking1"})))),r.a.createElement("li",null,r.a.createElement(h.c,{to:"/contact"},r.a.createElement("div",{className:"cnt"},r.a.createElement("i",{className:"contact"}),r.a.createElement("i",{className:"contact1"}))))))},C=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={modalVisible:!1},e.showModal=function(){e.setState({modalVisible:!0})},e.hideModal=function(){e.setState({modalVisible:!1})},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{show:this.state.modalVisible,onHide:this.hideModal,title:this.props.title,trailer:this.props.trailer}),r.a.createElement("div",{className:"content-grid"},r.a.createElement("div",{className:"play-icon"},r.a.createElement("img",{className:"trailerPoster",src:this.props.poster,alt:"movie poster"})),r.a.createElement("div",{className:"trailerDescription"},this.props.summary),r.a.createElement("a",{onClick:this.showModal,className:"button play-icon",href:"#small-dialog3"},"Watch trailer"),r.a.createElement("a",{className:"button play-icon",href:"/booking"},"Book now")))}}]),a}(s.Component),O=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,error:!1,movies:null},e.renderModal=function(){e.setState({showModal:!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://karol-cinema.firebaseio.com/test.json").then((function(t){e.setState({movies:t.data})})).catch((function(t){return e.setState({error:!0})}))}},{key:"render",value:function(){var e=this.state.error?r.a.createElement("p",null,"Ingredients cant be loaded"):r.a.createElement(y,null),t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:350,a=[];return e.length>t?(e.split(" ").reduce((function(e,s){return e+s.length<=t&&a.push(s),e+s.length}),0),"".concat(a.join(" ")," ...")):e};return this.state.movies&&(e=r.a.createElement("div",{className:"content-grids"},r.a.createElement(C,{title:this.state.movies.one.title,summary:t(this.state.movies.one.summary),poster:this.state.movies.one.posterUrl,trailer:this.state.movies.one.trailerUrl}),r.a.createElement(C,{title:this.state.movies.two.title,summary:t(this.state.movies.two.summary),poster:this.state.movies.two.posterUrl,trailer:this.state.movies.two.trailerUrl}),r.a.createElement(C,{title:this.state.movies.three.title,summary:t(this.state.movies.three.summary),poster:this.state.movies.three.posterUrl,trailer:this.state.movies.three.trailerUrl}),r.a.createElement(C,{title:this.state.movies.four.title,summary:t(this.state.movies.four.summary),poster:this.state.movies.four.posterUrl,trailer:this.state.movies.four.trailerUrl}),r.a.createElement(C,{title:this.state.movies.five.title,summary:t(this.state.movies.five.summary),poster:this.state.movies.five.posterUrl,trailer:this.state.movies.five.trailerUrl}),r.a.createElement(C,{title:this.state.movies.six.title,summary:t(this.state.movies.six.summary),poster:this.state.movies.six.posterUrl,trailer:this.state.movies.six.trailerUrl}),r.a.createElement(C,{title:this.state.movies.seven.title,summary:t(this.state.movies.seven.summary),poster:this.state.movies.seven.posterUrl,trailer:this.state.movies.seven.trailerUrl}),r.a.createElement(C,{title:this.state.movies.eight.title,summary:t(this.state.movies.eight.summary),poster:this.state.movies.eight.posterUrl,trailer:this.state.movies.eight.trailerUrl}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"video-content"},r.a.createElement("div",{className:"top-header span_top"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"images/logo4.png",alt:""})),r.a.createElement("p",null,"Ticket booking app")),r.a.createElement("div",{className:"clearfix"})),r.a.createElement("div",{className:"right-content"},r.a.createElement("div",{className:"right-content-heading"},r.a.createElement("div",{className:"right-content-heading-left"},r.a.createElement("h3",{className:"head"},"Trailers of latest movies")))),e)))}}]),a}(s.Component),M=function(e){return r.a.createElement("div",{class:"main"},r.a.createElement("div",{class:"contact-content"},r.a.createElement("div",{class:"logo"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"images/logo4.png",alt:""})),r.a.createElement("p",null,"Ticket booking app")),r.a.createElement("div",{class:"clearfix"})),r.a.createElement("div",{class:"contact-content"},r.a.createElement("div",{class:"main-contact"},r.a.createElement("h3",{class:"head"},"CONTACT"),r.a.createElement("p",null,"feel free to ask questions about reservations and the cinema"),r.a.createElement("div",{class:"contact_info"},r.a.createElement("form",null,r.a.createElement("div",{class:"col-md-6 contact-left"},r.a.createElement("input",{type:"text",placeholder:"Name",required:!0}),r.a.createElement("input",{type:"text",placeholder:"E-mail",required:!0}),r.a.createElement("input",{type:"text",placeholder:"Phone",required:!0})),r.a.createElement("div",{class:"col-md-6 contact-right"},r.a.createElement("textarea",{placeholder:"Message"}),r.a.createElement("input",{type:"submit",value:"SEND"})),r.a.createElement("div",{class:"clearfix"}))),r.a.createElement("div",{class:"contact_info"},r.a.createElement("h3",null,"Find Us Here"),r.a.createElement("div",{class:"map"},r.a.createElement("iframe",{title:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.321380879272!2d19.935162715717375!3d50.061542629423606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0e0789882b%3A0x3d71c4eb22dfdb51!2zUnluZWsgR8WCw7N3bnksIEtyYWvDs3c!5e0!3m2!1spl!2spl!4v1578239272803!5m2!1spl!2spl",width:"600",height:"450",frameborder:"0",allowfullscreen:""}))))))},x=a(19),D=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={day:e.props.day,hour:e.props.hour,title:e.props.title,activeSeats:[],reservedSeats:[],reservationName:null,reservationSurname:null,reservationEmail:null,reservationPhone:null,summaryVisible:!1,error:!1,booked:!1,bookable:!1},e.toggleActivatedSeat=function(t){if(e.state.activeSeats.includes(t)){var a=Object(x.a)(e.state.activeSeats);a=a.filter((function(e){return e!==t})),e.setState({activeSeats:a})}else{var s=Object(x.a)(e.state.activeSeats);s.push(t),e.setState({activeSeats:s})}},e.updateName=function(t){e.setState({reservationName:t})},e.updateSurname=function(t){e.setState({reservationSurname:t})},e.updateEmail=function(t){e.setState({reservationEmail:t})},e.updatePhone=function(t){e.setState({reservationPhone:t,bookable:!0})},e.showSummary=function(){e.setState({summaryVisible:!0})},e.bookingHandler=function(){var t=[].concat(Object(x.a)(e.state.reservedSeats),Object(x.a)(e.state.activeSeats)),a={seats:e.state.activeSeats,name:e.state.reservationName,surname:e.state.reservationSurname,email:e.state.reservationEmail,phone:e.state.reservationPhone};S.a.put("https://karol-cinema.firebaseio.com/reservations/".concat(e.state.day,"/").concat(e.state.hour,"/reservedSeats.json"),t).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),S.a.post("https://karol-cinema.firebaseio.com/reservations/".concat(e.state.day,"/").concat(e.state.hour,"/customersData.json"),a).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),e.setState({reservedSeats:t,booked:!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://karol-cinema.firebaseio.com/reservations/".concat(this.state.day,"/").concat(this.state.hour,"/reservedSeats.json")).then((function(t){null===t.data?e.setState({reservedSeats:[]}):e.setState({reservedSeats:t.data})})).catch((function(t){return e.setState({error:!0})}))}},{key:"render",value:function(){for(var e,t=this,a=[],s=function(e){var s=void 0;s=t.state.reservedSeats&&t.state.reservedSeats.includes(e)?"seat reserved":t.state.activeSeats.includes(e)?"seat active":"seat",a.push(r.a.createElement("div",{className:s,id:e,onClick:function(){return t.toggleActivatedSeat(e)}},e))},n=1;n<=100;n++)s(n);return e=0===this.state.activeSeats.length?r.a.createElement("div",null," Please choose your seats! "):this.state.booked?r.a.createElement("div",null," Your seats are sucessfully booked! "):!this.state.booked&&this.state.reservationName&&this.state.reservationSurname&&this.state.reservationEmail&&this.state.reservationPhone&&0!==this.state.activeSeats.length?r.a.createElement("div",null,r.a.createElement("strong",null,"Details of your booking"),r.a.createElement("br",null),"Seats: ",this.state.activeSeats.join(", ")," ",r.a.createElement("br",null),"Name: ",this.state.reservationName," ",r.a.createElement("br",null),"Surname: ",this.state.reservationSurname," ",r.a.createElement("br",null),"E-mail: ",this.state.reservationEmail," ",r.a.createElement("br",null),"Phone number: ",this.state.reservationPhone):r.a.createElement("div",null," Please fill the form correctly! "),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"selection",className:"selection"},r.a.createElement("div",{id:"screen",className:"screen"},"SCREEN"),r.a.createElement("div",{id:"seatsContainer",className:"seatsContainer"},a)),this.state.booked?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"bookingForm"},r.a.createElement("div",{id:"detail",className:"detail"},r.a.createElement("input",{id:"name",type:"text",placeholder:"name",onChange:function(e){return t.updateName(e.target.value)},required:!0}),r.a.createElement("input",{id:"surname",type:"text",placeholder:"surname",onChange:function(e){return t.updateSurname(e.target.value)},required:!0}),r.a.createElement("input",{id:"email",type:"email",placeholder:"e-mail",onChange:function(e){return t.updateEmail(e.target.value)},required:!0}),r.a.createElement("input",{id:"phone",type:"tel",placeholder:"phone",onChange:function(e){return t.updatePhone(e.target.value)},required:!0})),r.a.createElement("div",{className:"buttonsContainer"},r.a.createElement("button",{onClick:this.showSummary,className:"btn btn-secondary bookingButton"},"Summary"),r.a.createElement("input",{onClick:this.bookingHandler,disabled:!this.state.bookable,type:"submit",className:"btn btn-secondary bookingButton",value:"Book!"})))),this.state.summaryVisible?e:null)}}]),a}(s.Component),T=function(e){return String.prototype.Capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},r.a.createElement(b.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement(b.a.Title,{id:"contained-modal-title-vcenter"},"'",e.title,"' on ",e.day.Capitalize()," at ",e.hour)),r.a.createElement(b.a.Body,null,r.a.createElement("main",null,r.a.createElement(D,{day:e.day,hour:e.hour,title:e.title}))),r.a.createElement(b.a.Footer,null,r.a.createElement(k.a,{onClick:e.onHide},"Close")))},B=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"booking_object"},r.a.createElement("img",{src:e.poster,alt:"...",style:{margin:".5em"}}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{style:{margin:".5em"}},e.title),e.summary,r.a.createElement("div",null,r.a.createElement("a",{style:{margin:".5em"},onClick:e.clicked1,className:"btn btn-secondary",href:"#selection"},e.hour1),r.a.createElement("a",{style:{margin:".5em"},onClick:e.clicked2,className:"btn btn-secondary",href:"#selection"},e.hour2)))),r.a.createElement("hr",null))},I=function(e){var t=new Date,a=t.getDate(),s=t.getDay(),n=t.getMonth(),i=["sunday","monday","tuesday","wednesday","thursday","friday","saturday","sunday","monday","tuesday","wednesday","thursday","friday","saturday"];return String.prototype.Capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},r.a.createElement("select",{onChange:e.changed,defaultValue:i[s],className:"custom-select custom-select-lg",id:"day",name:"daySelection",style:{marginBottom:"1em"}},r.a.createElement("option",{value:i[s]},i[s].Capitalize()," ",a,".",n),[1,2,3,4,5,6].map((function(e){return r.a.createElement("option",{value:i[s+e],key:i[s+e]},i[s+e].Capitalize()," ",a+e,".",n)})))},A=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={modalVisible:!1,error:!1,movies:null,reservations:null,activeDay:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][(new Date).getDay()],hours:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"],activeHour:null,activeTitle:null},e.showModal=function(t,a){e.setState({modalVisible:!0,activeHour:t,activeTitle:a})},e.hideModal=function(){e.setState({modalVisible:!1})},e.changeActiveDay=function(t){e.setState({activeDay:t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://karol-cinema.firebaseio.com/test.json").then((function(t){e.setState({movies:t.data})})).catch((function(t){return e.setState({error:!0})})),S.a.get("https://karol-cinema.firebaseio.com/reservations.json").then((function(t){e.setState({reservations:t.data})})).catch((function(t){return e.setState({error:!0})}))}},{key:"render",value:function(){var e=this,t=null,a=null;return this.state.movies&&this.state.reservations?(t=r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{clicked1:function(){return e.showModal(e.state.hours[22],e.state.movies.one.title)},clicked2:function(){return e.showModal(e.state.hours[24],e.state.movies.one.title)},title:this.state.movies.one.title,summary:this.state.movies.one.summary,poster:this.state.movies.one.posterUrl,hour1:this.state.hours[22],hour2:this.state.hours[24]}),r.a.createElement(B,{clicked1:function(){return e.showModal(e.state.hours[11],e.state.movies.two.title)},clicked2:function(){return e.showModal(e.state.hours[13],e.state.movies.two.title)},title:this.state.movies.two.title,summary:this.state.movies.two.summary,poster:this.state.movies.two.posterUrl,hour1:this.state.hours[11],hour2:this.state.hours[13]}),r.a.createElement(B,{clicked1:function(){return e.showModal(e.state.hours[14],e.state.movies.three.title)},clicked2:function(){return e.showModal(e.state.hours[16],e.state.movies.three.title)},title:this.state.movies.three.title,summary:this.state.movies.three.summary,poster:this.state.movies.three.posterUrl,hour1:this.state.hours[14],hour2:this.state.hours[16]}),r.a.createElement(B,{clicked1:function(){return e.showModal(e.state.hours[15],e.state.movies.four.title)},clicked2:function(){return e.showModal(e.state.hours[17],e.state.movies.four.title)},title:this.state.movies.four.title,summary:this.state.movies.four.summary,poster:this.state.movies.four.posterUrl,hour1:this.state.hours[15],hour2:this.state.hours[17]}),r.a.createElement(B,{clicked1:function(){return e.showModal(e.state.hours[18],e.state.movies.five.title)},clicked2:function(){return e.showModal(e.state.hours[20],e.state.movies.five.title)},title:this.state.movies.five.title,summary:this.state.movies.five.summary,poster:this.state.movies.five.posterUrl,hour1:this.state.hours[18],hour2:this.state.hours[20]}),r.a.createElement(B,{clicked1:function(){return e.showModal(e.state.hours[19],e.state.movies.six.title)},clicked2:function(){return e.showModal(e.state.hours[21],e.state.movies.six.title)},title:this.state.movies.six.title,summary:this.state.movies.six.summary,poster:this.state.movies.six.posterUrl,hour1:this.state.hours[19],hour2:this.state.hours[21]}),r.a.createElement(B,{clicked1:function(){return e.showModal(e.state.hours[9],e.state.movies.seven.title)},clicked2:function(){return e.showModal(e.state.hours[10],e.state.movies.seven.title)},title:this.state.movies.seven.title,summary:this.state.movies.seven.summary,poster:this.state.movies.seven.posterUrl,hour1:this.state.hours[9],hour2:this.state.hours[10]}),r.a.createElement(B,{clicked1:function(){return e.showModal(e.state.hours[23],e.state.movies.eight.title)},clicked2:function(){return e.showModal(e.state.hours[12],e.state.movies.eight.title)},title:this.state.movies.eight.title,summary:this.state.movies.eight.summary,poster:this.state.movies.eight.posterUrl,hour1:this.state.hours[23],hour2:this.state.hours[12]})),a=r.a.createElement(T,{show:this.state.modalVisible,onHide:this.hideModal,title:this.state.activeTitle,day:this.state.activeDay,hour:this.state.activeHour,reservations:this.state.reservations})):t=r.a.createElement(y,null),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"error-content"},r.a.createElement("div",{className:"top-header span_top"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"index.html"},r.a.createElement("img",{src:"images/logo4.png",alt:""})),r.a.createElement("p",null,"Ticket booking app")),r.a.createElement("div",{className:"clearfix"})),r.a.createElement("div",{className:"container"},a,r.a.createElement(I,{changed:function(t){return e.changeActiveDay(t.target.value)}}),t))))}}]),a}(s.Component),V=function(e){return r.a.createElement("div",{class:"main"},r.a.createElement("div",{class:"contact-content"},r.a.createElement("div",{class:"logo"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"images/logo4.png",alt:""})),r.a.createElement("p",null,"Ticket booking app")),r.a.createElement("div",{class:"clearfix"})),r.a.createElement("div",{class:"contact-content"},r.a.createElement("div",{class:"main-contact"},r.a.createElement("h3",{class:"head"},"ERROR 404"),r.a.createElement("p",null,"page not found :(")," */}")))},F=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"full"},r.a.createElement(U,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:j}),r.a.createElement(u.a,{path:"/trailers",component:O}),r.a.createElement(u.a,{path:"/booking",component:A}),r.a.createElement(u.a,{path:"/contact",component:M}),r.a.createElement(u.a,{component:V}))))}}]),a}(s.Component),q=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(F,null))}}]),a}(s.Component),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(q,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");H?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):P(e)}))}}()}},[[41,1,2]]]);
//# sourceMappingURL=main.30e70033.chunk.js.map