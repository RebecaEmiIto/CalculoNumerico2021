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
    var passo = parseInt(((b - a) / n).toFixed());
    var resultadoSomaDx = 0;

    // Encontra os xs
    for (var j = a; j <= b; j += passo){
        arrX.push(j);
    }
    
    // Encontra os intervalos
    for (var i = 1; i < arrX.length; i += 2){
        
        y0 = ((xDois * Math.pow(arrX[i - 1], 2)) + (xUm * arrX[i - 1]) + c);
        y1 = 4 * ((xDois * Math.pow(arrX[i], 2)) + (xUm * arrX[i]) + c);
        y2 = ((xDois * Math.pow(arrX[i + 1], 2)) + (xUm * arrX[i + 1]) + c);
        
        soma = y0 + y1 + y2;
        
        dxSoma.push(soma);
        //dxSoma.push(y1);
        //dxSoma.push(y2);
    }
    
    h = (b - a) / (2 * n);

    // Soma da lista "dxSoma"
    for (var k = 0; k < dxSoma.length; k++){
        resultadoSomaDx += dxSoma[k];
    }
    resultadoDx = (h/3) * resultadoSomaDx;
    
    //document.getElementById("teste").innerHTML = h;
    
    addNaTabela(a, b, n, resultadoDx);
}

function addNaTabela(a, b, n, resultadoDx){
    var table = document.getElementById("table-body");
    var totalRowCount = table.rows.length;
    var row = table.insertRow(totalRowCount);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = n;
    cell4.innerHTML = resultadoDx;
}