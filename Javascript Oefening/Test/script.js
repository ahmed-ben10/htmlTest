var naam;
var prijs;
var omschrijving;

function product( naam,omschrijving,prijs){
    this.naam=naam;
    this.prijs=prijs;
    this.omschrijving=omschrijving;

    document.getElementById('naam').innerHTML=naam;
    document.getElementById('omschrijving').innerHTML=omschrijving;
    document.getElementById('prijs').innerHTML="&euro;"+prijs+",-";

}