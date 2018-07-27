let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement('button');
        let input = document.createElement('input');
        input.type = "text";
        button.style.backgroundColor = item;
        page.appendChild(button);
        page.appendChild(input);
    }
}
constructOptions(kButtonColors);
