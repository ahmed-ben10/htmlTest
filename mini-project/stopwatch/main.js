var timer =document.getElementById('timer');
var startBtn =document.getElementById('start');
var resetBtn =document.getElementById('reset');

var watch = new Stopwatch(timer);

startBtn.addEventListener('click', function(){
    if(watch.isOn){
        watch.stop();
        startBtn.textContent='Start';
    }
    else{
        watch.start();
        startBtn.textContent='Stop';
    }
});

resetBtn.addEventListener('click', function(){
    watch.reset();
});