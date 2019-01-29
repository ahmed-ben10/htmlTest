whileLus();
function whileLus(){
    var teller=0;
    while(teller<=10){
        var tekst= teller+" X "+10+" = "+parseInt(teller)*parseInt(10)+'<br />';
         document.getElementById('whileLus').innerHTML+=tekst;
         teller++;
    }
    navigator();
function navigator(){
    for( var i in window.navigator){
        document.getElementById('nav').innerHTML+= 
            i +': ' + window.navigator[i] +'<br />';
    }
   
}
   
}