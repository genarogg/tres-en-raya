function searchMove(){
    /**
     * contar numeros de bolas
     * si es superior a 1
     *      formar linea con colas
     *      cortar linea rival
     *      si no se hace nada de lo anterior
     *          si es 3
     *              borrar una(que no este bloqueando linea rival)
     *              movimiento aleatorio
     *  sino el movimiento aleatorio
     * 
     */
    
    var balls = checkTurnCount(1);
    if(balls > 1){
        var completed = false;
        
        //formar linea de la maquina
        if(completed == false){
            completed = completeRow(0, 1);
        }
        if(completed == false){
            completed = completeRow(1, 1);
        } 
        if(completed == false){
            completed = completeRow(2, 1);
        }
               
        if(completed == false){
            completed = completeColumn(0, 1);
        }
        if(completed == false){
            completed = completeColumn(1, 1);
        } 
        if(completed == false){
            completed = completeColumn(2, 1);
        } 
        
        if(completed == false){
            completed = completeDiag(1, 1);
        }
        if(completed == false){
            completed = completeDiag(-1, 1);
        } 

        //cortar linea rival
        if(completed == false){
            completed = completeRow(0, 2);
        }
        if(completed == false){
            completed = completeRow(1, 2);
        } 
        if(completed == false){
            completed = completeRow(2, 2);
        }

        if(completed == false){
            completed = completeColumn(0, 2);
        }
        if(completed == false){
            completed = completeColumn(1, 2);
        } 
        if(completed == false){
            completed = completeColumn(2, 2);
        } 

        if(completed == false){
            completed = completeDiag(1, 2);
        }
        if(completed == false){
            completed = completeDiag(-1, 2);
        }
        
        //si no se hizo nada de lo anterior
        if(completed == false){
            if(balls == 3){
                var cellFind = false;

                while(cellFind == false){
                    var x = Math.round(Math.random() * 2);
                    var y = Math.round(Math.random() * 2);

                    if(board[x][y] == 1 && checkBlock(x, y) == false){
                        cellFind = true;
                    }
                }
                ballSellectedX = x;
                ballSellectedY = y;
                clearCell(x, y);
            }
            randomMov();
        }
    }
    else{
        randomMov();
    }
}

function randomMov(){
    var cellAvalible = false;

    while(cellAvalible == false){
        var x = Math.round(Math.random() * 2);
        var y = Math.round(Math.random() * 2);

        if(board[x][y] == 0 && difMov(x, y)){
                cellAvalible = true;
        }
    }
    paintCell(x, y);
}

function completeRow(x, turnValue){
    //si hay 2 en linea
    if(checkRow(x, turnValue) == 2){
        //buscar cual casilla falta pra completar la linea
        var findFinal = false;
        for (i = 0; i < 3; i++) {
            if(board[i][x] == 0){
                findFinal = true;
                var findFinalX = i;
                var findFinalY = x;
            }
        }
        //si esta vacia
        if(findFinal == true){
           //si hay tres fichas
            if (checkTurnCount(turnValue) == 3) {
                //preguntar de quien queremos completar la linea
                //si es la maquina -> armar linea
                if(turnValue == 1){
                    var findLost = false;

                    for(i = 0; i < 3 && findLost == false; i++){
                        if(i != x){
                            for(j = 0; j < 3 && findLost == false; j++){
                                if(board[j][i] == 1){
                                    findLost = true;
                                    var findLostX = j;
                                    var findLostY = i;
                                }
                            }
                        }
                    }
                    //la borramos
                    ballSellectedX = findLostX;
                    ballSellectedY = findLostY;
                    clearCell(findLostX, findLostY);
                }
                //sino -> bloquear linea
                else{
                    //buscamos una ficha de la maquina que no bloquea
                    var cellFind = false;

                    while(cellFind == false){
                        var x = Math.round(Math.random() * 2);
                        var y = Math.round(Math.random() * 2);

                        if(board[x][y] == 1 && checkBlock(x, y) == false){
                            cellFind = true;
                        }
                    }
                    //la borramos
                    ballSellectedX = x;
                    ballSellectedY = y;
                    clearCell(x, y);

                }
            }
            //pintar la casilla final
            paintCell(findFinalX, findFinalY);
            return true;
        }
        //si no retorna false
        else{
            return false;
        }
    }
    //si no retorna false
    return false;
}

function completeColumn(x, turnValue){
    //si hay 2 en linea
    if(checkColumn(x, turnValue) == 2){
        //buscar cual casilla falta para completar la linea
        var findFinal = false;
        
        for (i = 0; i < 3; i++) {
            if(board[x][i] == 0){
                findFinal = true;
                var findFinalX = x;
                var findFinalY = i;
            }
        }
        //si esta vacia
        if(findFinal == true){
            ////si hay tres fichas
            if (checkTurnCount(turnValue) == 3) {
                //Preguntar de quien queremos completar la linea
                //si es la maquina -> armar linea
                if(turnValue == 1){
                    //buscamos la perdida
                    var findLost = false;
                    
                    for(i = 0; i < 3 && findLost == false; i++){
                        if(i != x){
                            for(j = 0; j < 3 && findLost == false; j++){
                                if(board[i][j] == 1){
                                    findLost = true;
                                    var findLostX = i;
                                    var findLostY = j;
                                }
                            }
                        }
                    }
                    //la borramos
                    ballSellectedX = findLostX;
                    ballSellectedY = findLostY;
                    clearCell(findLostX, findLostY);
                }
                //sino -> bloquiar linea
                else{
                    //buscamos una ficha de la maquina que no blequea
                    cellFind = false;

                    while(cellFind == false){
                        var x = Math.round(Math.random() * 2);
                        var y = Math.round(Math.random() * 2);

                        if(board[x][y] == 1 && checkBlock(x, y) == false){
                            cellFind = true;
                        }
                    }
                    ballSellectedX = x;
                    ballSellectedY = y;
                    clearCell(x, y);
                }
            }
            //pintar la casilla final
            paintCell(findFinalX, findFinalY);
            return true;
        }
        //sino regresa falso
        else{
            return false;
        }
    }
    //sino regresa falso
    return false;
}

function completeDiag(x, turnValue){
    //si hay 2 en linea
    if(checkDiag(x, turnValue) == 2){
        //buscar cual casilla falta para completar la linea
        var findFinal = false;

        if(board[1][1] == 0){
            var findFinalX = 1;
            var findFinalY = 1; 
            findFinal = true;
        }

        if(board[(1 - x)][2] == 0){
            var findFinalX = (1 - x);
            var findFinalY = 2; 
            findFinal = true;
        }

        if(board[(1 + x)][0] == 0){
            var findFinalX = (1 + x);
            var findFinalY = 0; 
            findFinal = true;
        }
        //si esta vacia
        if(findFinal == true){
            //si hay tres fichas
            if (checkTurnCount(turnValue) == 3) {
                //preguntar de quien queremos completar la linea
                //si es la maquina -> armar linea
                if(turnValue == 1){
                    //buscamos la perdida
                    var findLost = false;
                    
                    for(i = 0; i < 3 && findLost == false; i++){
                        for(j = 0; j < 3 && findLost == false; j++){
                            if(( (i != 1 || j != 1 ) 
                                && (i != (1 - x) || j != 2) 
                                && (i != (1 + x) || j != 0 )) 
                                && board[j][i] == 1){

                                findLost = true;
                                var findLostX = j;
                                var findLostY = i;
                            }
                        }
                    }
                    //la borramos
                    ballSellectedX = findLostX;
                    ballSellectedY = findLostY;
                    clearCell(findLostX, findLostY);
                }
                //sino -> bloquear linea
                else{
                    //buscamos una ficha de la maquina que no bloquea
                    cellFind = false;

                    while(cellFind == false){
                        var x = Math.round(Math.random() * 2);
                        var y = Math.round(Math.random() * 2);

                        if(board[x][y] == 1 && checkBlock(x, y) == false){
                            cellFind = true;
                        }
                    }
                    //la borramos 
                    ballSellectedX = x;
                    ballSellectedY = y;
                    clearCell(x, y);
                } 
            }
            //pintar la casilla final
            paintCell(findFinalX, findFinalY);
            return true;
        }
        
    }
   
}