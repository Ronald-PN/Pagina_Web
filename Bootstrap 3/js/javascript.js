function validateForm() {
    var c = document.forms["myForm"]["nombree"].value;
    if (c == "") {
        alert("debe introducir letras validas al campo");
        return false;
    }
}

function myFunction() {
    var c, text;

   
    c = document.getElementById("numb").value;

 
    if (isNaN(c) || c < 1 || c > 10) {
        text = "Input incorrecto";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}