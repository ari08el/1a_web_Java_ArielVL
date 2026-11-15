let mensaje;
mensaje = "cambio de variable";

const mensaje2 = 50;
//const mensaje2 = 60;

//alert(mensaje)
//alert(mensaje2)

//comillas dentro de comillas
let ejemplo;
ejemplo = "hola 'que pasa' tio"

//alert(ejemplo)

//saltos de linea y comillas
var texto;
texto = "Esta página dice  \n \n ¡Hola mundo! \n Que fácil es incluir \`comillas simples\' \n \"y comillas dobles\"" 

//alert(texto)


function ver_edad(){
    var edad = document.getElementById(edad).Value;

    if (edad >= 18 ) {
        alert ("eres mayor de edad");
    }

    else {
        alert("Todavía eres menor de edad");
    } 
}