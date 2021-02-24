
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
	
setInterval(function a() {
    var elements = document.getElementsByClassName('FIXE'); // get all elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = getRandomColor();
        elements[i].style.color = getRandomColor();
    }
}, 1000);