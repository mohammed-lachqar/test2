
const sideMenu = document.getElementById('SideMenu');
const menuBarBtn = document.getElementById('menuBar');
const closeSideBarBtn = document.getElementById('closeSideBar');

const cardContainer = document.getElementById('cards');
const creatContactBtn = document.getElementById('creatContact');
const addUserIcon = document.querySelector('.addUser');
const closeCardBtn = document.querySelector('.closeContainer .close');
const cancelBtn = document.querySelector('#contact-form .btn-secondary');
const modifyContactBtn = document.getElementById('modifyContact');
const modifySideBarBtn = document.getElementById('Modofier');


// open side bar
function openSideBar() {
    sideMenu.classList.add('open');
    closeCard();
}

// close side bar
function closeSideBar() {
    sideMenu.classList.remove('open');
}

// click on menu bar icon
menuBarBtn.onclick = function() {
    openSideBar();
};

// click on close side bar button
closeSideBarBtn.onclick = function() {
    closeSideBar();
};



// open card
function openCard() {
    cardContainer.style.display = 'block';
    closeSideBar();
}

// close card
function closeCard() {
    cardContainer.style.display = 'none';
}

// lien creer contact button
creatContactBtn.onclick = function(e) {    
    closeSideBar();          
    openCard(); 
};            

// lien add user icon
addUserIcon.onclick = function() {
    openCard();
};
// lien modifier user icon
modifyContactBtn.onclick = function() {
    openCard();
};
// lien modifier side bar button
modifySideBarBtn.onclick = function() {
    openCard();
};

//click on close card button
if (closeCardBtn) {
    closeCardBtn.onclick = function() {
        closeCard();
    };
}

// click on cancel button
if (cancelBtn) {
    cancelBtn.onclick = function(e) {
        closeCard();
    };
}
closeCard();
