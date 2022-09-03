

function clockInit(){
    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');
 
    var d = new Date();
    var hh = d.getHours() * 30;
    var mm = d.getMinutes() * 6;
    var ss = d.getSeconds() * 6;
 
    hour.style.transform =`rotatez(${hh+(mm/12)}deg)`; 
    minute.style.transform =`rotatez(${mm}deg)`; 
    second.style.transform =`rotatez(${ss}deg)`; 
 
    
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var am = h >= 12 ? 'pm' : 'am';
    h = h > 12 ? h - 12 : h

    h = (h < 10) ? '0' + h : h;

    h = (h == '00') ? '12' : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    $('#dhour').html(h);
    $('#dminute').html(m);
    $('#dsecond').html(s);
    $('#ampm').html(am);




    
    var d = new Date();
          
    var date = d.getDate();
    
    var month = d.getMonth();
    var montharr =["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    month=montharr[month];
    
    var year = d.getFullYear();
    
    var day = d.getDay();
    var dayarr =["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
    day = dayarr[day];
   
    date = (date < 10) ? '0' + date : date;
    $('#date').html(date);
    $('#day').html(day);
    $('#month').html(month);
    $('#year').html(year);
 }
 
 window.onload = function() {
     // Load clockInit function
     clockInit();
     
     // Call clockInit function at 1 second interval
     setInterval(clockInit, 1000);
 };
 
 
 