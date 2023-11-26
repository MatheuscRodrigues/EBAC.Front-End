const tabsID = document.querySelectorAll('[data-tab-id]')
const buttons = document.querySelectorAll('[data-tab-button]')
const questions = document.querySelectorAll('[data-faq-question]')
const heroHeight = document.querySelector('.hero').clientHeight
const header = document.querySelector('.header')

document.addEventListener('DOMContentLoaded', function () {

    //Realiza a alteração de abas na section 'shows'
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (button) {
            const buttonTarget = button.target.dataset.tabButton
            const tabTarget = document.querySelector(`[data-tab-id=${buttonTarget}]`)
            tabsHidden();
            tabTarget.classList.add('shows__list--is-active')
            removeButtonNotActive()
            buttons[i].classList.add('shows__tabs__button--is-active')
        })
    }

    //Realiza a abertura e fechamento das abas do FAQ
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer)
    }

    //Função para ocultar ou mostrar o cabeçalho
    window.addEventListener('scroll', function () {
        var positionScroll = window.scrollY;

        if (positionScroll < heroHeight) {
            header.classList.add('header--is-hidden')
        } else {
            header.classList.remove('header--is-hidden')
        }
    })
})

//Realiza a abertura e fechamento das abas do FAQ
function openOrCloseAnswer(element) {
    const classAdd = 'faq__questions__item--is-open'
    const parentElement = element.target.parentNode;
    parentElement.classList.toggle(classAdd)
}

function removeButtonNotActive() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function tabsHidden() {
    for (let i = 0; i < tabsID.length; i++) {
        tabsID[i].classList.remove('shows__list--is-active')
    }
}