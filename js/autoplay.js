var board = new Array(3);
var turn;

var crossSellectedX;
var crossSellectedY;

var ballSellectedX;
var ballSellectedY;

function clearCell(x, y){
    board[x][y] = 0;

    cell = document.getElementById("c" + x + y);
    cell.innerHTML = "";
}

function clearBoard(){
    for(var i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
            clearCell(i, j);
        }
    }
}

function paintCell(x, y){
    cell = document.getElementById('c' + x + y);
    cell.innerHTML = "<img src = './img/" + turn + ".gif'></img>";

    

    

    
}















