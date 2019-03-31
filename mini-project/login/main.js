window.onload = function (){
    var loginData = [
        {
            username: "ahmed",
            password: "Benhajar"  
        },
        
        {
            username: "qwerty",
            password: "123"  
        },

        {
            username: "kip",
            password: "0000"  
        }
    ]

    document.getElementById("submit").addEventListener("click", function(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        for(var i=0; i<loginData.length; i++){
            if(username == loginData[i].username && password == loginData[i].password){
                console.log("login is successfully");
                document.getElementById("username").style.border=" 1px solid black";
                document.getElementById("password").style.border=" 1px solid black";
                return
            }
        }
        for(var i=0; i<loginData.length; i++){
            if(username != loginData[i].username){
                console.log("Wrong Username");
                document.getElementById("username").style.border=" 1px solid red";
                return  
            }
    
            if(password != loginData[i].password){
                console.log("Wrong password");  
                document.getElementById("password").style.border=" 1px solid red";

                return
            }
        }
    });
};