//add
function add(num1, num2){
  return num1 + num2
var r = parseFloat(num1) + parseFloat(num2);
      addstring = num1 + "+" + num2 + "=" + r;

onclick=function(){
        document.getElementById('result').innerHTML=addstring;
      }

}
// substract

function subtract(num1, num2){
  var s = parseFloat(num1) - parseFloat(num2);
  substring = num1 + '-' + num2 + '=' + s;

onclick=function(){
        document.getElementById('result').innerHTML=substring;
      }
}
// multiply
function multiply(num1, num2) {
  var m = parseFloat(num1) * parseFloat(num2);
  multiplystring = num1 + '*' + num2 + "=" + m;

onclick=function(){
        document.getElementById('result').innerHTML=multiplystring;
      }
}
// divide
function divide(num1, num2) {
var d = parseFloat(num1) * parseFloat(num2);
  dividestring = num1 + "/" + num2 + "=" + d;

  onclick=function(){
        document.getElementById('result').innerHTML=dividestring;
      }
}

// this function will grab the inputs, populate the result div
// and run an operation
function populatehtml(operation){
var input1 = doucment.getElementById("first").vaule;
var input2 = doucment.getElementById("second").vaule;
var output = operation(input1, input2);
document.getElementById("result").innerText += output;

if (input1 == "" || input2 == "") {
  document.getElementById('result').innerHTML="You no number"
} else {

}

document.getElementById('add').onclick = function(){populatehtml(add)};
document.getElementById('subtract').onclick = function(){populatehtml(subtract)};
document.getElementById('multiply').onclick = function(){populatehtml(multiply)};
document.getElementById('divide').onclick = function(){populatehtml(divide)};
