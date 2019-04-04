window.onload = function(){
    var loginData = [
        {
            firstname: "AdminName",
            lastname: "AdminLastname",
            username:"admin",
            password:"0000",
            email:  "test@email.com",
            adres:  "Jan hendriklaan 50",
            postcode:"2593HD",
            klantnummer:"13876",
            profielfoto:"images/userPhoto.png"//source code
        },

        {
            firstname: "Ahmed",
            lastname: "Ben",
            username:"achy",
            password:"ben",
            email:  "test@email.com",
            adres:  "Vislaan",
            postcode:"2587CH",
            klantnummer:"21764",
            profielfoto:"images/userPhoto.png"//source code
        },

        {
            firstname: "test",
            lastname: " 123lastname",
            username:"1",
            password:"2",
            email:  "test@email.com",
            adres:  "Wereldlaan",
            postcode:"2500AB",
            klantnummer:"32176",
            profielfoto:"images/userPhoto.png"//source code
        }
    ];
    var login = new Login();

    document.getElementById('submit').addEventListener("click",function(){
        login.checkLogin(loginData);
        console.log(loginData);
    });
    
};

class Login{
    constructor(){}
    
    checkLogin(loginData){
        this.loginData=loginData;
        var checkUsername= false;
        var checkPassword= false;
        var getUsername = document.getElementById('username').value;
        var getPassword = document.getElementById('password').value;

        for(var i=0; i<loginData.length;i++){
            if(getUsername == ""){
                document.getElementById('username').style.border="1px solid red";
            }

            if(getPassword == ""){
                document.getElementById('password').style.border="1px solid red";
            }

            if(loginData[i].username == getUsername){
                checkUsername= true;
            }

            if(loginData[i].password == getPassword){
                checkPassword= true;
            }

            if(checkPassword&&checkUsername){
                localStorage.setItem("i",i);
                localStorage.setItem("loginData",JSON.stringify(loginData))
                var link = "file:///C:/Users/ahmed/Documents/htmlTest/Javascript%20Oefening/javascriptClasses/userpage.html";
                window.location.assign("userpage.html");
                return false
            }
        }
    }
}


