var inputFibo = document.getElementById("fiboNumber")

inputFibo.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        calcularFibo();
    }
})

var array = [1];
function calcularFibo(){
    const fiboNumber = parseInt(document.getElementById("fiboNumber").value);
    console.log(fiboNumber)
    let num1 = 0;
    let num2 = 1;
    if(fiboNumber == 1 || fiboNumber == 2){
        if(fiboNumber == 1){
            num2 = 0
        }
        console.log(num2)
    }else{
        for(i=2; i<fiboNumber; i++){
            let aux = num2;
            num2 = num1 + num2;
            num1 = aux;
            console.log(num2)
            array.push(num2)
        }
    }

    drawFibo(num2)
}

function drawFibo(result){
    console.log(array)
    var miLienzo = document.getElementById("mipanel");
    var lapiz = miLienzo.getContext("2d");
    lapiz.fillStyle="red";
    let x = 150
    let y = 150
    for(arrayValue=0; arrayValue<array.length; arrayValue++){
        let value = array[arrayValue];
        if(value != 1){
            y+=10;
        }else{
            let numAux = 10*value
            y-=numAux
        }
        for(i=0; i<value; i++){
            y+=10;
            for(j=0; j<value; j++){
                lapiz.strokeRect(x,y,10,10);
                x+=10;
            }
            if(value != 1){
                let numAux = 10*value
                x-=numAux
            }
        }
    }
    array = [1];
}

function calcularFactorial(){
    const facNumber = parseInt(document.getElementById("facNumber").value);

    console.log(facNumber);
    let result = 1;
    for(i=2; i<=facNumber; i++){
        result*= i
    }

    console.log(result);

}

