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

    

   

}
























