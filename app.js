var display = document.getElementById("disply");

function getBtnValue(a) {
    display.value += a;
}
function calculateVal() {
    display.value = eval(display.value);
}
function clearAll() {
    display.value = "";
}