function checkRow(x, value){
    var countValue = 0;

    for (i = 0; i < 3; i++) {
        if(board[i][x] == value){
            countValue++;
        }	
    }
    return countValue;
}

function checkColumn(y, value){
    var countValue = 0;

    for (var i = 0; i < 3; i++) {
        if(board[y][i] == value){
            countValue++;
        }	
    }
    return countValue;
}


function checkDiag(d, value){
    var countValue = 0;

    if(board[(1 + d)][0] == value){
        countValue++;
    }
    if(board[1][1] == value){
        countValue++;
    }
    if(board[(1 - d)][2] == value){
        countValue++;
    }

    return countValue;
}

function checkLine(){
    if(turn == "ball"){
        var value = 1;
    }
    else{
        var value = 2;
    }

    var line = false;

    if(checkRow(0, value) == 3){
        line = true;
    } 
    if(checkRow(1, value) == 3){
        line = true;
    } 
    if(checkRow(2, value) == 3){
        line = true;
    }

    if(checkColumn(0, value) == 3){
        line = true;
    } 
    if(checkColumn(1, value) == 3){
        line = true;
    } 
    if(checkColumn(2, value) == 3){
        line = true;
    }

    if(checkDiag(1, value) == 3){
        line = true;
    } 
    if(checkDiag(-1, value) == 3){
        line = true;
    }

    if(line == true){
        showMessage(value);
    }

}

function checkTurnCount(turnValue){
    var turnCount = 0;

    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            if(board[i][j] == turnValue){
                turnCount++;
            } 
        }
    }
    return turnCount;
}


function difMov(x, y){
	var diferent = false;
	
    if(turn == "cross"){

        if(x != crossSellectedX){
                diferent = true;
        }
        if(y != crossSellectedY){
                diferent = true;
        }
    }
    else{
    if(x != ballSellectedX){
            diferent = true;
    }
    if (y != ballSellectedY){
            diferent = true;
    }
}
	return diferent;
}


function checkBlock(x, y){
    if(checkRow(y, 1) == 1 && checkRow(y, 2) == 2){
        return true;
    }
    if(checkColumn(x, 1) == 1 && checkColumn(x, 2) == 2){
        return true;
    }

    

    
    return false;
}
















