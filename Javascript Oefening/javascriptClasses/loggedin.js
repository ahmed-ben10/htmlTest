window.onload = function(){
    var i=localStorage.getItem("i");
    var loginData =JSON.parse( localStorage.getItem("loginData"));
    console.log(loginData);
    var userinfo = new Userinfo();
    userinfo.displayUserinfo(loginData,i);
};
class Userinfo{
    constructor(){}
    displayUserinfo(loginData,i){
        this.loginData=loginData;
        this.i=i;
        document.getElementById('username-display').innerHTML+=loginData[i].username;
        document.getElementById('userInfo-container').style.display="block";
        document.getElementById('loggedin-firstname').innerHTML=loginData[i].firstname;
        document.getElementById('loggedin-lastname').innerHTML=loginData[i].lastname;
        document.getElementById('loggedin-adres').innerHTML=loginData[i].adres;
        document.getElementById('loggedin-postcode').innerHTML=loginData[i].postcode;
        document.getElementById('loggedin-email').innerHTML=loginData[i].email;
        document.getElementById('loggedin-klantnummer').innerHTML=loginData[i].klantnummer;
    }
}