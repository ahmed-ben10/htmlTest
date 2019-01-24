window.addEventListener('load',function (){
    alert('alles is in orde');
});

 
 function toonPrompt(){
    var code =prompt("Voer uw code in","Uw code"); 
    var tekst= "Uw code is:"+code;
    document.getElementById("divResult").innerHTML= tekst;
}

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
   
} 


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

function opteller(){
    var getal1 =prompt('Voer een getal in','Uw getal');
    var getal2 =prompt('Voer een getal in','Uw getal');   
    var som= parseInt(getal1)+parseInt(getal2); 
    som= getal1+"+"+getal2+"="+som;
    document.getElementById('optellerSom').innerHTML=som;
}

function grootstegetal(){
    var getal1 =prompt('Voer een getal in','Uw getal');
    var getal2 =prompt('Voer een getal in','Uw getal');  
    var getal1Boolean=(getal1>getal2);
    var getal2Boolean=(getal1<getal2);
    var gelijkBoolean=(getal1==getal2);
    var tekst= "De ingevoerde getallen zijn:"+getal1+"en"+getal2+"<br>Is het eerste getal groter dan het tweede getal?"+getal1Boolean+"<br>Is het eerste getal kleiner dan het tweede getal?"+getal2Boolean+"<br>Is het eerste getal gelijk aan dan het tweede getal?"+gelijkBoolean;
    document.getElementById('vergelijking').innerHTML=tekst;
}

function grootsteKleinste(){
    var getal1 =prompt('Voer een getal in','Uw getal');
    var getal2 =prompt('Voer een getal in','Uw getal');  
    var grootKlkein=(getal1>getal2)?'groter dan':(getal1==getal2)?'gelijk aan':'kleiner dan';
    var tekst= "De ingevoerde getallen zijn:"+getal1+"en"+getal2+"<br>"+getal1+" is "+grootKlkein+getal2;
    document.getElementById('vergelijking2').innerHTML=tekst;
}