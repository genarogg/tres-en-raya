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

   

    return countValue;
}

























