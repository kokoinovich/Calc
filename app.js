function summa() {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = (+x + +y);
}

function mul() {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = (+x * +y);
}
function del() {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = (+x / +y);
}
function minus() {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = (+x - +y);
}