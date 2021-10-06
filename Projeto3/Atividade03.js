/**
 *  Pega os valores dos inputs colocados pelo usuário
 * 
 * const epsilon = document.getElementById("epsilon").value;
 */
function Calcular(){

    const xZero = document.getElementById("xZero").value;
    const yZero = document.getElementById("yZero").value;
    
    const xUm = document.getElementById("xUm").value;
    const yUm = document.getElementById("yUm").value;
    
    const xDois = document.getElementById("xDois").value;
    const yDois = document.getElementById("yDois").value;
    
    lagrange(xZero, yZero, xUm, yUm, xDois, yDois); 
}


/**
 * Faz o cálculo da Lagrange
 * 
 * P(x) = f(x0) * L0(0) + f(x1) * L1(0) + f(x2) * L2(x)  
 * 
 * L0(x) = ((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2))
 * L1(x) = ((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2))
 * L2(x) = ((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1))
 * 
 * var x2 = parseFloat(xDois* Math.pow(val_x, 2));
 */
function lagrange(xZero, yZero, xUm, yUm, xDois, yDois){
    
    var p = 0;
    var x = "x";
    
    var a1 = -xDois -xUm;
    var a2 = -xUm * -xDois;
    var a3 = parseFloat(Math.pow(xZero, 2)) + (xZero *-xDois) + (-xUm * xZero) + (-xUm * -xDois);
    var l0 = yZero + "x² + " + (yZero * a1) + "x + " + (yZero * a2) + " / " + a3;
    var auxA = "( " + xZero + ", " + yZero + " )";
    
    addNaTabela(xZero, l0, yZero, auxA);
    
    var b1 = -xZero -xDois;
    var b2 = -xZero * -xDois;
    var b3 = parseFloat(Math.pow(xUm, 2)) + (xUm *-xDois) + (-xZero * xUm) + (-xZero * -xDois);
    var l1 = yUm + "x² + " + (yUm * b1) + "x + " + (yUm * b2) + " / " + b3;
    var auxB = "( " + xUm + ", " + yUm + " )";
    
    addNaTabela(xUm, l1, yUm, auxB);
    
    var c1 = -xZero -xUm;
    var c2 = -xZero * -xUm;
    var c3 = parseFloat(Math.pow(xDois, 2)) + (xDois *-xUm) + (-xZero * xDois) + (-xZero * -xUm);
    var l2 = yDois + "x² + " + (yDois * c1) + "x + " + (yDois * c2) + " / " + c3;
    var auxC = "( " + xDois + ", " + yDois + " )";
    
    addNaTabela(xDois, l2, yDois, auxC);
    
    var d1 = a3 * b3 * c3;
    var d2 = (yZero * (b3 * c3)) + (yUm * (a3 * c3)) + (yDois * (a3 * b3)) + "x² + ";
    var d3 = ((yZero * a1) * d1) + ((yUm * b1) * d1) + ((yDois * c1) * d1) + "x + ";
    var d4 = ((yZero * a2) * d1) + ((yUm * b2) * d1) + ((yDois * c2) * d1);
    p = d2 + d3 + d4 + " / " + d1;
    document.getElementById("teste").innerHTML = p;
}

/**
 * Adiciona elementos na tabela
 * 
 * @param {*} x1 
 * @param {*} p
 * @param {*} f 
 * @param {*} valores
 * 
 * 
 */
function addNaTabela(x1, p, f, valores){
    var table = document.getElementById("table-body");
    var totalRowCount = table.rows.length;
    var row = table.insertRow(totalRowCount);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = x1;
    cell2.innerHTML = p;
    cell3.innerHTML = f;
    cell4.innerHTML = valores;
}
