var Botonlist= document.getElementById("listBoton");
var Boton2=document.getElementById('boton');


function desplegarBoton2 (){
	Botonlist.classList.add('desplegue');
};
function ocultarBoton2 (){
	Botonlist.classList.remove('desplegue');
};

Boton2.addEventListener("mouseover",desplegarBoton2,true);
Boton2.addEventListener("mouseout",ocultarBoton2,true);

var IconoMenuMovil = document.getElementById("menu");
var Logo = document.getElementById("Logo");
var Nav = document.getElementById("Nav");
var BotonesNav = document.getElementById("ulNav");

function desplegarmenu(){
	Nav.classList.add('desplegue');
	Logo.classList.add('ocultar');

};

IconoMenuMovil.addEventListener("click", desplegarmenu, true);