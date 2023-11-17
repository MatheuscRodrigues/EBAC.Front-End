/*const popupID = document.querySelectorAll('[data-tab-id]')
const buttons = document.querySelectorAll('[data-tab-buttons]')

document.addEventListener('DOMContentLoaded', function(){

    window.addEventListener('load', function () {
        const heroLogo = document.querySelector('.hero__brand__image')
        setTimeout(function () {
            document.body.style.overflow = 'hidden'
            heroLogo.style.opacity = 1
            heroLogo.style.transform = 'scale(1.05)'
        }, 500)
        setTimeout(function() {
            document.body.style.overflow = 'auto'
        }, 5000)
    })
    
    function closePopups() {
        for (let i = 0; i < popupID.length; i++) {
            popupID[i].classList.remove('cast__popup--is-active')
        }
    }

    for (let i=0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function (event) {
            const buttonTarget = event.target.dataset.tabButton
            const popupTarget = document.querySelector(`[data-tab-id=${buttonTarget}]`)
            closePopups();
            popupTarget.classList.add('cast__popup--is-active')
        })
    }

})
*/
const popupID = document.querySelectorAll('.cast__popup');
const buttons = document.querySelectorAll('[data-tab-buttons]');

document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('beforeunload', function() {
        window.scrollTo(0, 0);
    });

    window.addEventListener('load', function () {
        const heroLogo = document.querySelector('.hero__brand__image');
        setTimeout(function () {
            document.body.style.overflow = 'hidden';
            heroLogo.style.opacity = 1;
            heroLogo.style.transform = 'scale(1.05)';
        }, 500);
        setTimeout(function () {
            document.body.style.overflow = 'auto';
        }, 5000);
    });

    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonTarget = button.dataset.tabButtons;
            const popupTarget = document.querySelector(`[data-tab-id=${buttonTarget}]`);
            closePopups(); // Fecha todos os popups antes de abrir o desejado
            popupTarget.classList.add('cast__popup--is-active');
        });
    });
    
});

function closePopups() {
    popupID.forEach(popup => {
        popup.classList.remove('cast__popup--is-active');
    });
}

