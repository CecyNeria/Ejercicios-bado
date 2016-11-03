// Pedirle al jugador su decisión
var resultado;
var jugador = prompt ("¿Cúal eliges: piedra, papel o tijeras?");
	jugador = jugador.toLowerCase();
console.log(jugador);

// Obtener un número random 1-3
var computadora = Math.ceil((Math.random()*3));

// Darle un juego a la computadora
console.log(computadora);
	if (computadora == 1){
		computadora = "piedra";
	}else if (computadora == 2){
		computadora = "papel";
	}else if (computadora == 3){
		computadora = "tijeras";
	}
console.log(computadora);
comparar(jugador, computadora);
alert("Computadora escogió: "+ computadora + ".\n" +
	"El jugador escogió: " + jugador + ".\n" +
	"Por lo tanto: " + resultado);
console.log("Computadora escogió: "+ computadora + ".\n" +
	"El jugador escogió: " + jugador + ".\n" +
	"Por lo tanto: " + resultado);

// Comparación de elecciones y su resultado
function comparar(jugador, computadora){
if(jugador === computadora){
	resultado = "¡Es un empate!";
	return resultado;
}
if(jugador === "piedra"){
	if(computadora === "tijeras"){
		resultado = "¡Piedra gana!";
		return resultado;
	} else {
		resultado = "¡Papel gana!";
		return resultado;
	}
}
if(jugador === "papel"){
	if(computadora === "piedra"){
		resultado = "¡Papel gana!";
		return resultado;
	} else {
		resultado = "¡Tijeras gana!";
		return resultado;
	}
}
if(jugador === "tijeras"){
	if(computadora === "papel"){
		resultado = "¡Tijeras gana!";
		return resultado;
	} else {
		resultado = "¡Piedra gana!";
		return resultado;
		}
  	}
} 