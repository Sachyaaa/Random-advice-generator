let id = document.getElementById("advice-id");
let advice = document.getElementById("advice");
let btn = document.getElementById("btn");

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(response =>{
        console.log(response)
        return response.json();
    })
    .then(data =>{
        id.innerHTML = data.slip.id;
        advice.innerHTML = data.slip.advice;
    })}

btn.addEventListener("click",getAdvice)
window.onload = getAdvice();


