let fabButton = document.getElementById('fab-button');
let apresentationScreen = document.getElementById('apresentation-screen');
let objectiveScreen = document.getElementById('objective-screen');


function scrollTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= apresentationScreen.offsetTop) {
            fabButton.style.visibility = 'visible';

        }else{
            fabButton.style.visibility = 'hidden';
        }
    });
}

scrollTop();
