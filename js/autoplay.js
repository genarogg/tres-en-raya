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

















