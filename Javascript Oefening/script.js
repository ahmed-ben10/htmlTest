function toonPrompt(){
    var code =prompt("Voer uw code in","Uw code");
    var tekst= "Uw code is:"+code;
    document.getElementById("divResult").innerHTML= tekst;
}
//alert('Welkom');
function toonBrowesor(){
var tekst1="U gebruikt versie:"+ navigator.appVersion;
document.getElementById("divResult1").innerHTML=tekst1;    
}

function rekensom(){
    var getal1= prompt('vul getal in','getal 1');
    var getal2=  prompt('vul getal in','getal 2');
    if(getal1&&getal2==Number.isInteger){
        var som=parseInt(getal2)+parseInt(getal1);
    }
    
    else if(getal1&&getal2!=Number.isInteger){// extratje
        var som=parseFloat(getal2)+parseFloat(getal1);
    }
    else if(getal1!=Number.isInteger){// extratje
        var som=parseInt(getal2)+parseFloat(getal1);
    }
    
    else if(getal2!=Number.isSafeInteger){// extratje
        var som=parseFloat(getal2)+parseInt(getal1);
    }
   var tekst= getal1+"+"+getal2+"="+som;
    document.getElementById("som1").innerHTML= tekst+'<br>lengte:'+tekst.length;
   
}  alert("dit is een regel \n dit de tweede \t dit is een tab");
function stringFunctie(){
    var str1="Hallo mijn ";
    var str2="naam is ";
    var str3="Ahmed Benhajar.";
    var zin=str1+str2+str3;
    document.getElementById('stringZin').innerHTML=zin+"<br>lengte:"+zin.length+"<br>eerste karakter:"+zin.charAt(0)+"<br>5e karakter:"+zin.charAt(5)+"<br>10e karakter:"+zin.charAt(10)+"<br> eerste spatie op plek:"+zin.indexOf(" ");
}
function invoer(){
    var invoer=prompt("Voer een zin in","uw zin");
    document.getElementById('stringInvoer').innerHTML="Uw invoer:"+invoer+"<br> eerste spatie op plek:"+invoer.indexOf(" ");      
}