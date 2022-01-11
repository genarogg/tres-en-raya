const hideMessage = () => {
  panelMessage = document.getElementById("message");
  panelMessage.style.display = "none";
  panelMessage.classList.remove("hiddeMessage");

  const cuadroTansparente = document.getElementById("cuadroTansparente");
  cuadroTansparente.style.display = "none";
};

const showMessage = (winner) => {
  panelMessage = document.getElementById("message");
  panelMessage.style.display = "block";

  cuadroTansparente = document.getElementById("cuadroTansparente");
  cuadroTansparente.style.display = "block";

  if (winner == 1) {
    stringNotification = "Game Over";
  } else {
    stringNotification = "You win";
  }

  notificationMessage = document.getElementById("notification");
  notificationMessage.innerHTML = stringNotification;

  if (winner == 1) {
    stringButton = "Intentar de nuevo | Try again!";
  } else {
    stringButton = " Juega de nuevo | Play Again";
  }

  MessageButton = document.getElementById("button");
  MessageButton.innerHTML = stringButton;

  if (winner == 1) {
    StringTwitter =
      "<a class='tweet' target='blank' href='http://facebook.com/share?text=se me hizo imposible ganar este juegos genarogg.ml/juegos/Tres-en-raya'>compartir por Facebook</a>";
  } else {
    StringTwitter =
      "<a class='tweet' target='blank' href='http://facebook.com/share?text=he ganado ha un juego con inteligencia artificial genarogg.ml/juegos/Tres-en-raya'>compartir por Facebook</a>";
  }
  messageTweet = document.getElementById("tweetGameOver");
  messageTweet.innerHTML = StringTwitter;
};
