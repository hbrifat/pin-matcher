  document.getElementById("success").style.display = "none";
  document.getElementById("failed").style.display = "none";

const pinButton = document.getElementById("pinButton").addEventListener("click", function(){
  document.getElementById("generatePinDisplay").value = Math.round(Math.random() * 10000 );
  document.getElementById("inputPinDisplay").value = '';
  document.getElementById("success").style.display = "none";
  document.getElementById("failed").style.display = "none";

})

document.getElementById("one").addEventListener("click", callInput)
function callInput(){
  document.getElementById("inputPinDisplay").value += '1';
}
document.getElementById("two").addEventListener("click", function(){
   document.getElementById("inputPinDisplay").value += '2';
})
document.getElementById("three").addEventListener("click", function(){
   document.getElementById("inputPinDisplay").value += '3';
})
document.getElementById("four").addEventListener("click", function(){
   document.getElementById("inputPinDisplay").value += '4';
})
document.getElementById("five").addEventListener("click", function(){
   document.getElementById("inputPinDisplay").value += '5';
})
document.getElementById("six").addEventListener("click", function(){
   document.getElementById("inputPinDisplay").value += '6';
})
document.getElementById("seven").addEventListener("click", function(){
   document.getElementById("inputPinDisplay").value += '7';
})
document.getElementById("eight").addEventListener("click", function(){
   document.getElementById("inputPinDisplay").value += '8';
})
document.getElementById("nine").addEventListener("click", function(){
   document.getElementById("inputPinDisplay").value += '9';
})
document.getElementById("zero").addEventListener("click", function(){
   document.getElementById("inputPinDisplay").value += '0';
})
document.getElementById("clear").addEventListener("click", function(){
   document.getElementById("inputPinDisplay").value = '';
})


document.getElementById("submitBtn").addEventListener("click", function(){
  const generatePinDisplay = document.getElementById("generatePinDisplay").value;
  const inputPinDisplay = document.getElementById("inputPinDisplay").value;

  if (generatePinDisplay == inputPinDisplay) {
    document.getElementById("success").style.display = "block";
  }

  else {
    document.getElementById("failed").style.display = "block";
  }
})