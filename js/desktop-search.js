let searchIcon = document.getElementById('desktop-search-icon');
let closeSearch = document.getElementById('close-search');
let mainPage = document.querySelector('.main-container');
let searchContainer = document.querySelector('.desktop-search');

// let searchDropDowmn = document.querySelector('.desktop-search-contents');


searchIcon.addEventListener('click', function() {
    mainPage.classList.add('main-container-hidden');
    searchContainer.classList.add('desktop-search-active');/*why is this line showing error */
    searchDropDowmn.classList.add('desktop-search-contents-active');
});

closeSearch.addEventListener('click', function() {
     mainPage.classList.remove('main-container-hidden');
    searchContainer.classList.remove('desktop-search-active');/*why is this line showing error */
    searchDropDowmn.classList.remove('desktop-search-contents-active');
    closeSearch.style.color = 'red';
    console.log('1');
});