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

        
        
        
    }
    
}