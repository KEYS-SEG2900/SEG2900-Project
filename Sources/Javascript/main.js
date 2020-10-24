function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


//CHANGES LOCK IN NAVBAR
function hover(word){
	word.setAttribute('src', '../Img/lockedP2.png')
}

function unhover(word){
	word.setAttribute('src', '../Img/locked3.png')
}

// Retain unlock position when on page: *Work In Progress*
var on_page=document.getElementsByTagName("body");

on_page.addEventListener("pageshow", keep_unlock());

/*
function keep_unlock(){
	alert("In Function");
	var class_lock=document.querySelector("img."+string(on_page.className));
	class_lock.src="../Img/locked3.png";
}*/

