var militaryTimeClock = document.getElementById('militaryTimeClock');
var AmPmClock = document.getElementById('AmPmClock');
var hexColor = document.getElementById('hexColor');

function hexCode(){
    let time = new Date;
    Hour = time.getHours();
    let hour = Hour.toString();
    let minutes = (time.getMinutes()).toString();
    let seconds = (time.getSeconds()).toString();

    if(hour.length < 2){
        hour = '0' + hour;
    }

    if(minutes.length < 2){
        minutes = '0' + minutes;
    }

    if(seconds.length < 2){
        seconds = '0' + seconds;
    }

    if(Hour > 11){
        
        if(Hour == 12){
            AmPmClock.textContent = Hour + ':' + minutes + ':' + seconds + ' PM';
        }
        else{

            if(Hour < 21){
                AmPmClock.textContent = '0' + (Hour - 12) + ':' + minutes + ':' + seconds + ' PM';
            }
            else{
                AmPmClock.textContent = (Hour - 12) + ':' + minutes + ':' + seconds + ' PM';
            }
        }
            
    }
    else{

        if(Hour > 9){
            AmPmClock.textContent = Hour + ':' + minutes + ':' + seconds + ' AM';
        }
        else{
            AmPmClock.textContent = '0' + Hour + ':' + minutes + ':' + seconds + ' AM';
        }
    }

    militaryTimeClock.textContent = hour + ':' + minutes + ':' + seconds;
    let hexColorValue = '#' + hour + minutes + seconds;

    hexColor.textContent = hexColorValue;
    
    document.body.style.backgroundColor = hexColorValue; 
}

hexCode();

setInterval(hexCode, 1000);