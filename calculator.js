var addButt = document.getElementById("addBtn");
var subButt = document.getElementById("subBtn");
var multButt = document.getElementById("multBtn");
var divButt = document.getElementById("divBtn");
var numOne = document.getElementById("firstNum");
var numTwo = document.getElementById("secondNum");
var total = document.getElementById("total");

addButt.addEventListener("click", function() { total.innerHTML = opSelect(numOne.value, numTwo.value, addNums); });
subButt.addEventListener("click", function() { total.innerHTML = opSelect(numOne.value, numTwo.value, subNums); });
multButt.addEventListener("click", function() { total.innerHTML = opSelect(numOne.value, numTwo.value, multNums); });
divButt.addEventListener("click", function() { total.innerHTML = opSelect(numOne.value, numTwo.value, divNums); });


function addNums (_numOne, _numTwo){
	return parseInt(_numOne) + parseInt(_numTwo);
}

function subNums (_numOne, _numTwo){
	return _numOne - _numTwo;
}

function multNums (_numOne, _numTwo){
	return _numOne * _numTwo;
}

function divNums (_numOne, _numTwo){
	return _numOne / _numTwo;
}

function opSelect (_numOne, _numTwo, myFunction){
	return myFunction(_numOne, _numTwo);
}
/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */