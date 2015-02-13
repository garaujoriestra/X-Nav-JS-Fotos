function cambiar_imagen(){
	for (var i = 0; i <= 3; i++) {
		document.getElementById(i).style.display = "none";
	};
	var numero = Math.floor(Math.random()*4);
	document.getElementById(numero).style.display = "block";
}
