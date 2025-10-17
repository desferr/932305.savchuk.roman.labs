function addNumber(numChar) {
    const textBox = document.getElementById('text_box');
    let text = textBox.textContent;
    if (text == '0' && numChar != '.') {
        text = '';
    }
    if ((numChar == '0' || numChar == '.') && text != '') {
        if (numChar == '0') {
            if (text.lastIndexOf(' ') < text.lastIndexOf('.')) {
                text += numChar;
            }
            else if (text.at(text.lastIndexOf(" ") + 1) != '0') {
                text += numChar;
            }
        }
        else if (numChar == '.') {
            if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(text.at(-1)) && ((text.lastIndexOf('.') < text.lastIndexOf(' ')) || text.lastIndexOf(' ') == -1)) {
                if (text.lastIndexOf(' ') == -1 && text.lastIndexOf('.') != -1) {
                }
                else {
                    text += numChar;
                }
            }
        }
    }
    else {
        text += numChar;
    }
    textBox.textContent = text;
}
function useOperation(operChar) {
    const textBox = document.getElementById('text_box');
    let text = textBox.textContent;
    if ((text == '0' || text == '') && operChar == '-') {
        text = '';
        text += operChar;
    }
    else if (text.at(-1) == ' ' && operChar == '-') {
        text += operChar;
    }
    else if (text.at(-1) == ' ') {
        text = text.slice(0, -2) + operChar + ' ';
    }
    else if (text == '0' || text == '') {
        text = '0';
    }
    else {
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(text.at(-1))) {
            text += " " + operChar + " ";
        }
    }
    textBox.textContent = text;
}
function clearAll() {
    const textBox = document.getElementById('text_box');
    textBox.textContent = '0';
}
function deleteChar() {
    const textBox = document.getElementById('text_box');
    let text = textBox.textContent;
    if (text.at(-1) != ' ') {
        text = text.slice(0, -1);
    }
    else {
        text = text.slice(0, -3);
    }
    if (text == '') {
        text = '0';
    }
    textBox.textContent = text;
}
function calculate() {
    const textBox = document.getElementById('text_box');
    let text = textBox.textContent;
    text = eval(text);
    textBox.textContent = text;

}
