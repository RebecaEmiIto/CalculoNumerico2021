function Calcular(){
    /* função */
    const xDois = parseInt(document.getElementById("x2").value);
    const xUm = parseInt(document.getElementById("x1").value);
    const c = parseInt(document.getElementById("c").value);
    
    const a = parseInt(document.getElementById("a").value); /* ponto a (início do intervalo) */
    const b = parseInt(document.getElementById("b").value); /* ponto b (final do intervalo) */
    const n = parseInt(document.getElementById("n").value); /* quantidade de intervalos */
    
    regraSimpson(a, b, n, xDois, xUm, c);
    
}

function regraSimpson(a, b, n, xDois, xUm, c){
    var dxSoma = [];
    var arrX = [];
    var arrY = [];
    var passo = parseInt(((b - a) / n).toFixed());
    var resultadoSomaDx = 0;
    h = (b - a) / (2 * n);

    // Encontra os xs
    for (var j = a; j <= b; j += passo){
        arrX.push(j);
    }
    
    // Encontra os intervalos
    for (var i = 1; i < arrX.length; i += 2){
        
        y0 = ((xDois * Math.pow(arrX[i - 1], 2)) + (xUm * arrX[i - 1]) + c);
        y1 = 4 * ((xDois * Math.pow(arrX[i], 2)) + (xUm * arrX[i]) + c);
        y2 = ((xDois * Math.pow(arrX[i + 1], 2)) + (xUm * arrX[i + 1]) + c);
        
        soma = (y0 + y1 + y2);
        
        arrY.push(y0);
        arrY.push(y1);
        arrY.push(y2);
        dxSoma.push(soma);
    }
    

    // Soma da lista "dxSoma"
    for (var k = 0; k < dxSoma.length; k++){
        resultadoSomaDx += dxSoma[k];
    }
    //resultadoDx = (h/3) * resultadoSomaDx;
    
    document.getElementById("teste").innerHTML = resultadoSomaDx;
    
    addNaTabela(arrX, arrY, n, dxSoma);
}

function addNaTabela(arrX, arrY, n, dxSoma){
    var table = document.getElementById("table-body");
    var totalRowCount = table.rows.length;
    var row = table.insertRow(totalRowCount);
    var contador = 0;
    var resultadoIndex = 0;

    for (var i = 0; i <= arrX.length; i++){
        var cell1 = row.insertCell(i);
        var valor = 0;
        if (contador < 3){
            var x = arrX[i];
            var y = arrY[i];
            valor = (x + ", " + y);        
        }else{
            valor = dxSoma[resultadoIndex];
            resultadoIndex++;
            contador = 0;
        }
        contador++;
        cell1.innerHTML = valor;
    }

}