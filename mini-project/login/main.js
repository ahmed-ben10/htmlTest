window.onload = function (){
    var loginData = [
        {
            username: "ahmed",
            password: "Benhajar",  
            email:     "ahmed-ben10@hotmail.nl"
        },
        
        {
            username: "admin",
            password: "0000",
            email:     "admin0@hotmail.nl"  
        },

        {
            username: "1",
            password: "2",  
            email:     "default@hotmail.nl"
        }
    ]
        checkUsername= false;
        checkPassword= false;
        document.getElementById("submit").addEventListener("click", function(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        for(var i=0; i<loginData.length; i++){
            if(checkUsername == false||checkPassword == false){
                document.getElementById("message").style.display="none";
            }
            
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
                checkUsername= false;
                document.getElementById("username").style.border=" 1px solid red";  
            }

            if(password == loginData[i].password){
                checkPassword= true;
                document.getElementById("password").style.border=" 1px solid black";
            }

            else{
                console.log("Wrong password");  
                checkPassword= false;
                document.getElementById("password").style.border=" 1px solid red";
            }

            

            if(checkPassword&&checkUsername){
                console.log("login is succesfuly!")
                console.log(loginData);
                document.getElementById("message").style.display="block";
                return
            }
        }
    });

    document.getElementById("signup").addEventListener("click", function(){
        document.getElementById("login-container").style.display="none";
        document.getElementById("signup-container").style.display="block";
    });

    document.getElementById("signin").addEventListener("click", function(){
        document.getElementById("login-container").style.display="block";
        document.getElementById("signup-container").style.display="none";
    });
    
    document.getElementById("signupsubmit").addEventListener("click", function(){
        var username = document.getElementById("signupusername").value;
        var password = document.getElementById("signuppassword").value;
        var email = document.getElementById("email").value;
        if(username == ""){
            document.getElementById("signupusername").style.border=" 1px solid red";
        }

        if(password == ""){
            document.getElementById("signuppassword").style.border=" 1px solid red";
        }

        if(email == ""){
            document.getElementById("email").style.border=" 1px solid red";
        }

        var newAccount ={
            username: username,
            password: password,
            email:    email  
        };
        loginData.push(newAccount);

        
    });
};
