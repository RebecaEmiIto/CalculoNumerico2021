/**
 *  Pega os valores dos inputs colocados pelo usuário
 */
function Calcular(){

    const xUm = document.getElementById("x1").value;
    const xDois = document.getElementById("x2").value;
    const xTres = document.getElementById("x3").value;
    const xQuatro = document.getElementById("x4").value;
    const xCinco = document.getElementById("x5").value;
    const xZero = document.getElementById("x0").value;
    const epsilon = document.getElementById("epsilon").value;
    
    bisseccao(xZero, xUm, xDois, xTres, xQuatro, xCinco, epsilon);
    
}

/**
 *  Realiza o calculo da função
 */
function ResolveEquacao(xZero, xUm, xDois, xTres, xQuatro, xCinco, val_x){
    
    var x0 = parseFloat(xZero);
    var x1 = parseFloat(xUm * Math.pow(val_x, 1));
    var x2 = parseFloat(xDois* Math.pow(val_x, 2));
    var x3 = parseFloat(xTres* Math.pow(val_x, 3));
    var x4 = parseFloat(xQuatro* Math.pow(val_x, 4));
    var x5 = parseFloat(xCinco* Math.pow(val_x, 5));
    
    var resultado = x5 + x4 + x3 + x2 + x1 + x0;
    return resultado;

}

/**
 * Faz o cálculo da Bissecção
 */
function bisseccao(xZero, xUm, xDois, xTres, xQuatro, xCinco, epsilon){
    
    var intervalo = "0";
    var val = 1;
    var cont = 0;
    var xA = -1;
    var xB = 20;
    
    var a = parseFloat(ResolveEquacao(xZero, xUm, xDois, xTres, xQuatro, xCinco, xA));
    var b = parseFloat(ResolveEquacao(xZero, xUm, xDois, xTres, xQuatro, xCinco, xB));

    if(a >= b){
        var c = a;
        a = b;
        b = c;
    }

    do{
        cont += 1;
        
        intervalo = (("[" + xA + ", " + xB + "]").toString());
        
        medAB = (xA + xB) / 2;
        
        val = ResolveEquacao(xZero, xUm, xDois, xTres, xQuatro, xCinco, medAB);

        addNaTabela(intervalo, val, cont);
        
        if(val < 0){
            xA = medAB;
            
        }else if(val > 0){
            xB = medAB;
            
        }else if(val == 0){
            break;
        }

    }while((b - a) / 2 < epsilon || cont < 13);
}

/**
 * Adiciona elementos na tabela
 * 
 * @param {*} intervalo 
 * @param {*} valores 
 * @param {*} indice 
 */
function addNaTabela(intervalo, valores, indice){
    var table = document.getElementById("table-body");
    var totalRowCount = table.rows.length;
    var row = table.insertRow(totalRowCount);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = indice;
    cell2.innerHTML = valores;
    cell3.innerHTML = intervalo;
}
