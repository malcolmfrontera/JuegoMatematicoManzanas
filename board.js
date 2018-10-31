
var $ = function (id) { return document.getElementById (id); }
var first_number;
var second_number;
var operand;
var result;
var equation;
var score = 0;
var counter = 0;
var maximum_runs = 10;
var runs_counter = 0;
var temp;

function show_next_equation () {

runs_counter = runs_counter + 1;

get_score ();
counter = 0;
	
if ( runs_counter == maximum_runs ) {
	$("btnScore").disabled = false;
	$("btnEquation").disabled = true;
}
	
first_number = Math.floor(Math.random() * 10) + 0;
second_number = Math.floor(Math.random() * 10) + 0;
operand = Math.floor(Math.random() * 3) + 1;

if ( operand == 1 ){
     operand = '+';
} else if ( operand == 2 ) {
     operand = '-';
} else {
	operand = 'X';
}

if ( operand == '+' ) {
	result = first_number + second_number;
}
else if ( operand == '-' ) {
	result = first_number - second_number;
} else {
	result = first_number * second_number;
}
if ( result < 0 ) {
	temp = first_number;
	first_number = second_number;
	second_number = temp;
	result = result * -1;
}

equation = first_number + " " + operand + " " + second_number + " =  ?";
$("equation").innerHTML = equation;
}

function get_result () {
	alert ("The Correct Answer is " + result);
}

function get_score () {
	
/*alert ("counter = " + counter + "  result = " + result);*/

if ( counter == result ) {
	score = score + 1;
}	
}

function show_score () {
   get_score ();
   
   if ( score <= 4 ) {
	   grade = 'F';
   } else if ( score <= 6 ) {
	   grade = 'C';
   }  else if ( score <= 7 ) {
	   grade = 'B';
   }  else {
	   grade = 'A';
   }
	    
   alert ("Your Score:  " + score + "  Your Grade: " + grade);
}

function reload () {
	location.reload();
}


function changeimg(){
	
counter = counter + 1;

var minus = document.getElementsByClassName("alien")[0];

 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg1(){
counter = counter + 1;
var minus = document.getElementsByClassName("minus1")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg2(){
counter = counter + 1;
var minus = document.getElementsByClassName("minus2")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg3(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus3")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg4(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus4")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg5(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus5")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg6(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus6")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg7(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus7")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg8(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus8")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }

}
function changeimg9(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus9")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg10(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus10")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg11(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus11")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg12(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus12")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg13(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus13")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg14(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus14")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg15(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus15")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg16(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus16")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg17(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus17")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg18(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus18")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg19(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus19")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg20(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus20")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg21(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus21")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg22(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus22")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg23(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus23")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg24(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus24")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg25(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus25")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg26(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus26")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg27(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus27")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg28(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus28")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg29(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus29")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg30(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus30")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg31(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus31")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg32(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus32")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg33(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus33")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg34(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus34")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg35(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus35")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg36(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus36")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg37(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus37")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg38(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus38")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg39(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus39")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg40(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus40")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg41(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus41")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg42(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus42")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg43(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus43")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg44(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus44")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg45(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus45")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg46(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus46")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg47(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus47")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg48(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus48")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg49(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus49")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg50(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus50")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg51(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus51")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg52(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus52")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg53(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus53")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg54(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus54")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg55(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus55")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg56(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus56")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg57(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus57")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg58(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus58")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg59(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus59")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg60(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus60")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg61(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus61")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg62(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus62")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg63(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus63")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg64(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus64")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg65(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus65")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg66(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus66")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg67(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus67")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg68(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus68")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg69(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus69")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg70(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus70")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg71(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus71")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg72(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus72")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg73(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus73")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg74(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus74")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg75(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus75")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg76(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus76")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg77(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus77")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg78(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus78")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg79(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus79")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
function changeimg80(){
	counter = counter + 1;
var minus = document.getElementsByClassName("minus80")[0];
 if (minus.src == "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png"){
 minus.src = "http://erplife.com/wp-content/uploads/2012/07/apple-core.png";
 }
 else{
 minus.src = "http://www.pngpix.com/wp-content/uploads/2016/03/Apple-PNG-Image.png";
 }
}
