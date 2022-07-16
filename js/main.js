(function(){
    let myTody = ['Sunday' , 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let month = ['January' , 
                 'February',
                 'March',
                 'April',
                 'May',
                 'June',
                 'July',
                 "August",
                 'September',
                 'October',
                 'November',
                 'December']
    
    function getDays(){
    
        let day = new Date();
        let days = (myTody[day.getDay()] + ", " + day.getDate() + " " + month[day.getMonth()] + " "+ day.getFullYear());
        document.getElementById('today').innerHTML = days ;
    }
    getDays();
})();

let closeBtn = document.getElementById('closeBtn');
let openBtn = document.getElementById('openBtn');
let hideNavbarb = document.getElementById('hideNavbar');

function closeNavebar(){
    hideNavbarb.style.transform = "scaleX(0)";
    closeBtn.style.transform  = 'scaleX(0)';
    openBtn.style.transform   = 'scaleX(1)';
}

function openNavebar()
{
    hideNavbarb.style.transform = "scaleX(1)";
    closeBtn.style.transform  = 'scaleX(1)';
    openBtn.style.transform   = 'scaleX(0)';
}



let myDemo = document.getElementById('info');

document.body.addEventListener('mousemove',function(e){
      
    myDemo.style.left = `${e.clientX}px` ;
    myDemo.style.top = `${e.clientY}px` ;
})