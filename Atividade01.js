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
    //var a = ResolveEquacao(xZero, xUm, xDois, xTres, xQuatro, xCinco, 4);

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
    document.getElementById("Resultado").innerHTML = resultado;
    return resultado;

}

/**
 * Faz o cálculo da Bissecção
 */
function bisseccao(xZero, xUm, xDois, xTres, xQuatro, xCinco, epsilon){

    var x = 0;
    var cont = 0;
    
    var listaIntervalo = [];
    var valores = [];
    var indice = [];
        
    var b = 0;
    
    var a = ResolveEquacao(xZero, xUm, xDois, xTres, xQuatro, xCinco, x);
    if (a >= 0){
        b = a;
        
    }else{
        do{
            var c = ResolveEquacao(xZero, xUm, xDois, xTres, xQuatro, xCinco, x);
            x += 1;
            b = c
        }while(c <= 0);
    }
    
    var val = 1;
    
    do{
        cont += 1;
        
        indice.push(cont);
        listaIntervalo.push(("[ " + a + ", " + b + " ]").toString);
        
        medAB = (a + b) / 2;
        
        val = ResolveEquacao(xZero, xUm, xDois, xTres, xQuatro, xCinco, x);
        
        valores.push(val);
        
        if(val < 0){
            a = val;
            
        }else if(val > 0){
            b = val;
        }

    }while(b - a < epsilon || val == 0 || cont == 5);
    
    addNaTabela();
}

function addNaTabela(){
    removeRows();
    for(i = 0; i < listaIntervalo.length; i++){

        var table = document.getElementById("tabelaResultado");
        var ind = table.heigh;
        var row = table.insertRow(ind);
        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = indice[i];
        cell2.innerHTML = valores[i];
        cell2.innerHTML = listaIntervalo[i];
    }
}
