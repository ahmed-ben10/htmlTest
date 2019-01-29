//Zin();
// var getal1=prompt('Voer een getal in','Uw getal');
// var getal2=prompt('Voer een getal in','Uw getal');
// Opteller(getal1,getal2);
//ArrayFunctie();

function Zin(){
    var zin=prompt('Vul een zin in','uw zin')
    document.getElementById('zin').innerHTML=zin;    
}

function Opteller( getal1,getal2){
    som=parseInt(getal1)+parseInt(getal2);
    document.getElementById('opteller').innerHTML=getal1+"+"+getal2+"="+som;
}

function ArrayFunctie(){
    var myArray =['Piet','Kees','Klaas','Jan','Hendrik'];
    var naam=prompt('Voeg uw naam toe','uw Naam');
    myArray.push(naam);
    myArray.length;
    var tekst="";
    for(var i=0;i<myArray.length;i++){
        if(i==0||i==2||i==4){
            tekst=tekst+","+myArray[i];
        } 
        document.getElementById('arrayFunctie').innerHTML="Het eerste en derde element zijn:"+tekst+"<br> De lengte van de Array is:"+myArray.length+"<br> De array is gesorteerd en ziet er als volgt uit:"+myArray.sort()+"<br>De array is nu inde string vorm:"+myArray.toString();
        
    }
}



class Auto{
    constructor(merk,model,aantalDeuren,bouwjaar){
        this.merk=merk;
        this.model=model;
        this.aantalDeuren=aantalDeuren;
        this.bouwjaar=bouwjaar;
    }
}
var Mercedes=new Auto('Mercedes','500SL',5,2014);