function hideMessage(){
    panelMessage = document.getElementById('message');
    panelMessage.style.display = "none";
}

function showMessage(winner){
    panelMessage = document.getElementById('message');
    panelMessage.style.display = "block";

    if(winner == 1) {
        stringNotification = "Game Over";
    }
    else{
        stringNotification = "You win";
    }

    notificationMessage = document.getElementById('notification');
    notificationMessage.innerHTML = stringNotification;

  
   
}