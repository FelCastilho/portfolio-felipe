function scrollTop(){

    let fabButton = document.getElementById('fab-button');
    let homeScreen = document.getElementById('home-screen');
    let apresentationScreen = document.getElementById('apresentation-screen');

    if(window.screenY == apresentationScreen){
        fabButton.style.visibility = 'visible';
    }


}

scrollTop();