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


//add-show
var slideIndex = 1;
slide(slideIndex);

function slide_mover(n) {
  slide(slideIndex += n);
}

function slide_num(n) {
  slide(slideIndex = n);
}

function slide(n) {
  var i;
  var slides = document.getElementsByClassName("next_slide");
  var dots = document.getElementsByClassName("order");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



// ABOUT US - flashcard
function flip(){
	var back = document.getElementById("gu_back");
	var front = document.getElementById("gu_front");

	if (front.style.display == "none"){
		back.classList.remove('ani_fadeIn');
		back.classList.add('ani_fadeOut');
		back.style.display = "none";
		front.classList.remove('ani_fadeOut');
		front.classList.add('ani_fadeIn');
		front.style.display = "block";
	} 
	else {
		back.style.display = "block";
		back.classList.remove('ani_fadeOut');
		back.classList.add('ani_fadeIn');
		front.classList.remove('ani.fadeIn');
		front.classList.add('ani_fadeOut');
		front.style.display = "none";
	}
}

function flip2(){
	var back = document.getElementById("gi_back");
	var front = document.getElementById("gi_front");

	if (front.style.display == "none"){
		back.classList.remove('ani_fadeIn');
		back.classList.add('ani_fadeOut');
		back.style.display = "none";
		front.classList.remove('ani_fadeOut');
		front.classList.add('ani_fadeIn');
		front.style.display = "block";
	} 
	else {
		back.style.display = "block";
		back.classList.remove('ani_fadeOut');
		back.classList.add('ani_fadeIn');
		front.classList.remove('ani.fadeIn');
		front.classList.add('ani_fadeOut');
		front.style.display = "none";
	}
}


function flip3(){
	var back = document.getElementById("gs_back");
	var front = document.getElementById("gs_front");

	if (front.style.display == "none"){
		back.classList.remove('ani_fadeIn');
		back.classList.add('ani_fadeOut');
		back.style.display = "none";
		front.classList.remove('ani_fadeOut');
		front.classList.add('ani_fadeIn');
		front.style.display = "block";
	} 
	else {
		back.style.display = "block";
		back.classList.remove('ani_fadeOut');
		back.classList.add('ani_fadeIn');
		front.classList.remove('ani.fadeIn');
		front.classList.add('ani_fadeOut');
		front.style.display = "none";
	}
}

/*
function changepic(){
	var section=document.getElementById("gs_unknown");
	section.style.backgroundImage="url('../Img/roads2.png')";	
}

function changeback(){
	var section=document.getElementById("gs_unknown");
	section.style.backgroundImage="url('../Img/roads3.png')";	
}*/




//Rotating screen (Watches Page)

function rotate_back(){
	screen=document.getElementById('screen-form')
	screen.style.cursor="pointer";
	screen.style.transform="none";
	screen.style.filter="brightness(100%)";
	screen.style.boxShadow="none";
}

function rotate_left_t(){							//top row
	screen=document.getElementById('screen-form')
	screen.style.cursor="pointer";
	screen.style.transform="rotateZ(5deg) rotateY(35deg)";
	screen.style.filter="brightness(5%)";
	screen.style.boxShadow="50px 50px rgba(0, 0, 0, 0.678)";
}

function rotate_top(){
	screen=document.getElementById('screen-form')
	screen.style.cursor="pointer";
	screen.style.transform="rotateX(35deg)";
	screen.style.filter="brightness(5%)";
	screen.style.boxShadow="0px 80px rgba(0, 0, 0, 0.678)";
}

function rotate_right_t(){
	screen=document.getElementById('screen-form')
	screen.style.cursor="pointer";
	screen.style.transform="rotateY(-35deg) rotateZ(-5deg)";
	screen.style.filter="brightness(5%)";
	screen.style.boxShadow="-50px 50px rgba(0, 0, 0, 0.678)";
}

function rotate_right(){										//mid row
	screen=document.getElementById('screen-form')
	screen.style.cursor="pointer";
	screen.style.transform="rotateY(-35deg)";
	screen.style.filter="brightness(5%)";
	screen.style.boxShadow="-80px 0px rgba(0, 0, 0, 0.678)";
}

function rotate_right_b(){
	screen=document.getElementById('screen-form')
	screen.style.cursor="pointer";
	screen.style.transform="rotateY(-35deg) rotateZ(5deg)";
	screen.style.filter="brightness(5%)";
	screen.style.boxShadow="-50px -50px rgba(0, 0, 0, 0.678)";
}

function rotate_bot(){
	screen=document.getElementById('screen-form')
	screen.style.cursor="pointer";
	screen.style.transform="rotateX(35deg)";
	screen.style.filter="brightness(5%)";
	screen.style.boxShadow="0px -80px rgba(0, 0, 0, 0.678)";
}

function rotate_left_b(){
	screen=document.getElementById('screen-form')
	screen.style.cursor="pointer";
	screen.style.transform="rotateY(35deg) rotateZ(-5deg)";
	screen.style.filter="brightness(5%)";
	screen.style.boxShadow="50px -50px rgba(0, 0, 0, 0.678)";
}

function rotate_left(){
	screen=document.getElementById('screen-form')
	screen.style.cursor="pointer";
	screen.style.transform="rotateY(35deg)";
	screen.style.filter="brightness(5%)";
	screen.style.boxShadow="80px 0px rgba(0, 0, 0, 0.678)";
}


function open_base(){
	var info=document.getElementById("base_info");
	if (info.style.height=="fit-content"){
		info.style.height="0px";
		info.style.paddingBottom="0px";
	}
	else{
		info.style.height="fit-content";
		info.style.paddingBottom="50px";
	}
}

function open_up(){
	var info=document.getElementById("up_info");
	if (info.style.height=="fit-content"){
		info.style.height="0px";
		info.style.paddingBottom="0px";
	}
	else{
		info.style.height="fit-content";
		info.style.paddingBottom="50px";
	}
}

function open_pro(){
	var info=document.getElementById("pro_info");
	if (info.style.height=="fit-content"){
		info.style.height="0px";
		info.style.paddingBottom="0px";
	}
	else{
		info.style.height="fit-content";
		info.style.paddingBottom="50px";
	}
}


function open_x(){
	var info=document.getElementById("x_info");
	if (info.style.height=="fit-content"){
		info.style.height="0px";
		info.style.paddingBottom="0px";
	}
	else{
		info.style.height="fit-content";
		info.style.paddingBottom="50px";
	}
}