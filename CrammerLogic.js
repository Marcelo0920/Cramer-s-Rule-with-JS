const matriz = [
    [1, -3, 2, -3],
    [5, 6, -1, 13],
    [4, -1, 3, 8]
]
const Resultado = (...deter) => {
    let answears = [];
    console.log(deter);
    for(let counter = 0; counter < deter.length - 1; counter++){
        answears.push(deter[counter]/deter[deter.length-1]);
    }
    console.log(answears);
    return answears;   //Returning an array with the answears [x,y,z]
}
const Copier = (matriz) => {    /*You put the value of your Matrix in this function, and then it calculates the x,y,z values */
    let determinantes = [];
    for(let counterAux = 0; counterAux <= 3; counterAux++){
        let MatrizCopia = [[1],[1],[1]];
        for (let counter = 0; counter < 3; counter++){
            for (let Iterador = 0; Iterador <= 3; Iterador++){
            MatrizCopia[counter][Iterador] = matriz[counter][Iterador];
            }
        }
        determinantes.push(CramerInit(MatrizCopia, counterAux));
    }
    Resultado(...determinantes);
}
const CramerInit = (matriz, counter) => {
    let MatrizAux = matriz;  
    for (let Iterador = 0; Iterador < 3; Iterador++){
        MatrizAux[Iterador][counter] = matriz[Iterador][3];
    }
    return (Cramer(MatrizAux));
}
const Cramer = (matriz) => {
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
    let respuesta = answear1 - answear2;
    return respuesta;
}
