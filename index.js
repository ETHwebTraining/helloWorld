document.addEventListener("DOMContentLoaded", main);


function main() {
    const greet = document.getElementById('greet');
    const hello = document.getElementById('hello');

    const input = document.getElementById('name');
    const greet2 = document.getElementById('greet2');

    greet.addEventListener('click', onhelloWorld)
    greet2.addEventListener('click', onGreet)

    function onhelloWorld() {
        hello.innerHTML = hello.innerHTML + ' hello World !'
    }

    

    function onGreet() {
        const name = input.value;
        alert(`hello ${name}`)
    }

}