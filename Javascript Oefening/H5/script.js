whileLus();
getDocument();
forLus();

function whileLus(){
    var teller=10;
    while(teller>=0){
        var tekst= teller+" x "+10+" = "+parseInt(teller)*parseInt(10)+'<br />';
         document.getElementById('whileLusSom').innerHTML+=tekst;
         teller--;
    }
}
  
function forLus(){
    for(var i=10;i>=0;i--){
         document.getElementById('forLusSom').innerHTML+= i+" x "+10+" = "+parseInt(i)*parseInt(10)+'<br />';
    }
}
  
function getDocument(){
    for(var i in window.document){
        for( var i=0;i<10;i++){
                document.getElementById('nav').innerHTML+= 
                i +': ' + window.document[i] +'<br />'; 
        }
   }
}

function getNavigator(){
    for( var i in window.navigator){
        document.getElementById('nav').innerHTML+= 
            i +': ' + window.navigator[i] +'<br />';
    }  
}