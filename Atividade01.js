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
    
    //var a = ResolveEquacao(xZero, xUm, xDois, xTres, xQuatro, xCinco, 4);

    //document.getElementById("Resultado").innerHTML = b;
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

    var resultadoEquacao = x5 + x4 + x3 + x2 + x1 + x0;
    return resultadoEquacao;
    
}

/**
 *  Encontra a média entre os valores de a e b
 */
function mediaAB(a, b){
    return (a + b) / 2;
}

function bisseccao(){
    var x = 0;
    var listaIntervalo = [];
    var valores = [];

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
    
    do{
        listaIntervalo.push(("[ " + a + ", " + b + " ]").toString);
        
        medAB = (a + b) / 2;
        
        var val = ResolveEquacao(xZero, xUm, xDois, xTres, xQuatro, xCinco, x);

        valores.push(val);

        if(val < 0){
            a = val;

        }else if(val > 0){
            b = val;
        }

    }while(b - a < epsilon || val == 0);
}