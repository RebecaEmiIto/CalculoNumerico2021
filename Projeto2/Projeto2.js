function Calcular(){

    const wUm = document.getElementById("w1").value;
    const xUm = document.getElementById("x1").value;
    const yUm = document.getElementById("y1").value;
    const zUm = document.getElementById("z1").value;
    
    const wDois = document.getElementById("w2").value;
    const xDois = document.getElementById("x2").value;
    const yDois = document.getElementById("y2").value;
    const zDois = document.getElementById("z2").value;
    
    const wTres = document.getElementById("w3").value;
    const xTres = document.getElementById("x3").value;
    const yTres = document.getElementById("y3").value;
    const zTres = document.getElementById("z3").value;

    const wQuatro = document.getElementById("w4").value;
    const xQuatro = document.getElementById("x4").value;
    const yQuatro = document.getElementById("y4").value;
    const zQuatro = document.getElementById("z4").value;

    var linha1 = [wUm, xUm, yUm, zUm];
    var linha2 = [wDois, xDois, yDois, zDois];
    var linha3 = [wTres, xTres, yTres, zTres];
    var linha4 = [wQuatro, xQuatro, yQuatro, zQuatro];

    Resolver(linha1, linha2, linha3, linha4);
}

function Resolver(linha1, linha2, linha3, linha4){
    
    for (var i = 0; i < 4; i++) {

    }
}