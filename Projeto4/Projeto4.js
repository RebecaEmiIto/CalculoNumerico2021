function Calcular(){
    /* função */
    const xCinco = document.getElementById("x5").value;
    const xQuatro = document.getElementById("x4").value;
    const xTres = document.getElementById("x3").value;
    const xDois = document.getElementById("x2").value;
    const xUm = document.getElementById("x1").value;
    const c = document.getElementById("c").value;

    const a = document.getElementById("a").value; /* ponto a (início do intervalo) */
    const b = document.getElementById("b").value; /* ponto b (final do intervalo) */
    const n = document.getElementById("n").value; /* quantidade de intervalos */

    regraTrapezio(a, b, n, xCinco, xQuatro, xTres, xDois, xUm, c);
}


function regraTrapezio(a, b, n, xCinco, xQuatro, xTres, xDois, xUm, c){
    var altura = (b - a) / n;
    var x;
    var arrX = [];
    var arrY = [];
    var somaArrY = 0;
    var resultadoLog;   
    var alturaTotal;
    var erro;
    var erroCento;

    resultadoLog = Math.log(b) - Math.log(a)

    //descobre x
    for (let i = 0; i <= n; i++) {
        if (i == 0){
            x = a;
            arrX.push(x)
        }else{
            x = x + altura
            arrX.push(x)
        }
    }

    //descobre y
    for (let k = 0; k < arrX.length; k++){
        y5 = arrX[k] * (xCinco ^ 5);
        y4 = arrX[k] * (xQuatro ^ 4);
        y3 = arrX[k] * (xTres ^ 3);
        y2 = arrX[k] * (xDois ^ 2);
        y = arrX[k] * xUm;
        totalY = y5 + y4 + y3 + y2 + y + c;
        arrY.push(totalY);
    }

    //altura total
    alturaTotal = altura / 2 * arrY[0]
    
    //somar arrY
    for (let j = 1; j < arrY.length - 1; j++) {
        somaArrY += arrY[j];
    }

    //erro
    erro = alturaTotal - resultadoLog;

    //erro%
    erroCento = (erro / resultadoLog) * 100

    addNaTabela(erro, erroCento)
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
/**
 * na entrada vc deve escrever a integral
    ou seja
    a função, o intervalo e o valor de n
    certo?
 */