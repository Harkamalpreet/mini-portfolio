//javascript//
// iife immidiately  invoked function expression
(function(){
	
	"use strict";
	
//codegoes in here	

console.log("App started..");	
var Paragraph1 = document.getElementById("para1");
var ParagraphA = document.getElementById("paraA");
var ParagraphB = document.getElementById("paraB");
var ParagraphC = document.getElementById("paraC");
var ParagraphD = document.getElementById("paraD");
var Paragraph2 = document.getElementById("para2");
var Paragraph2A = document.getElementById("para2A");
var Paragraph2B= document.getElementById("para2B");
var Paragraph3= document.getElementById("para3");
var Paragraph3A = document.getElementById("para3A");
var Paragraph3B = document.getElementById("para3B");
var Paragraph3C = document.getElementById("para3C");
var Paragraph3D = document.getElementById("para3D");
var para = [];
para[0]="Harkamalpreet kaur";
para[1]=" Student- software engineering technician";
para[2]=" Centennial college";
para[3]=" Believe in yourself";
para[4]="Project# 1: Flight booking form using CSS and HTML";
para[5]="Project# 2: Webpage on BMW";
para[6]="Project# 3: Energy Conservation Assignment";
para[7]="Some of things I like to do are:";
para[8]="painting";
para[9]="Desgining";
para[10]="Listening Music";
para[11]="Travelling";
para[12]="Anything is possible ";
if(Paragraph1){
Paragraph1.textContent = para[0];

}
if(ParagraphA){
ParagraphA.textContent = para[1];

	
}
if(ParagraphB){
ParagraphB.textContent = para[2];

	
}
if(ParagraphC){
ParagraphC.textContent = para[3];

	
}
if(ParagraphD){
ParagraphD.textContent = para[12];

	
}
if(Paragraph2){
Paragraph2.textContent = para[4];

	
}
if(Paragraph2A){
Paragraph2A.textContent = para[5];

	
}
if(Paragraph2B){
Paragraph2B.textContent = para[6];

	
}
if(Paragraph3){
Paragraph3.textContent = para[7];

	
}
if(Paragraph3A){
Paragraph3A.textContent = para[8];

	
}
if(Paragraph3B){
Paragraph3B.textContent = para[9];

	
}
if(Paragraph3C){
Paragraph3C.textContent = para[10];

	
}
if(Paragraph3D){
Paragraph3D.textContent = para[11];

	
}
	
})();