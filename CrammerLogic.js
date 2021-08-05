let matriz = [
    [1, -3, 2, -3],
    [5, 6, -1, 13],
    [4, -1, 3, 8]
]

function CramerInit(...matriz){
    let determinantes = [];
    let MatrizAux;
    console.log(matriz);
    for (let counter = 1; counter <=3; counter++){
        MatrizAux = [...matriz];
        console.log(MatrizAux);
        for (let Iterador = 0; Iterador < 3; Iterador++){
            MatrizAux[Iterador][counter] = matriz[Iterador][3];
        }
        determinantes.push(Cramer(...MatrizAux));
    }
    console.log(determinantes);
}

function Cramer(...matriz){
    let answear1 = 0;
    for(let IteradorY = 0; IteradorY < 3; IteradorY++){
        let answearLoop = 1;
        for(let IteradorX = 0; IteradorX < 3; IteradorX++){
            if(IteradorY + IteradorX < 3){
                answearLoop = answearLoop * matriz[IteradorY+IteradorX][IteradorX];
            }else{
                answearLoop = answearLoop * matriz[IteradorY+IteradorX - 3][IteradorX];
            }
        }
        answear1 = answear1 + answearLoop;
    }
    let answear2 = 0;
    for(let IteradorY = 0; IteradorY < 3; IteradorY++){
        let answearLoop = 1;
        for(let IteradorX = 2; IteradorX >= 0; IteradorX--){
            if(IteradorY - IteradorX <= 0){
                answearLoop = answearLoop * matriz[IteradorY - IteradorX + 2][IteradorX];
            }else{
                answearLoop = answearLoop * matriz[IteradorY -IteradorX -1 ][IteradorX];
            }
        }
        answear2 = answear2 + answearLoop;
    }
    console.log(answear2, answear1)
    let respuesta = answear1 - answear2;
    
    return respuesta;
}

//[0,0] => [1,1] => [2,2]  //siempre hay un +1 entre los 2 términos
//[1,0] => [2,1] => [3,2]
//[2,0] => [3,1] => [4,2]
//y si el contador supera el tamaño de la matriz este se resta por el tamaño de la misma, para dar la apariencia que es una matriz extendida