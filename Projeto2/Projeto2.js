function Calcular(){

    const xUm = document.getElementById("x1").value;
    const yUm = document.getElementById("y1").value;
    const zUm = document.getElementById("z1").value;
    const bUm = document.getElementById("b1").value;
    
    const xDois = document.getElementById("x2").value;
    const yDois = document.getElementById("y2").value;
    const zDois = document.getElementById("z2").value;
    const bDois = document.getElementById("b2").value;
    
    const xTres = document.getElementById("x3").value;
    const yTres = document.getElementById("y3").value;
    const zTres = document.getElementById("z3").value;
    const bTres = document.getElementById("b3").value;

    var linha1 = [xUm, yUm, zUm, bUm];
    var linha2 = [xDois, yDois, zDois, bDois];
    var linha3 = [xTres, yTres, zTres, bTres];
    
    Resolver(linha1, linha2, linha3);
}

function Resolver(linha1, linha2, linha3){
    var matriz = [linha1, linha2, linha3];
    var pivo = 0;

    var j = 0;
    var k = 0;
    
    do{
        var i = 1;
        if (k == 1){
            i = 2
        }

        for (; i < 3; i++) {
            var a = matriz[k][j];
            var b = matriz[i][j];
            pivo = -(b/a);
            
            for (var l = 0; l < 4; l++){
                matriz[k][l] = matriz[k][l] * pivo;
                matriz[i][l] = matriz[i][l] * pivo;
                matriz[i][j] = 0;
            }
            addNaTabela(pivo, matriz);
        }
        j += 1;
        k += 1;
    }while(k < 2);
}
//  1 2 3 = 85
//  0 5 6 = 45
//  0 8 9 = 65

function matrizParaString(matriz){
    var mString = "";
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 4; j++){
            var a = matriz[i][j].toString();
            if (j == 0){
                mString = [mString + "[(" + a +")"].toString();
            }else if(j == 3){
                mString = [mString + " = " + a].toString();
            }else{
                mString = [mString + "+ (" + a + ") "].toString();
            }
        }
        mString = [mString + "]"]
    }

    return mString;
}

function addNaTabela(pivo, matriz){
    var mString = matrizParaString(matriz);
    
    var table = document.getElementById("table-body");
    var totalRowCount = table.rows.length;
    var row = table.insertRow(totalRowCount);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = pivo;
    cell2.innerHTML = mString;
}