function validar(){
    var nombre, apellido, cedula, tarjeta, clave;
   
    nombre=document.getElementById("nombre").value;
    apellido=document.getElementById("apellido").value;
    cedula=document.getElementById("cedula").value;
    tarjeta=document.getElementById("tarjeta").value;
    clave=document.getElementById("clave").value;

    if(nombre==="" || apellido==="" || cedula==="" || tarjeta==="" || clave===""){
      alert("Todos los campos son obligatorios")
        return false;
        
    }
    
}
