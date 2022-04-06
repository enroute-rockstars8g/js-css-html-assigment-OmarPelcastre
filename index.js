var inputFibo = document.getElementById("fiboNumber")

inputFibo.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        calcularFibo();
    }
})

var array = [1];
function calcularFibo() {
    const fiboNumber = parseInt(document.getElementById("fiboNumber").value);
    console.log(fiboNumber)
    let num1 = 0;
    let num2 = 1;
    if (fiboNumber == 1 || fiboNumber == 2) {
        if (fiboNumber == 1) {
            num2 = 0
        }
        console.log(num2)
    } else {
        for (i = 2; i < fiboNumber; i++) {
            let aux = num2;
            num2 = num1 + num2;
            num1 = aux;
            console.log(num2)
            array.push(num2)
        }
    }

    drawFibo(num2)
}

colors = {
    2: "red",
    3: "blue",
    4: "green",
    5: "yellow",
    6: "lightblue",
    7: "orange",
    8: "purple"
}

function drawFibo(result) {
    console.log(array)
    var miLienzo = document.getElementById("mipanel");
    var lapiz = miLienzo.getContext("2d");
    let x = 150
    let y = 150
    for (arrayValue = 2; arrayValue < array.length; arrayValue++) {
        let value = array[arrayValue];
        let yAux = y
        for (i = 0; i < value; i++) {
            let xAux = x;
            for (j = 0; j < value; j++) {
                lapiz.fillStyle=colors[arrayValue];
	            lapiz.fillRect(x,y,10,10);
                lapiz.strokeRect(x, y, 10, 10);
                x += 10;
            }
            x = xAux
            y += 10;
        }
        y = yAux
    }
    array = [1];
}

function calcularFactorial() {
    const facNumber = parseInt(document.getElementById("facNumber").value);

    console.log(facNumber);
    let result = 1;
    for (i = 2; i <= facNumber; i++) {
        result *= i
    }

    console.log(result);

}

