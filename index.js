function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=="admin" && password=="manish"){
        alert("Login successfylly");
        return false;
    }
    else{
        alert("Login failed");
    }
}
