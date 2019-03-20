function Stopwatch(timeElem){
    var time=0;
    var interval;
    var offset;

    function update(){
        if(this.isOn){
            time+=delta();
        }
        
        var formattedTime= timeFormatter(time);
        console.log(formattedTime);
        timeElem.textContent = formattedTime;
    }

    function delta(){
        var now =Date.now();
        var timePassed = now-offset;
        offset=now;
        return timePassed;
    }

    function timeFormatter(timeInMilliseconds){
        var time = new Date(timeInMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds= time.getMilliseconds().toString();

        if(minutes.length<2){
            minutes = '0'+minutes;
        }

        if(seconds.length<2){
            seconds = '0'+seconds;
        }
        while (milliseconds.length<3){
            milliseconds = '0'+milliseconds;
        }
        return minutes+" : "+seconds+" : "+milliseconds;
    }


    this.isOn=false;
    this.start = function() {
        if(!this.isOn){
            interval= setInterval(update.bind(this),0.1);//bind gedaan omdat this. nu window is.// Met bind zeg ik dat update this is
            offset= Date.now();
            this.isOn=true;
        }
    };
    this.stop = function( ){
        if(this.isOn){
            clearInterval(interval);
            interval=null;
            this.isOn=false;
        }
    };
    this.reset = function() {
        if(!this.isOn){
            time=0;
            update();
        }
    };  
}

var watch = new Stopwatch();
watch.start();
watch.stop();
watch.reset();


//zonder this te geven aan een ding in function dan is het alleen local met this.... dan kan hij gebruikt worden buiten function