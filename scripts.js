$(document).ready(function () {

/* what holidays are already in September? */
    var holidays = [
        { 
            name : 'Ind Day',
            day : 16
        }, 
        { 
            name : 'Labor Day',
            day : 2
        }
    ];

/* add a new class to our table */
    
    var t = $('table');
    t.addClass('classy');


/*insert a new event into the calendar*/    
    function insertEvent (name, day) {
       if (name.length) {
           console.log('name is ' + name);
       } else {
           console.error('no name!');
           return;
       }
       
       console.log(day);
       
       if (day >0) {
           console.log('day is ' + day);
       } else {
           console.error('no day!');
           return;
       }
       
       
       var offset = 1;
       
       $($('td')[offset + (day - 1)]).append('<span class="event">' + name + '</span>')
        
       console.log($('#eventName').val());  
    }
    
    
    var btn = $('#submitter');
    
    btn.on('click', function(evt){
       evt.preventDefault(); 
       
       console.log('clicked button!'); 
       
       var name = $('#eventName').val();
       var day = $('[name="eventDay"]').val(); 
       
       insertEvent(name, day);
    });
    
    
/*insert holidays for the month*/
    $.each(holidays, function (index, dateObj) {
        insertEvent(dateObj.name, dateObj.day);
    });
    
    
/*Click the date and populate the new event field*/    
    $('td').on('click', function(event){
        console.log(event);
        
        var day = $(event.target).children('.date').text();
        
        console.log(day);
        $('[name="eventDay"]').val(day);
    });
    
    /*
    $('#eventName').on('keyup', function(event){
        console.log($(this).val());
    });
    */
    
});