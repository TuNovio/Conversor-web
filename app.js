//evento para la explresion de calcular
document.querySelector(".calculate").addEventListener("click", function(){
    document.getElementById("km").style.display="none";
    document.getElementById("calories").style.display="none";
    document.querySelector(".loader").style.display="block";
    setTimeout(steps_conv, 2000);
});
//evento para la expresion de limpiar
document.querySelector(".clear").addEventListener("click", clear);
//funcion par acalcular convertir
function steps_conv(){
    //declarar la variable para los pasos 
    const steps = document.getElementById('steps').value;
    //convertir a kilometros
    let index = (steps * 0.0008045).toFixed(2);
    //convertir de kilometros a calorias quemadas
    let index1 = (index * 55).toFixed(2);
    //para verificar 
    console.log("tus pasos son: " + index)
    console.log("Quemaste estas calorias: " + index1)

    //calidar si el espacio para digitar los pasos es igual a nada
    if(steps != 0){
        const km = document.getElementById("km");
        const calories= document.getElementById("calories");

        km.innerHTML = "km recorridos = " + index + "km";
        calories.innerHTML = "Calorias quemadas = " + index1 + "cal";

        document.getElementById("km").style.display = "block";
        document.getElementById("calories").style.display = "block";
        document.querySelector(".loader").style.display = "none";

	} else {
        error()
        function error(){
            document.getElementById("km").style.display = "block"
            document.getElementById("calories").style.display = "block"
            document.querySelector(".loader").style.display = "none"
            //mostrar mensaje de error
            document.getElementById("km").innerHTML = "<span style='color:black; background-color:pink; border-radious:10px; padding=3px;'>Error: ingrese el numero de pasos primero";
        }
    }
}
//metodo para limpiar las casillas
function clear(){
    document.getElementById("steps").value="";
    document.getElementById("km").value="";
    document.getElementById("calories").value="";
}
