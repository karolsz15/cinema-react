$(document).ready(function () {
    
    var clientWS = io.connect();
    
    /* Bases */
    $("#ticket").hide();
    $("#hall").hide();
    
    $("#detail").hide();
    $("#summation").hide();
    $("#finishReservation").hide();
    
    //Validation
    var nameReg = /^[A-Za-zęóąśłżźćńĘÓĄŚŁŻŹĆŃ]+$/;
    var numberReg =  /^[0-9]{9}$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
    //Details
    $("#name").keyup(function () {
        if (!nameReg.test($("#name").val())) {
            $("#name").css('background-color','red');
        } else {
            $("#name").css('background-color','#333');
        }
    });
    
    $("#surname").keyup(function () { 
        if (!nameReg.test($("#surname").val())) {
            $("#surname").css('background-color','red');
        } else {
            $("#surname").css('background-color','#333');
        }
    });
    
    $("#email").keyup(function () {        
        if (!emailReg.test($("#email").val())) {
            $("#email").css('background-color','red');
        } else {
            $("#email").css('background-color','#333');
        }
    });
    
    $("#phone").keyup(function () {        
        if (!numberReg.test($("#phone").val())) {
            $("#phone").css('background-color','red');
        } else {
            $("#phone").css('background-color','#333');
        }
    });
    
    //* AJAX -get data about movies
    $.ajax({
      url: '/getmovies',
      type: 'POST',
      success: function (data) {
        $("#movie, #day, #hour").empty();
        $("#movie, #day, #hour").val("");

        $("#movie").append("<option selected disabled style='display:none;'>Choose movie</option>");
        $("#day").append("<option selected disabled style='display:none;'>Choose day</option>");
        $("#hour").append("<option selected disabled style='display:none;'>Choose hour</option>");

        //delete duplicates
        var arrayOfMoviesWithDuplicates = [];
        for (var i = 0; i < data.movies.length; i++) {
            arrayOfMoviesWithDuplicates.push(data.movies[i].name);
        };

        var arrayOfUniqueMovies = arrayOfMoviesWithDuplicates.filter(function(item, index, self) {
            return index == self.indexOf(item);
        });

        arrayOfUniqueMovies.sort(function(a, b){
            if(a > b) {
                return 1;
            }

            if(a < b) {
                return -1;
            }

            return 0;
        })
            
        for (var i = 0; i < arrayOfUniqueMovies.length; i++) {
            $("#movie").append("<option value='" + arrayOfUniqueMovies[i] + "'>" + arrayOfUniqueMovies[i] + "</option>");     
        }
          
        $("#movie, #day, #hour").change(enableSelection);
            checkBaseData();
        }
    });

    $("#movie").change(function () {
        $("#day, #hour").val("");
    });

    var numberOfHall = 0;
    
    $('#movie').change(function () {
        $.ajax({
          url: '/getdays',
          type: 'POST',
          data: {
            "movieName": $("#movie").val()
          },
          success: function (data) {
            $("#day, #hour").empty();
            $("#day, #hour").val("");

            $("#day").append("<option selected disabled style='display:none;'>Choose day</option>");
            $("#hour").append("<option selected disabled style='display:none;'>Choose hour</option>");
              
            //delete duplicates
            var arrayOfDaysWithDuplicates = [];
            for (var i = 0; i < data.days.length; i++) {
                arrayOfDaysWithDuplicates.push(data.days[i].day);
            };

            var arrayOfUniqueDays = arrayOfDaysWithDuplicates.filter(function(item, index, self) {
                return index == self.indexOf(item);
            });
              
            arrayOfUniqueDays.sort(function(a, b){
                if(a > b) {
                    return 1;
                }

                if(a < b) {
                    return -1;
                }
                
                return 0;
            })
              
            for (var i = 0; i < arrayOfUniqueDays.length; i++) {
                $("#day").append("<option value='" + arrayOfUniqueDays[i] + "'>" + arrayOfUniqueDays[i] + "</option>");     
            }
            
            numberOfHall = data.days[0].hall;
              
            $("#movie, #day, #hour").change(enableSelection);
            checkBaseData();
          }
        });
    });

    $('#day').change(function () {
        $.ajax({
          url: '/gethours',
          type: 'POST',
          data: {
            "movieName": $("#movie").val(),
            "movieDay": $("#day").val()
          },
          success: function (data) {
            $("#hour").empty();
            $("#hour").val("");

            $("#hour").append("<option selected disabled style='display:none;'>Choose hour</option>");
              
            //Delete duplicates
            var arrayOfHoursWithDuplicates = [];
            for (var i = 0; i < data.hours.length; i++) {
                arrayOfHoursWithDuplicates.push(data.hours[i].hour);
            };

            var arrayOfUniqueHours = arrayOfHoursWithDuplicates.filter(function(item, index, self) {
                return index == self.indexOf(item);
            });
              
            arrayOfUniqueHours.sort(function(a, b){
                if(a > b) {
                    return 1;
                }
                if(a < b) {
                    return -1;
                }
                return 0;
            })
          
            for (var i = 0; i < arrayOfUniqueHours.length; i++) {
                $("#hour").append("<option value='" + arrayOfUniqueHours[i] + "'>" + arrayOfUniqueHours[i] + "</option>");     
            }

            $("#movie, #day, #hour").change(enableSelection);
            checkBaseData();
          }
        });
    });

    $('#hour').change(function () {
        $("#movie, #day, #hour").change(enableSelection);
        checkBaseData();
        clearClickedSeat();
    });
    
    
    //Color of selected items
    function enableSelection() {
        var m = $("#movie").val();
        var d = $("#day").val();
        var h = $("#hour").val();
        
        $("#day, #hour").css('background-color', '#000000'); 
        $("#day, #hour").css('color', '#333333');
        
        if ($("#movie").val() !== null) {
            $("#day").css('background-color', '#333333'); 
            $("#day").css('color', '#dfb636');
        };
        
        if ($("#day").val() !== null) {
            $("#hour").css('background-color', '#333333'); 
            $("#hour").css('color', '#dfb636');
        };
    };
        
    var numberSeatsToReservation = 0;
    var tempNumberSeatsToReservation = 0;
    var clickedSeat = 0;
    var cost = 0;
    var seats = [];
    
    //Cost of tickets
    $("#normalTicket, #specialTicket").change(function() {
        var normal = $("#normalTicket").val();
        var special = $("#specialTicket").val();
        
        //Validation for number of tickets
        var numberOfTickets = 0;
        switch(numberOfHall) {
            case '1':
                numberOfTickets = 40;
                break;
            case '2':
                numberOfTickets = 72;
                break;
            case '3':
                numberOfTickets = 112;
                break;
            case '4':
                numberOfTickets = 160;
                break;
        }
        
        if (normal > numberOfTickets || normal < 0 
            || special > numberOfTickets || special < 0) {
            
            if (normal > numberOfTickets || normal < 0 ) {
                $("#normalTicket").val(0); 
                normal = $("#normalTicket").val();               
            }
            
            if (special > numberOfTickets || special < 0) {
                $("#specialTicket").val(0);    
                special = $("#specialTicket").val();                
            }
            
            cost = normal * 18 + special * 12;
            $("#money").text(cost);
            return;
        }

        cost = normal * 18 + special * 12;
        $("#money").text(cost);
        
        //case when:
        //user set number of tickets -> set his seats -> set LOWER number of tickets
        numberSeatsToReservation = parseFloat(normal) + parseFloat(special);
        if (tempNumberSeatsToReservation > numberSeatsToReservation) {
            removeAllReservationByUser();
        }
        
        if (tempNumberSeatsToReservation < numberSeatsToReservation) {
            $("#summation").slideDown(300);
            $("#summationList").slideUp(200);
            $("#finishReservation").slideUp(200);           
        }
        
        tempNumberSeatsToReservation = numberSeatsToReservation;
    });
    
    function removeAllReservationByUser() {
        for (var i = 0; i < seats.length; i++) {
            $("div [value='" + seats[i] + "']").css('background-color','#555');
            $("div [value='" + seats[i] + "']").css('color','#dfb636');
        }
        
        clearClickedSeat();
    }
    
    function clearClickedSeat() {
        var m = $("#movie").val();
        var d = $("#day").val();
        var h = $("#hour").val();
        
        //Websockets
        clientWS.emit('deleteAllTempSeats', m, d, h, seats); 
        
        clickedSeat = 0;  
        seats = [];
        
        $("#detail").slideUp(300);
        $("#summation").slideUp(300);
        $("#summationList").slideUp(200);
        $("#finishReservation").slideUp(200);
    };
    
    //Fill hall
    function checkBaseData() {
        var m = $("#movie").val();
        var d = $("#day").val();
        var h = $("#hour").val();
        
        
        if (m !== null && d !== null && h !== null) {            
            //number of hall for fill it seats
            var numberOfRows = 0;
            var numberOfSeatsInRow = 0;
                        
            if (numberOfHall == 1) {
                numberOfRows = 4;
                numberOfSeatsInRow = 10;
            }
            
            if (numberOfHall == 2) {
                numberOfRows = 6;
                numberOfSeatsInRow = 12;
            }
            
            if (numberOfHall == 3) {
                numberOfRows = 8;
                numberOfSeatsInRow = 14;
            }
            
            if (numberOfHall == 4) {
                numberOfRows = 10;
                numberOfSeatsInRow = 16;
            }
            
            var alfabet = ['A','B','C','D','E','F','G','H','I','J',
                           'K','L','M','N','O','P','Q','R','S','T',
                           'W','U','Z'];
            
            $("#hall").empty();
            $('#hall').append("<div class='screen'>Screen</div>");
            for (var k = 0; k <= numberOfRows; k++) {    
                var data = '';
                for (var j = 1; j <= numberOfSeatsInRow; j++) {
                    data += "<div value='" + j + alfabet[k] + "'>" + j + "</div>";
                };
                
                $("#hall").append("<div class='row'>" + data + "</div>");
                data = '';
            }
    
            $(".row div").click(changeColor);
            
            $("#newsBox").slideUp(100);
            $("#ticket").slideDown(200);
            $("#hall").slideDown(500);
            $("#hall").ready(function (){
                $.ajax({
                  url: '/getreservation',
                  type: 'POST',
                  data: {
                    "movieName": $("#movie").val(),
                    "movieDay": $("#day").val(),
                    "movieHour": $("#hour").val()
                  }
                  }).done (function (data) {
                    for (var i = 0; i < data.reservations.length; i++) {
//                        console.log(data.reservations[i].seat);
                        if (data.reservations[i].tempReservation == true) {
                            $('#hall div [value="' + data.reservations[i].seat + '"]').css('background-color', 'yellow');                  
                        } else {
                            $('#hall div [value="' + data.reservations[i].seat + '"]').css('background-color', 'red');
                        }
                    };
                    
                    console.log(data.txt);                    
                });
            });
            
            //get data about seat what is reserved
            if ($("#nameofuser").text() == "admin") {
                $("#hall .row div").mouseenter(function() {
                    var valueOfSeat = $(this).attr("value");

                    $.ajax({
                      url: '/getinformationaboutseat',
                      type: 'POST',
                      data: {
                        "movieName": $("#movie").val(),
                        "movieDay": $("#day").val(),
                        "movieHour": $("#hour").val(),
                        "seat": valueOfSeat
                      }
                      }).done (function (data) {
                        if (data.reservation.length > 0) {
                            $("#informationSeatBox").css('background-color','#FFF');
                            $("#informationSeatBox").empty();
                            $("#informationSeatBox").append("Information about seat: "
                                                            + "<br><b>Seat:</b> " 
                                                            + data.reservation[0].seat 
                                                            + "<br><b>Name:</b> " 
                                                            + data.reservation[0].name
                                                            + "<br><b>Surname:</b> " 
                                                            + data.reservation[0].surname
                                                            + "<br><b>E-Mail:</b> " 
                                                            + data.reservation[0].email
                                                            + "<br><b>Phone number:</b> " 
                                                            + data.reservation[0].phone
                                                           );

                        }                 
                    }); 
                });
            }
            
        } else {
            $("#hall").slideUp(500);            
        };
    };
    
    /* Hall */    
    function changeColor() {
        var m = $("#movie").val();
        var d = $("#day").val();
        var h = $("#hour").val();
        
        if ($(this).css('background-color') === 'rgb(255, 0, 0)') {
            alert("This seat is already reserved!");
            return;
        }
        
        if ($(this).css('background-color') === 'rgb(255, 255, 0)') {
            alert("This seat is already reserved!");
            return;
        }
        
        if ($(this).css('background-color') === 'rgb(85, 85, 85)') {
            if (numberSeatsToReservation > clickedSeat) {
                $(this).css('background-color', 'green');
                $(this).css('color', '#FFF');
                clickedSeat = ++clickedSeat;
                //change number of tickets in DB for data what were changed before like temporary reservation
                clientWS.emit('changeTicketsOfTempSeats', m, d, h, seats, clickedSeat);
                var thisValue = $(this).attr("value");
                seats.push(thisValue);
                
                //Websockets
                setTimeout(function () {
                    clientWS.emit('addTempSeat', m, d, h, seats, numberSeatsToReservation, clickedSeat, thisValue);
                }, 500); //problem with speed of database -> race of thread(?)
                
                $("#summationList").slideUp(200);
                $("#finishReservation").slideUp(200);
                $("#detail").slideDown(300);
                $("#summation").slideDown(300);
                checkSummation();
            } else {
                alert("Please set the number of tickets before you choose your seats.");
            }
        } else {
            $(this).css('background-color', '#555');
            $(this).css('color', '#dfb636');
            
            var thisValue = $(this).attr("value");
            seats = $.grep(seats, function(value) {
              return value != thisValue;
            });
            
            clickedSeat = --clickedSeat;
            if (clickedSeat == 0) {
                $("#detail").slideUp(300);
                $("#summation").slideUp(300);
            }
            
            if (clickedSeat < 0) {
                clickedSeat = 0;
            }
            
            //Websockets
            clientWS.emit('deleteTempSeat', m, d, h, thisValue);
            $("#summation").slideDown(200);
            $("#summationList").slideUp(200);
            $("#finishReservation").slideUp(200);
        };
    };
    
    $("#name, #surname, #email, #phone").keyup(checkSummation);
    $("#name, #surname, #email, #phone").keyup(checkFinishReservation);
    
    /* Validation of summary button */
    function checkSummation() {
        var n = $("#name").val();
        var s = $("#surname").val();
        var e = $("#email").val();
        var p = $("#phone").val();
        
        var nValidation = $("#name").css('background-color') != 'rgb(255, 0, 0)';
        var sValidation = $("#surname").css('background-color') != 'rgb(255, 0, 0)';
        var eValidation = $("#email").css('background-color') != 'rgb(255, 0, 0)';
        var pValidation = $("#phone").css('background-color') != 'rgb(255, 0, 0)';
                
        if (n !== "" && s !== "" && e !== "" && p !== ""
           && nValidation && sValidation && eValidation && pValidation) {
            $("#summation").css('background-color', '#dfb636');
            $("#summation").css('color', '#000');
            $("#summation").css('border-color', '#FFF');            
        } else {
            $("#summation").css('background-color', '#000');
            $("#summation").css('color', '#333');  
            $("#summation").css('border-color', '#333');                
        }
    };
    
    $("#summation").click(checkDetail);
    
    /* Summary reservation */
    function checkDetail() {
        if (clickedSeat == 0) {
            alert("Choose your seats!");
            return;
        };
        
        var nValidation = $("#name").css('background-color') != 'rgb(255, 0, 0)';
        var sValidation = $("#surname").css('background-color') != 'rgb(255, 0, 0)';
        var eValidation = $("#email").css('background-color') != 'rgb(255, 0, 0)';
        var pValidation = $("#phone").css('background-color') != 'rgb(255, 0, 0)';
        
        var name = $("#name").val();
        var surname = $("#surname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
         
        if (name !== "" && surname !== "" && email !== "" && phone !== ""
           && nValidation && sValidation && eValidation && pValidation) {
            $("#summation").css('background-color', '#dfb636');
            $("#summation").css('color', '#FFF');
            $("#summation").css('border-color', '#FFF');            
        } else {
            $("#summation").css('background-color', '#000');
            $("#summation").css('color', '#333');  
            $("#summation").css('border-color', '#333');                
        }
        
        if (name === "" || surname === "" || email === "" || phone === ""
           || !nValidation || !sValidation || !eValidation || !pValidation) {
            $("#summationList").slideUp(200);
            $("#finishReservation").slideUp(200);
            return;
        }
        $("#summation").slideUp(200);
        $("#summationList").slideDown(200);
        $("#finishReservation").slideDown(200);
        
        var m = $("#movie").val();
        var d = $("#day").val();
        var h = $("#hour").val();
        
        if (clickedSeat == numberSeatsToReservation) {
            $("#summationList").empty();
            $("#summationList").append("Movie: <span style='color: black'>" + m + ", " + d + ", " + h +
                             "</span><br/>User: <span style='color: black'>" + name + ", " + surname + ", " + email + ", " + phone +
                             "</span><br/>Number of tickets: <span style='color: black'>" + clickedSeat + " </span>Cost: <span style='color: black'>" + cost + "</span>"
                            );
        } else {
            $("#summationList").empty();
            $("#summationList").append("Movie: <span style='color: black'>" + m + ", " + d + ", " + h +
                             "</span><br/>User: <span style='color: black'>" + name + ", " + surname + ", " + email + ", " + phone +
                             "</span><br/>Number of tickets: <span style='color: black'>" + clickedSeat + " </span>(another then was declare by user on beggining of reservaton)"
                            );
        }
        checkFinishReservation();
    }; 
    
    $("#finishReservation").click(clickFinishReservation);
    
    //Validation FinisheReservation
    function checkFinishReservation() {
        var nValidation = $("#name").css('background-color') != 'rgb(255, 0, 0)';
        var sValidation = $("#surname").css('background-color') != 'rgb(255, 0, 0)';
        var eValidation = $("#email").css('background-color') != 'rgb(255, 0, 0)';
        var pValidation = $("#phone").css('background-color') != 'rgb(255, 0, 0)';
        
        var name = $("#name").val();
        var surname = $("#surname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        
        if (name !== "" && surname !== "" && email !== "" && phone !== ""
           && nValidation && sValidation && eValidation && pValidation) {
            $("#finishReservation").css('background-color', '#dfb636');
            $("#finishReservation").css('color', '#FFF');
            $("#finishReservation").css('border-color', '#FFF');    
            return true;
        } else {
            $("#finishReservation").css('background-color', '#000');
            $("#finishReservation").css('color', '#333');  
            $("#finishReservation").css('border-color', '#333'); 
            return false;
        }
    }
    
    function clickFinishReservation() {
        if (!checkFinishReservation()) {
            return;
        }
             
        var m = $("#movie").val();
        var d = $("#day").val();
        var h = $("#hour").val();
        var name = $("#name").val();
        var surname = $("#surname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        
        clientWS.emit('addStaticSeats', seats, m, d, h, name, surname, email, phone);
        
        $("#selection").slideUp(500);
        $("#hall").slideUp(500);
        $("#detail").slideUp(500);
        $("#summation").slideUp(500);
        $("#summationList").slideUp(500);
        setTimeout(
            function() {
            $("main").empty();
            $("main").append(`<div class="alert alert-success" role="alert">Booking was added! Please check your email box for the confirmation.</div>`);
        }, 500);
    };
    
    //Websockets - for all users
    clientWS.on('addTempSeatToEveryone', function(returnData, returnM, returnD, returnH) {
        var nowM = $("#movie").val();
        var nowD = $("#day").val();
        var nowH = $("#hour").val(); 
        
        if (nowM == returnM 
            && nowD == returnD 
            && nowH == returnH){
            $("#hall .row div[value='" + returnData.seat + "']").css('background-color', 'yellow');
        };
    });
    
    clientWS.on('deleteTempSeatToUser', function(seat, returnM, returnD, returnH) {
        $("#hall .row div[value='" + seat + "']").css('background-color', 'rgb(85, 85, 85)');
        $("#hall .row div[value='" + seat + "']").css('color', '#dfb636');
        clickedSeat = 0;        
    });
    
    clientWS.on('deleteTempSeatToEveryone', function(seat, returnM, returnD, returnH) {
        var nowM = $("#movie").val();
        var nowD = $("#day").val();
        var nowH = $("#hour").val(); 

        if (nowM == returnM 
            && nowD == returnD 
            && nowH == returnH){
            $("#hall .row div[value='" + seat + "']").css('background-color', 'rgb(85, 85, 85)');
            $("#hall .row div[value='" + seat + "']").css('color', '#dfb636');
        };
    });
    
    clientWS.on('deleteAllTempSeatToEveryone', function(seats, returnM, returnD, returnH) {
        var nowM = $("#movie").val();
        var nowD = $("#day").val();
        var nowH = $("#hour").val(); 

        if (nowM == returnM 
            && nowD == returnD 
            && nowH == returnH){
            for(var i = 0; i < seats.length; i++){
                $("#hall .row div[value='" + seats[i] + "']").css('background-color', 'rgb(85, 85, 85)');
                $("#hall .row div[value='" + seat + "']").css('color', '#dfb636');
            }
            
        };
    });
    
    clientWS.on('addStaticSeatsToEveryone', function(seats, returnM, returnD, returnH) {
        var nowM = $("#movie").val();
        var nowD = $("#day").val();
        var nowH = $("#hour").val(); 

        if (nowM == returnM 
            && nowD == returnD 
            && nowH == returnH){
            for(var i = 0; i < seats.length; i++){
                $("#hall .row div[value='" + seats[i] + "']").css('background-color', 'orange');
            }
            
        };
    });
});