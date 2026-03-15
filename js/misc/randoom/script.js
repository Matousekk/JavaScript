let menu = document.querySelector('#menu');

menu.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case 'home':
            console.log('home button was clicked');
            break;
        case 'dashboard':
            console.log('dashboard button was clicked');
            break;
        case 'report':
            console.log('report button was clicked');
            break;
    }
})