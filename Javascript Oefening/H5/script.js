whileLus();
getDocument();
forLus();
var teller=0;
function whileLus(){
    var teller=10;
    while(teller>=0){
        var tekst= teller+" x "+10+" = "+parseInt(teller)*parseInt(10)+'<br />';
         document.getElementById('whileLusSom').innerHTML+=tekst;
         teller--;
    }
}
  var inp=document.getElementById('txt');
  inp.addEventListener('click',inptxt);
  function inptxt(){
    document.getElementById('test').innerHTML="fdgnhmtkj";
  }


  var txt=document.getElementById('inp2');
  inp.addEventListener('input',inp3);
  function inp3(){
    document.getElementById('inp1').innerHTML="fdgnhmtkj";
  }
function forLus(){
    for(var i=10;i>=0;i--){
         document.getElementById('forLusSom').innerHTML+= i+" x "+10+" = "+parseInt(i)*parseInt(10)+'<br />';
    }
}
  
function getDocument(){
    l:for(var teller=0; teller<=10;teller++){
        for(var i in window.document){
            document.getElementById('nav').innerHTML+= 
             i +': ' + window.document[i] +'<br />'; 
            teller++;
            if(teller>=10){
                break l;
            } 
       }
   }
}


function getNavigator(){
    for( var i in window.navigator){
        if(i.length<=10){
            document.getElementById('nav').innerHTML+= 
            i +': ' + window.navigator[i] +'<br />'; 
        }
       
    }  
}