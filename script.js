var display = document.getElementById("display");
var button = document.getElementsByClassName("button");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {

        var value = this.getAttribute('data-value');
        console.log(value);
        if (value == '+') {
            display.value += value;


        } else if (value == '-') {
            display.value += value;

        } else if (value == 'x') {
            value = '*';
            display.value += value;
        } else if (value == 'Erase') {
            // display.value = display.innerText.slice(0, -1);
            display.value = display.value.substring(0, display.value.length - 1);

        } else if (value == '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }

        } else if (value == 'AC') {
            display.value = "";
        } else {
            display.value += value;
        }
    });
}