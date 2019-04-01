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
            username: "1",
            password: "2"  
        }
    ]
        checkUsername= false;
        checkPassword= false;
        document.getElementById("submit").addEventListener("click", function(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        for(var i=0; i<loginData.length; i++){
            if(username == ""){
                document.getElementById("username").style.border=" 1px solid red";
            }

            if(password == ""){
                document.getElementById("password").style.border=" 1px solid red";
            }

            if(username == loginData[i].username){
                var checkUsername=true;
                document.getElementById("username").style.border=" 1px solid black";
            }

            else{
                console.log("Wrong Username");
                document.getElementById("username").style.border=" 1px solid red";  
            }

            if(password == loginData[i].password){
                checkPassword= true;
                document.getElementById("password").style.border=" 1px solid black";
            }

            else{
                console.log("Wrong password");  
                document.getElementById("password").style.border=" 1px solid red";
            }

            if(checkPassword&&checkUsername){
                console.log("login is succesfuly!")
                document.getElementById("message").style.display="block";
                return
            }
        }
    });
};