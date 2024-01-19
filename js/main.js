input1Element = document.querySelector('#firstName');
input2Element = document.querySelector('#surName');
btnElement = document.querySelector('.btn');
resultElement = document.querySelector('.result');

btnElement.addEventListener("click", function(){
    resultElement.innerHTML = `Здравствуйте, ${input1Element.value} ${input2Element.value}!`;
    input1Element.value = "";
    input2Element.value = "";
});