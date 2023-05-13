function login(){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if(user == "noobmaster69" && password == "papure"){
       window.location = "index2.html";
    }else{
        alert("Datos Incorrectos")
    }
}