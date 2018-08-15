window.addEventListener("DOMContentLoaded", main);


function main() {
    const greet = document.getElementById('greet');
    const hello = document.getElementById('hello');

    const input = document.getElementById('name');
    const greet2 = document.getElementById('greet2');

    greet.addEventListener('click', () => {
        hello.innerHTML = hello.innerHTML + ' hello World !'
    })

    greet2.addEventListener('click', () => {
        const name = input.value;
        hello.innerHTML = hello.innerHTML + ` hello ${name} !`
    })

}