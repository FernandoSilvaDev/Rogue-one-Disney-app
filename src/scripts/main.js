document.addEventListener ('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll ('[data-tab-button]');
    const buttons2 = document.querySelectorAll ('[data-tab-button]');

    const hamMenu = document.querySelector ('.ham-menu');
    const offScreenMenu = document.querySelector ('.header__links');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener ('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector (`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas ();
            aba.classList.add ('shows__list--is-active');

            removeBotaoAtivo ();
            botao.target.classList.add ('shows__tabs__button--is-active');
        })
    }
// _________________________________________________________________________________________
    for (let i = 0; i < buttons2.length; i++) {
        buttons2[i].addEventListener ('click', function (botao2) {
            const abaAlvo2 = botao2.target.dataset.tabButton;
            const aba2 = document.querySelector (`[data-tab-id=${abaAlvo2}]`);
            escondeTodasAbas2 ();
            aba2.classList.add ('details--is-active2');
            
            removeBotaoAtivo2 ();
            botao2.target.classList.add ('shows__tabs__button--is-active2');
        })
    }
//_________________________________________________________________________________________________
    hamMenu.addEventListener ('click', () => {
        hamMenu.classList.toggle ('ham-menu--is-active');
        offScreenMenu.classList.toggle ('ham-menu--is-active');
    });
})



function removeBotaoAtivo2 () {

    const buttons2 = document.querySelectorAll ('[data-tab-button]');

    for (let i = 0; i < buttons2.length; i++) {

        buttons2[i].classList.remove('shows__tabs__button--is-active2', 'shows__tabs__button--is-active');
    }
}

function escondeTodasAbas2 (){
    const tabsContainer2 = document.querySelectorAll ('[data-tab-id]');

    for (let i = 0; i < tabsContainer2.length; i++) {

        tabsContainer2[i].classList.remove('details--is-active2', 'details--is-active');
    }
}
// _____________________________________________________________________________________________
function removeBotaoAtivo () {
    const buttons = document.querySelectorAll ('[data-tab-button]');


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active', 'shows__tabs__button--is-active2');

    }
}
function escondeTodasAbas (){
    const tabsContainer = document.querySelectorAll ('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active', 'details--is-active2');
    }
}


