var board = new Array(3);
var turn;

var crossSellectedX;
var crossSellectedY;

var ballSellectedX;
var ballSellectedY;

function clearCell(x, y) {
  board[x][y] = 0;

  cell = document.getElementById("c" + x + y);
  cell.innerHTML = "";
}

function clearBoard() {
  for (var i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      clearCell(i, j);
    }
  }
}

function paintCell(x, y) {
  cell = document.getElementById("c" + x + y);
  cell.innerHTML = "<img src = './img/" + turn + ".gif'></img>";

  if (turn == "ball") {
    board[x][y] = 1;
    ballSellectedX = x;
    ballSellectedY = y;
  } else {
    board[x][y] = 2;
    crossSellectedX = x;
    crossSellectedY = y;
  }

  checkLine();

  if (turn == "ball") {
    turn = "cross";
  } else {
    turn = "ball";
  }
}

function checkCell(x, y) {
  crosses = checkTurnCount(2);

  if (crosses == 3) {
    if (board[x][y] == 2) {
      crossSellectedX = x;
      crossSellectedY = y;
      clearCell(x, y);
    }
  } else {
    if (board[x][y] == 0 && difMov(x, y)) {
      selectCell(x, y);
    }
  }
}

function selectCell(x, y) {
  paintCell(x, y);
  searchMove();
}

function autoplay() {
  hideMessage();

  for (var i = 0; i < 3; i++) {
    board[i] = new Array(3);
  }

  turn = "ball";

  crossSellectedX = 4;
  crossSellectedY = 4;

  ballSellectedX = 4;
  ballSellectedY = 4;

  clearBoard();
  searchMove();
}

function hiddenNotification (){
  const hiddeNotification = document.getElementById("message")
  console.log(hiddeNotification)

  hiddeNotification.classList.add('hiddeMessage');

}

//llamado de funciones
autoplay();
