


let hamburguesa = document.querySelector("#hamburguesa");
let creu = document.querySelector("#creu");
let nav_2 = document.querySelector("#nav-2");
let nav_22 = document.querySelector("#nav-22");

console.log(window.innerWidth);
if(window.innerWidth >= 1024){
window.addEventListener('scroll', function(){
	const feina1Text = document.querySelector("#feina1Text");
	const posicioObj1 = feina1Text.getBoundingClientRect().top - window.innerHeight / 2;
	
	const feina2Text = document.querySelector("#feina2Text");
	const posicioObj2 = feina2Text.getBoundingClientRect().top - window.innerHeight / 2;
	
	const feina3Text = document.querySelector("#feina3Text");
	const posicioObj3 = feina3Text.getBoundingClientRect().top - window.innerHeight / 2;
	
	const habilitats = document.querySelectorAll(".habilitatss");
	const serveis = document.querySelectorAll(".Coferiments");
	
	
	const feina1Text2 = document.querySelector("#feina1Text2");
	const posicioObj12 = feina1Text2.getBoundingClientRect().top - window.innerHeight / 2;
	
	const feina2Text2 = document.querySelector("#feina2Text2");
	const posicioObj22 = feina2Text2.getBoundingClientRect().top - window.innerHeight / 2;
	
	const feina3Text2 = document.querySelector("#feina3Text2");
	const posicioObj32 = feina3Text2.getBoundingClientRect().top - window.innerHeight / 2;
	
	const habilitats2 = document.querySelectorAll(".habilitatss2");
	const serveis2 = document.querySelectorAll(".Coferiments2");
	
	

	if(posicioObj1 <= 0){
	feina1Text.style.animationName = "feina1Text";
	feina1Text.style.animationDuration = "0.5s";
	feina1Text.style.animationFillMode = "forwards";
	}	
	
	if(posicioObj2 <= 0){
	feina2Text.style.animationName = "feina2Text";
	feina2Text.style.animationDuration = "0.5s";
	feina2Text.style.animationFillMode = "forwards";
	}	
	
	if(posicioObj3 <= 0){
	feina3Text.style.animationName = "feina3Text";
	feina3Text.style.animationDuration = "0.5s";
	feina3Text.style.animationFillMode = "forwards";
	}	
	
	
	if(posicioObj12 <= 0){
	feina1Text2.style.animationName = "feina1Text";
	feina1Text2.style.animationDuration = "0.5s";
	feina1Text2.style.animationFillMode = "forwards";
	}	
	
	if(posicioObj22 <= 0){
	feina2Text2.style.animationName = "feina2Text";
	feina2Text2.style.animationDuration = "0.5s";
	feina2Text2.style.animationFillMode = "forwards";
	}	
	
	if(posicioObj32 <= 0){
	feina3Text2.style.animationName = "feina3Text";
	feina3Text2.style.animationDuration = "0.5s";
	feina3Text2.style.animationFillMode = "forwards";
	}	
	
	
	
	habilitats.forEach(function (e) {
	const posicioHabilitats = e.getBoundingClientRect().top - window.innerHeight / 1.3;
	if(posicioHabilitats <= 0){
	e.style.animationName = "opacitat3";
	e.style.animationDuration = "0.5s";
	e.style.animationFillMode = "forwards";
	}
});


habilitats2.forEach(function (e) {
	const posicioHabilitats = e.getBoundingClientRect().top - window.innerHeight / 1.3;
	if(posicioHabilitats <= 0){
	e.style.animationName = "opacitat3";
	e.style.animationDuration = "0.5s";
	e.style.animationFillMode = "forwards";
	}
});


serveis.forEach(function (e) {
	const posicioServeis = e.getBoundingClientRect().top - window.innerHeight / 1.1;
	if(posicioServeis <= 0){
	e.style.animationName = "opacitat3";
	e.style.animationDuration = "0.5s";
	e.style.animationFillMode = "forwards";
	}
});


serveis2.forEach(function (e) {
	const posicioServeis = e.getBoundingClientRect().top - window.innerHeight / 1.1;
	if(posicioServeis <= 0){
	e.style.animationName = "opacitat3";
	e.style.animationDuration = "0.5s";
	e.style.animationFillMode = "forwards";
	}
});
	
	
})
}
const textJoc = document.querySelector(".textPremerJoc");
const textJoc2 = document.querySelector(".textPremerJoc2");
let angle = 0;
let b = true;

function opacitat(a){
	return Math.sin(a);
}

setInterval(function(){

if(b === true){
	angle++;
}
if(angle === 90){
b = false;
setTimeout(() => {
  b = true;
}, 1000);
}


textJoc.style.opacity = opacitat(angle * Math.PI / 180);
textJoc2.style.opacity = opacitat(angle * Math.PI / 180);

if(angle === 360){
	angle = 0;
}

},2)
	

	

hamburguesa.onclick = function(){
	hamburguesa.classList = "no";
	creu.classList = "si";
	nav_2.classList = "nav-2";
	quadre1.style.display = "none";
}

creu.onclick = function(){
	creu.classList = "no";
	hamburguesa.classList = "si";
	nav_2.classList = "no";
}

function enllacPulsat(){
	nav_2.classList = "no";
	creu.classList = "no";
	hamburguesa.classList = "si";
	quadre1.style.display = "none";
}




hamburguesa2.onclick = function(){
	hamburguesa2.classList = "no";
	creu2.classList = "si";
	nav_22.classList = "nav-2";
	quadre2.style.display = "none";
}

creu2.onclick = function(){
	creu2.classList = "no";
	hamburguesa2.classList = "si";
	nav_22.classList = "no";
}

function enllacPulsat2(){
	creu2.classList = "no";
	hamburguesa2.classList = "si";
	nav_22.classList = "no";
	quadre2.style.display = "none";
}



const quadre1 = document.querySelector("#quadreIdiomes1");
const quadre2 = document.querySelector("#quadreIdiomes2");

const catala1 = document.querySelector("#catala1");
const espanyol1 = document.querySelector("#espanyol1");
const catala2 = document.querySelector("#catala2");
const espanyol2 = document.querySelector("#espanyol2");

const llCatalana = document.querySelector(".llCatalana");
const llEspanyola = document.querySelector(".llEspanyola");

const botoIdiomes1 = document.querySelector("#idiomes1");
const botoIdiomes2 = document.querySelector("#idiomes2");


botoIdiomes1.onclick = function(){
	if(quadre1.style.display === "" && nav_2.classList.value === "no"){
		quadre1.style.display = "block";
	}
	
	else if(quadre1.style.display === "block"){
		quadre1.style.display = "none";
	}
	
	else if(quadre1.style.display === "none" && nav_2.classList.value === "no"){
		quadre1.style.display = "block";
	}
}

catala1.onclick = function(){
	quadre1.style.display = "none";
	llCatalana.style.display = "block";
	llEspanyola.style.display = "none";
}

espanyol1.onclick = function(){
	quadre1.style.display = "none";
	llCatalana.style.display = "none";
	llEspanyola.style.display = "block";
}




botoIdiomes2.onclick = function(){
	if(quadre2.style.display === "" && nav_22.classList.value === "no"){
		quadre2.style.display = "block";
	}
	
	else if(quadre2.style.display === "block"){
		quadre2.style.display = "none";
	}
	
	else if(quadre2.style.display === "none" && nav_22.classList.value === "no"){
		quadre2.style.display = "block";
	}
}


catala2.onclick = function(){
	quadre1.style.display = "none";
	llCatalana.style.display = "block";
	llEspanyola.style.display = "none";
}

espanyol2.onclick = function(){
	quadre1.style.display = "none";
	llCatalana.style.display = "none";
	llEspanyola.style.display = "block";
}
