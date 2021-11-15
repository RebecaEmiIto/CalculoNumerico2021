function Calcular(){
    /* função */
    const xDois = document.getElementById("x2").value;
    const xUm = document.getElementById("x1").value;
    const c = document.getElementById("c").value;

    const a = document.getElementById("a").value; /* ponto a (início do intervalo) */
    const b = document.getElementById("b").value; /* ponto b (final do intervalo) */
    const n = document.getElementById("n").value; /* quantidade de intervalos */
    
}

function regraSimpson(a, b, n, xDois, xUm, c){
    var dxSoma = [0];
    var arrX = [];
    var passo = (b - a) / n;
    var resultadoSomaDx = 0;

    // Encontra os xs
    for (let j = a; j <= b; j += passo){
        arrX.push(j);
    }

    // Encontra os intervalos
    for (let i = 0; i < arrX.length; i += 2){
        h = ((arrX[i + 1]) - arrX[i]) / (2 * n);

        y0 = ((xDois * arrX[i]^2) + (xUm * arrX[i]) + c);;
        y1 = 4 * ((xDois * arrX[i + 1]^2) + (xUm * arrX[i + 1]) + c);
        y2 = ((xDois * arrX[i + 2]^2) + (xUm * arrX[i + 2]) + c);;

        dxSoma[i] = arrX[i] + y0;
        dxSoma.push(y1);
        dxSoma.push(y2);        
    }

    // Soma da lista "dxSoma"
    for (let k = 0; k < dxSoma.length; k++){
        resultadoSomaDx += dxSoma[k];
    }
    resultadoDx = (h/3) * resultadoSomaDx;
}

function addNaTabela(x, y, erro, erroCento){
    var table = document.getElementById("table-body");
    var totalRowCount = table.rows.length;
    var row = table.insertRow(totalRowCount);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = x;
    cell2.innerHTML = y;
    cell3.innerHTML = erro;
    cell4.innerHTML = erroCento;
}