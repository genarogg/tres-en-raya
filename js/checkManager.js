function checkRow(x, value){
    var countValue = 0;

    for (i = 0; i < 3; i++) {
        if(board[i][x] == value){
            countValue++;
        }	
    }
    return countValue;
}



























